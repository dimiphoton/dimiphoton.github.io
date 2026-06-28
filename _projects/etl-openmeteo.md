---
title: "Pipeline ETL météo Open-Meteo"
header:
  teaser: /assets/images/projects/etl-openmeteo.svg
  teaser_alt: "Schéma pipeline API vers Parquet — vignette placeholder"
permalink: /projects/etl-openmeteo/
layout: single
project_id: etl-openmeteo
domain: mlops
autonomy: solo-project
stage: mvp
status: done
featured: true
tags:
  - Python
  - ETL
  - Parquet
  - Docker
excerpt: "Ingestion quotidienne de données météo via API Open-Meteo vers stockage Parquet partitionné."
---

{% include project-meta.html %}

Pipeline data engineering pour collecter les prévisions et observations météo de plusieurs stations, normaliser le schéma et persister en Parquet partitionné par date — prêt pour consommation downstream (modèles, dashboards).

**Livrables :**

- Extracteur API avec retry et logging
- Transformation pandas → schéma typé
- Dépôt Parquet `year=YYYY/month=MM/` + Dockerfile

{% include project-timeline.html project_id=etl-openmeteo %}
