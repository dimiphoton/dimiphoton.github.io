---
title: "Progress : modèle VRP et premières tournées"
date: 2026-02-28
categories:
  - progress
project_id: optim-vrp-delivery
domain: optimization
autonomy: solo-project
stage: prototype
status: wip
tags:
  - Python
  - OR-Tools
excerpt: "Développement — implémentation OR-Tools et visualisation folium."
---

[Optimisation de tournées VRP](/projects/optim-vrp-delivery/)

## What I did

- Génération d'un jeu de 25 arrêts autour de Lyon (coordonnées aléatoires contraintes)
- Modèle `RoutingIndexManager` + `RoutingModel` avec dimension capacité
- Première solution : distance totale 142 km → 118 km vs ordre naïf (+17 %)
- Export GeoJSON des polylines + carte folium

## Next steps

- [ ] Ajouter contrainte fenêtre horaire sur 5 arrêts prioritaires
- [ ] Benchmark temps de résolution selon taille de flotte
- [ ] Documenter les paramètres du solveur dans le notebook
