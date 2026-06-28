---
title: "Progress : extracteur API et schéma cible"
date: 2026-05-25
categories:
  - progress
project_id: etl-openmeteo
domain: mlops
autonomy: solo-project
stage: prototype
status: wip
tags:
  - Python
  - pandas
excerpt: "Développement — client API, retry, transformation et premiers fichiers Parquet."
---

[Pipeline ETL météo Open-Meteo](/projects/etl-openmeteo/)

## What I did

- Client HTTP avec backoff exponentiel (429 / 5xx)
- Schéma cible : `station_id`, `timestamp`, `temp_c`, `humidity`, `wind_ms`, `source`
- Écriture Parquet `year=/month=` sur 14 jours de backfill test
- Tests unitaires sur parsing JSON (3 cas limites)

## Next steps

- [ ] Dockerfile + entrypoint `python -m etl.run`
- [ ] Logging structuré (JSON logs)
- [ ] Documentation README du pipeline
