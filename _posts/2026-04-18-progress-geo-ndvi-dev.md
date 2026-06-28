---
title: "Progress : pipeline NDVI et masquage nuages"
date: 2026-04-18
categories:
  - progress
project_id: geo-ndvi-sentinel
domain: geospatial
autonomy: little-experiment
stage: notebook
status: wip
tags:
  - rasterio
  - Python
excerpt: "Développement — lecture bands B04/B08, QA60 et calcul NDVI."
---

[Cartographie NDVI Sentinel-2](/projects/geo-ndvi-sentinel/)

## What I did

- Script Python : lecture COG Sentinel-2, extraction B04 (rouge) et B08 (NIR)
- Masquage nuages via bande QA60
- NDVI calculé sur 3 dates (mars, avril, mai)
- Premiers GeoTIFF exportés dans `data/processed/`

## Next steps

- [ ] Ajouter 2 dates été pour la série complète
- [ ] Carte folium avec slider temporel
- [ ] Vérifier les valeurs NDVI sur parcelle de référence (photo sol)
