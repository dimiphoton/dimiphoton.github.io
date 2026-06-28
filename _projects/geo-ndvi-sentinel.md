---
title: "Cartographie NDVI Sentinel-2"
permalink: /projects/geo-ndvi-sentinel/
layout: single
project_id: geo-ndvi-sentinel
domain: geospatial
autonomy: little-experiment
stage: notebook
status: done
featured: true
tags:
  - Python
  - QGIS
  - rasterio
  - NDVI
excerpt: "Pipeline de calcul et cartographie NDVI à partir d'images Sentinel-2."
---

{% include project-meta.html %}

Analyse spatiale de l'indice de végétation NDVI sur une zone d'étude en France. Traitement de tuiles Sentinel-2 L2A, masquage nuages, agrégation temporelle et cartes de synthèse.

**Livrables :**

- Script Python rasterio / xarray pour le calcul NDVI
- Série temporelle mars–août sur 5 dates
- Export GeoTIFF + carte interactive

{% include project-timeline.html project_id=geo-ndvi-sentinel %}
