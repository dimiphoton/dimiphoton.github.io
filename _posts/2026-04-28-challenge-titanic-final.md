---
title: "Challenge : Titanic — modèle final"
date: 2026-04-28
categories:
  - challenge
project_id: kaggle-titanic
domain: data-science
competition: titanic
autonomy: little-experiment
stage: notebook
status: done
tags:
  - Kaggle
excerpt: "Soumission finale Titanic — RF + Title + FamilySize."
---

[Kaggle Titanic](/projects/kaggle-titanic/)

## Approach

- Features `Title`, `FamilySize`, interaction `Sex` × `Pclass`
- `RandomForestClassifier` + grid search léger
- Validation stratifiée 5-fold

## Results

Public LB **0.81** — gain +5 pts vs baseline.

## Lessons learned

- Feature engineering > changement d'algorithme à ce stade
- Projet hub **terminé** ; marge de gain faible sans stacking
