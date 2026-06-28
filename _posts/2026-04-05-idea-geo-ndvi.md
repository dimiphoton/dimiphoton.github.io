---
title: "Idée : cartographie NDVI Sentinel-2"
date: 2026-04-05
categories:
  - idea
project_id: geo-ndvi-sentinel
domain: geospatial
autonomy: little-experiment
stage: notebook
status: goal
tags:
  - Sentinel-2
  - NDVI
excerpt: "Idée de départ — suivre la végétation d'une parcelle via NDVI multitemporel."
---

## Motivation

Besoin de se familiariser avec le traitement Sentinel-2 et les indices de végétation sur une zone agricole connue. Projet week-end étirable sur 2 semaines.

## Rough plan

1. Télécharger 5 dates L2A sans nuages (tile 31TFK)
2. Calculer NDVI = (NIR - Red) / (NIR + Red)
3. Produire une carte de synthèse (médiane temporelle)

## Open questions

- Copernicus Browser vs script Python pur ?
- Reprojection nécessaire ou rester en CRS native ?

→ [Cartographie NDVI Sentinel-2](/projects/geo-ndvi-sentinel/)
