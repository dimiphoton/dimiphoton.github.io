---
title: "Challenge : Spaceship Titanic — pipeline complet"
date: 2026-05-18
categories:
  - challenge
project_id: kaggle-spaceship
domain: data-science
competition: spaceship-titanic
autonomy: little-experiment
stage: notebook
status: done
tags:
  - Kaggle
excerpt: "Spaceship Titanic — imputation groupée et encodage cible."
---

[Kaggle Spaceship Titanic](/projects/kaggle-spaceship/)

## Competition

Variante sci-fi du Titanic — forte proportion de `CryoSleep` / `VIP` manquants corrélés au target.

## Approach

- Imputation conditionnelle par groupe `Deck` + `Side`
- Target encoding sur `HomePlanet` (avec CV interne)
- `HistGradientBoostingClassifier`

## Results

Public LB **0.79**.

## Lessons learned

- Les NA ne sont pas MCAR — traiter comme signal
- Hub projet marqué **done**
