---
title: "Progress : équations RC et simulation initiale"
date: 2025-04-15
categories:
  - progress
project_id: rc-model-heating
domain: energy-modeling
autonomy: solo-project
stage: notebook
status: wip
tags:
  - Python
  - RC model
excerpt: "Développement — structure du modèle, notebook et calibration sur données synthétiques."
---

[RC Model for Home Heating](/projects/rc-model-heating/)

## What I did

- Formalisation du modèle 1R1C : résistance thermique extérieure + capacité intérieure
- Implémentation Euler explicite en Python (30 min pas de temps)
- Génération de données synthétiques (consigne chauffage + T_ext sinusoïdale)
- Première calibration manuelle des paramètres R et C

## Next steps

- [ ] Comparer avec jeu de mesures réelles (capteur salon)
- [ ] Documenter les hypothèses et limites du 1R1C
- [ ] Graphiques de validation RMSE
