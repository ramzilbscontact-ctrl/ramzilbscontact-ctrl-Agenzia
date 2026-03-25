# Guide de Deploiement - Agenzia (React + Vite + GH-Pages)

## 1. Rappel de la structure (racine)

Le projet est configure SANS dossier `/src`.
Les fichiers essentiels a la racine sont :
- `index.html` : Point d'entree navigateur
- `index.tsx` : Point d'entree React
- `.nojekyll` : Empeche GitHub de bloquer les fichiers
- `vite.config.ts` : Configuration des chemins

## 2. Configuration Vite (vite.config.ts)

Toujours garder `base: "./"` pour eviter les erreurs 404 sur les assets.
Le dossier de sortie doit etre `dist`.

## 3. Procedure de mise a jour (Workflow)

Des que tu as fini une modification :

1. Verifier que tes fichiers sont sauvegardes
2. Lancer la commande dans le terminal :
   ```bash
   npm run deploy
   ```
   (Cette commande fait le build + l'envoi sur GitHub automatiquement)
3. Attendre 60 secondes que GitHub Pages se mette a jour
4. Ouvrir le site et faire `Cmd + Shift + R` pour vider le cache

## 4. Resolution de problemes (Depannage)

### A. Erreur "Authentication Failed"
Ton token GitHub a expire ou a ete supprime.
Genere un nouveau Token (Classic) avec droits `repo` et lance :
```bash
git remote set-url origin https://TON_PSEUDO:TON_TOKEN@github.com/TON_PSEUDO/TON_DEPOT.git
```

### B. Ecran blanc (souci de chemin)
Verifie que ton `index.html` contient bien :
```html
<script type="module" src="./index.tsx"></script>
```

### C. Site qui ne se met pas a jour
Verifie la presence du fichier `.nojekyll` a la racine.
```bash
touch .nojekyll && git add .nojekyll && git commit -m "fix"
```
