---
title: "Progress : baseline Isolation Forest et features"
date: 2026-06-25
categories:
  - progress
project_id: projet-test
domain: data-science
autonomy: solo-project
stage: notebook
status: wip
tags:
  - Python
  - scikit-learn
excerpt: "Développement — jeu synthétique, features rolling et premier modèle."
---

[Détection d'anomalies capteurs IoT](/projects/projet-test/)

## What I did

- Génération de 4 capteurs × 30 jours (1 point / 5 min) avec 12 anomalies injectées
- Features : rolling mean/std (1 h), delta température, heure du jour
- `IsolationForest` entraîné sur période « normale »
- Premier bilan : recall 0.75, precision 0.60 (trop de faux positifs)

## Next steps

- [ ] Ajuster `contamination` et seuil de décision
- [ ] Règles métier : pas d'alerte si un seul capteur dévie < 30 min
- [ ] Visualisation des alertes sur timeline
