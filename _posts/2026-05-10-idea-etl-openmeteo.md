---
title: "Idée : pipeline ETL météo Open-Meteo"
date: 2026-05-10
categories:
  - idea
project_id: etl-openmeteo
domain: mlops
autonomy: solo-project
stage: notebook
status: goal
tags:
  - ETL
  - API
excerpt: "Idée de départ — alimenter un stockage analytique météo depuis Open-Meteo."
---

## Motivation

Les modèles énergétiques et géospatial du portfolio ont besoin d'une source météo fiable et rejouable. Open-Meteo offre une API gratuite — objectif : un pipeline reproductible vers Parquet.

## Rough plan

1. Liste de 10 stations (lat/lon) en France
2. Job quotidien : forecast + archive → JSON
3. Normalisation schéma → Parquet partitionné

## Open questions

- Orchestration : cron simple ou prefect léger ?
- Rétention : 90 jours rolling ?

→ [Pipeline ETL météo Open-Meteo](/projects/etl-openmeteo/)
