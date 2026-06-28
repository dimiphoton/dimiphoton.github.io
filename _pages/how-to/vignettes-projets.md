---
title: "Vignettes projet"
layout: single
permalink: /how-to/vignettes-projets/
author_profile: false
classes:
  - wide
toc: true
sidebar:
  nav: "writing"
---

# Vignettes projet — tutoriel

Les cartes sur l'[accueil](/) et la page [Projects](/projects/) affichent une **vignette** (bandeau en haut de la carte). Ce tutoriel explique comment la personnaliser.

## Comportement par défaut

| Situation | Affichage |
|-----------|-----------|
| `header.teaser` défini | Ton image (recadrée en paysage 2:1) |
| Pas de teaser | Bandeau coloré selon le `domain` |
| `featured: true` | Projet en tête de liste + badge ★ Sélection |

Les placeholders SVG actuels se trouvent dans `assets/images/projects/`. Remplace-les par de vraies captures quand tu les as.

---

## Étape 1 — Préparer l'image

### Format

| Paramètre | Valeur |
|-----------|--------|
| Ratio | **2:1** (ex. 800×400, 1200×600) |
| Format | WebP ou JPG (PNG si graphiques nets) |
| Poids | < 150 Ko si possible |

### Contenu recommandé

Montre le **résultat** du projet, pas tout ton IDE :

- **Optimisation** : carte des tournées, courbe de convergence
- **Géospatial** : carte NDVI, fond cartographique
- **MLOps / ETL** : schéma pipeline, arborescence Parquet
- **ML / Kaggle** : courbe ROC, matrice de confusion, score
- **Énergie** : courbe de température simulée vs mesurée

---

## Étape 2 — Déposer le fichier

Place l'image dans :

```
assets/images/projects/<project_id>-cover.webp
```

Exemple : `assets/images/projects/optim-vrp-delivery-cover.webp`

Nommage conseillé : reprendre le `project_id` du hub pour t'y retrouver.

---

## Étape 3 — Mettre à jour le hub `_projects/`

Ouvre le fichier hub, par ex. `_projects/optim-vrp-delivery.md`, et ajoute :

```yaml
---
title: "Optimisation de tournées VRP"
header:
  teaser: /assets/images/projects/optim-vrp-delivery.svg
  teaser_alt: "Carte de tournées de livraison optimisées"
permalink: /projects/optim-vrp-delivery/
project_id: optim-vrp-delivery
domain: optimization
# ...
---
```

| Champ | Rôle |
|-------|------|
| `header.teaser` | Chemin vers l'image (depuis la racine du site) |
| `header.teaser_alt` | Description pour l'accessibilité (lecteurs d'écran) |

---

## Étape 4 — Exporter depuis un notebook

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(12, 6))  # ratio 2:1
# ... ton graphique ou ta carte ...

fig.savefig(
    "assets/images/projects/mon-projet-cover.png",
    dpi=150,
    bbox_inches="tight",
    facecolor="white",
)
plt.close()
```

Puis mets à jour `header.teaser` avec le bon chemin.

---

## Étape 5 — Vérifier en local

```bash
bundle install
bundle exec jekyll serve
```

Contrôle :

1. [Accueil](/) — section « Projets sélectionnés » (max 3 `featured`)
2. [/projects/](/projects/) — toutes les cartes
3. Redimensionne la fenêtre (mobile) : le texte reste lisible

---

## Placeholders actuels

Chaque hub de démo référence déjà un SVG dans `assets/images/projects/` :

| Fichier | Projet |
|---------|--------|
| `optim-vrp-delivery.svg` | Optimisation VRP |
| `geo-ndvi-sentinel.svg` | NDVI Sentinel-2 |
| `etl-openmeteo.svg` | Pipeline ETL météo |
| `rc-model-heating.svg` | Modèle RC chauffage |
| `projet-test.svg` | Anomalies IoT |
| `ens-sklearn-lab.svg` | TP ENS sklearn |
| `geopandas-parcelles.svg` | TP géopandas |
| `kaggle-titanic.svg` | Kaggle Titanic |
| `kaggle-spaceship.svg` | Kaggle Spaceship |

Pour remplacer un placeholder : ajoute ton image (`.webp` / `.jpg`), change `teaser` dans le hub, commit, push.

---

## Mise en avant (`featured`)

```yaml
featured: true
```

- Tri en tête sur `/projects/`
- Badge **★ Sélection**
- Éligible à l'accueil (3 premiers `featured` affichés)

Réserve `featured: true` à tes **2–3 meilleurs** projets.

---

## Dépannage

**L'image ne s'affiche pas**

- Le chemin commence par `/assets/...`
- Le fichier est bien commité dans le dépôt
- Redémarre `jekyll serve` après ajout d'assets

**Image coupée bizarrement**

- Utilise un ratio 2:1 ; le CSS recadre avec `object-fit: cover`

**Toujours le bandeau coloré**

- Vérifie l'indentation YAML sous `header:`
- Pas d'espace en trop dans le chemin

---

[← Retour aux how-to](/how-to/)
