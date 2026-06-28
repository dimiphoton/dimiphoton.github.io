---
title: "Progress : VRP livré — prototype terminé"
date: 2026-03-20
categories:
  - progress
project_id: optim-vrp-delivery
domain: optimization
autonomy: solo-project
stage: prototype
status: done
tags:
  - OR-Tools
excerpt: "Final — prototype validé, notebook et exports livrés."
---

[Optimisation de tournées VRP](/projects/optim-vrp-delivery/)

## What I did

- Fenêtres horaires ajoutées sur 8 arrêts (contrainte soft via pénalité)
- Notebook final avec instructions de reproduction
- Export JSON des tournées + carte HTML autonome
- Tests sur 3 scénarios de demande (faible / moyenne / pic)

## Résultat

Prototype **terminé** au stade `prototype`. Gain distance médian **14 %** vs construction manuelle simulée. Pas de déploiement prévu — livrable = notebook + artefacts.

## Next steps

- [ ] Idée future : brancher sur API de routage réel (OSRM)
- [ ] Ou archiver comme référence pour un cas client réel
