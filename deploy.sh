#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════════
#  deploy.sh — Manual deploy script: Agenzia site → Hetzner 204.168.190.123
#
#  Usage:
#    chmod +x deploy.sh
#    SSH_KEY=~/.ssh/id_rsa ./deploy.sh          # with custom key
#    ./deploy.sh                                 # uses default ~/.ssh/id_rsa
#
#  Prerequisites (local machine):
#    - Node.js 20+
#    - rsync, ssh, scp installed
#    - SSH key authorised on root@204.168.190.123
#
#  First-time server setup (run once):
#    ./deploy.sh --setup
# ═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

# ── Config ────────────────────────────────────────────────────────────────────
DEPLOY_HOST="204.168.190.123"
DEPLOY_USER="root"
DEPLOY_PATH="/var/www/agenzia-site"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_rsa}"
NGINX_CONF="./nginx/agenzia-site.conf"

SSH_CMD="ssh -i $SSH_KEY -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15"
SCP_CMD="scp -i $SSH_KEY -o StrictHostKeyChecking=accept-new"

# ── Colours ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
info()    { echo -e "${GREEN}[✓]${NC} $*"; }
warning() { echo -e "${YELLOW}[!]${NC} $*"; }
error()   { echo -e "${RED}[✗]${NC} $*"; exit 1; }

# ════════════════════════════════════════════════════════════════════════════════
# FIRST-TIME SERVER SETUP
# ════════════════════════════════════════════════════════════════════════════════
setup_server() {
  info "Setting up Hetzner server for first time..."

  $SSH_CMD $DEPLOY_USER@$DEPLOY_HOST bash << 'REMOTE'
    set -e
    apt-get update -qq

    # Nginx
    if ! command -v nginx &>/dev/null; then
      apt-get install -y nginx
      echo "Nginx installed"
    else
      echo "Nginx already present"
    fi

    # Certbot (Let's Encrypt)
    if ! command -v certbot &>/dev/null; then
      apt-get install -y certbot python3-certbot-nginx
      echo "Certbot installed"
    fi

    # Create web root
    mkdir -p /var/www/agenzia-site
    mkdir -p /var/www/certbot

    # Remove default Nginx site
    rm -f /etc/nginx/sites-enabled/default

    echo "✅ Server setup complete"
REMOTE

  info "Server setup done."
}

# ════════════════════════════════════════════════════════════════════════════════
# MAIN DEPLOY
# ════════════════════════════════════════════════════════════════════════════════
deploy() {
  # ── 1. Build ──────────────────────────────────────────────────────────────
  info "Building Vite app..."
  npm ci --silent
  npm run build
  info "Build complete → dist/"

  # ── 2. SSH connectivity check ─────────────────────────────────────────────
  info "Testing SSH connection to $DEPLOY_HOST..."
  $SSH_CMD $DEPLOY_USER@$DEPLOY_HOST "echo '✅ SSH OK'" || error "Cannot connect. Check SSH key."

  # ── 3. Create remote directory ────────────────────────────────────────────
  $SSH_CMD $DEPLOY_USER@$DEPLOY_HOST "mkdir -p $DEPLOY_PATH"
  info "Remote path ready: $DEPLOY_PATH"

  # ── 4. Rsync dist/ → server ───────────────────────────────────────────────
  info "Uploading dist/ via rsync..."
  rsync -avz --delete \
    -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=accept-new" \
    ./dist/ \
    $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/
  info "Upload complete"

  # ── 5. Push Nginx config ──────────────────────────────────────────────────
  info "Updating Nginx config..."
  $SCP_CMD $NGINX_CONF \
    $DEPLOY_USER@$DEPLOY_HOST:/etc/nginx/sites-available/agenzia-site

  $SSH_CMD $DEPLOY_USER@$DEPLOY_HOST << REMOTE
    ln -sf /etc/nginx/sites-available/agenzia-site /etc/nginx/sites-enabled/agenzia-site
    nginx -t 2>&1 && (systemctl reload nginx 2>/dev/null || nginx -s reload) && echo "✅ Nginx reloaded"
REMOTE

  # ── 6. Health check ───────────────────────────────────────────────────────
  sleep 3
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "http://$DEPLOY_HOST" || echo "000")
  info "Health check → HTTP $HTTP_CODE"

  if [[ "$HTTP_CODE" == "200" || "$HTTP_CODE" == "301" || "$HTTP_CODE" == "302" ]]; then
    info "✅ Deploy successful! Site live at http://$DEPLOY_HOST"
    echo ""
    echo "Next steps:"
    echo "  1. Point DNS: agenzia.uk A → $DEPLOY_HOST"
    echo "  2. SSL cert:  $SSH_CMD $DEPLOY_USER@$DEPLOY_HOST 'certbot --nginx -d agenzia.uk -d www.agenzia.uk'"
    echo "  3. Dashboard: https://agenzia.uk/dashboard/"
  else
    warning "HTTP $HTTP_CODE — site may not be serving correctly. Check Nginx logs:"
    echo "  $SSH_CMD $DEPLOY_USER@$DEPLOY_HOST 'journalctl -u nginx -n 50'"
  fi
}

# ── Entry point ────────────────────────────────────────────────────────────────
case "${1:-deploy}" in
  --setup) setup_server ;;
  deploy|*) deploy ;;
esac
