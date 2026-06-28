---
title: "Progress : ETL containerisé — MVP livré"
date: 2026-06-10
categories:
  - progress
project_id: etl-openmeteo
domain: mlops
autonomy: solo-project
stage: mvp
status: done
tags:
  - Docker
  - Parquet
excerpt: "Final — image Docker, cron documenté, 90 jours de données stockées."
---

[Pipeline ETL météo Open-Meteo](/projects/etl-openmeteo/)

## What I did

- Image Docker `etl-openmeteo:latest` (~180 Mo)
- Entrypoint idempotent : ne réécrit pas les partitions existantes sans `--force`
- 90 jours d'historique sur 10 stations
- README : lancement local, variables d'env, structure Parquet

## Résultat

MVP **terminé**. Consommable par notebook (pandas/pyarrow) ou DuckDB en lecture directe. Prochaine étape possible : brancher le modèle RC chauffage sur ces données.

## Next steps

- [ ] Monitoring basique (alerte si job échoue 2 jours de suite)
- [ ] Lien avec [RC Model for Home Heating](/projects/rc-model-heating/)
