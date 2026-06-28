---
title: "Idée : modèle RC pour le chauffage domestique"
date: 2025-03-01
categories:
  - idea
project_id: rc-model-heating
domain: energy-modeling
autonomy: solo-project
stage: notebook
status: goal
tags:
  - RC model
excerpt: "Idée de départ — simuler la température intérieure avec un modèle RC."
---

## Motivation

Comprendre comment un modèle thermique RC (résistance-capacité) peut approximer la dynamique de température d'un logement chauffé au radiateur, en fonction de la météo extérieure.

## Rough plan

1. Poser les équations RC (1R1C puis extension 2R2C si nécessaire)
2. Simuler sur profils météo synthétiques
3. Calibrer sur données réelles si disponibles

## Open questions

- Ordre du modèle : 1R1C suffisant pour commencer ?
- Source météo : station locale ou API ?

→ [RC Model for Home Heating](/projects/rc-model-heating/)
