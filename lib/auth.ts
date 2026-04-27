/**
 * lib/auth.ts — Helpers magic-link auth (côté frontend).
 *
 * - JWT stocké en localStorage (key: agenzia_jwt)
 * - Helper authFetch qui ajoute Authorization: Bearer auto
 * - getCurrentUser() lit /api/me, useAuth hook React
 */
import { useEffect, useState } from 'react';

const API_BASE = (import.meta.env.VITE_BRIDGE_URL as string) || 'https://api.getagenzia.fr';
const JWT_KEY = 'agenzia_jwt';

export const authStorage = {
  get(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(JWT_KEY);
  },
  set(jwt: string): void {
    localStorage.setItem(JWT_KEY, jwt);
  },
  clear(): void {
    localStorage.removeItem(JWT_KEY);
  },
};

export async function requestMagicLink(email: string): Promise<{ ok: boolean; message: string }> {
  const r = await fetch(`${API_BASE}/api/auth/magic-link`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await r.json();
  return { ok: r.ok, message: data.message || data.detail || 'Erreur' };
}

export async function verifyMagicLink(token: string): Promise<{ ok: boolean; jwt?: string; error?: string }> {
  const r = await fetch(`${API_BASE}/api/auth/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await r.json();
  if (!r.ok) return { ok: false, error: data.detail || 'Lien invalide' };
  authStorage.set(data.jwt);
  return { ok: true, jwt: data.jwt };
}

export async function authFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const jwt = authStorage.get();
  const headers = new Headers(init.headers || {});
  if (jwt) headers.set('Authorization', `Bearer ${jwt}`);
  return fetch(`${API_BASE}${path}`, { ...init, headers });
}

export type CurrentUser = {
  id: string;
  email: string;
  full_name: string | null;
  company_name: string | null;
  plan: 'free' | 'pro' | 'enterprise';
  subscription_status: string | null;
  stripe_customer_id: string | null;
  seats_count: number;
  last_login_at: string | null;
};

export async function getCurrentUser(): Promise<CurrentUser | null> {
  if (!authStorage.get()) return null;
  const r = await authFetch('/api/auth/me');
  if (!r.ok) {
    if (r.status === 401) authStorage.clear();
    return null;
  }
  return r.json();
}

export async function logout(): Promise<void> {
  try { await authFetch('/api/auth/logout', { method: 'POST' }); } catch {}
  authStorage.clear();
  window.location.href = '/';
}

export function useAuth() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getCurrentUser()
      .then(u => { if (!cancelled) setUser(u); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { user, loading, logout };
}
