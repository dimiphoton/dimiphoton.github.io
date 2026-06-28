---
title: "Learning : TP géopandas — jointures spatiales"
date: 2026-03-08
categories:
  - learning
project_id: geopandas-parcelles
domain: geospatial
autonomy: exercise
stage: notebook
status: done
tags:
  - geopandas
excerpt: "TP carto — jointures parcelles / communes et indicateurs de densité."
---

[TP QGIS géopandas & parcelles](/projects/geopandas-parcelles/)

## Context

TD cartographie — données fictives type cadastre.

## What I did

- Reprojection EPSG:4326 → EPSG:2154 pour calculs métriques
- `sjoin` parcelles dans communes
- Indicateur surface bâtie / surface communale

## Takeaways

- Toujours projeter avant `area`
- GeoJSON léger pour la démo, GeoPackage si volumétrie réelle
