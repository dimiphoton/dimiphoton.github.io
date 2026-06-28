---
title: "Progress : notebook RC calibré — livrable final"
date: 2025-05-15
categories:
  - progress
project_id: rc-model-heating
domain: energy-modeling
autonomy: solo-project
stage: notebook
status: done
tags:
  - Python
excerpt: "Final — calibration sur données réelles, notebook documenté et validation."
---

[RC Model for Home Heating](/projects/rc-model-heating/)

## What I did

- Import mesures réelles (température intérieure + relevé chauffage + météo voisinage)
- Calibration scipy `least_squares` sur R, C et pertes intermittentes
- RMSE **0.42 °C** sur 7 jours de validation hold-out
- Notebook final : hypothèses, équations, code, graphiques, piste 2R2C

## Résultat

Projet **terminé** au stade `notebook`. Suffisant pour explorer des scénarios de consigne. Données météo futures : voir [Pipeline ETL Open-Meteo](/projects/etl-openmeteo/).

## Next steps

- [ ] Alimenter le modèle via le pipeline ETL météo
- [ ] Extension 2R2C si besoin de précision mur / air
