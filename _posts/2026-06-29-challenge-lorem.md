---
title: "Challenge : Titanic — baseline Lorem ipsum"
date: 2026-06-29
categories:
  - challenge
domain: data-science
competition: titanic
tags:
  - Kaggle
  - classification
excerpt: "Write-up fictif d'une compétition Kaggle — contenu Lorem Ipsum."
---

## Competition

**Kaggle Titanic — Machine Learning from Disaster** (fictif). Objectif : prédire la survie des passagers. Lorem ipsum dolor sit amet.

## Approach

- Imputation des valeurs manquantes (`Age`, `Embarked`)
- Encodage one-hot de `Sex` et `Embarked`
- Modèle : `RandomForestClassifier` (100 arbres)
- Validation : stratified 5-fold CV

## Results

| Métrique | Score fictif |
|----------|--------------|
| CV accuracy | 0.82 |
| Public LB | 0.79 |

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.

## Lessons learned

- Le feature engineering sur `Title` extrait du nom améliore le score
- Lorem ipsum : ne pas optimiser sur le public leaderboard trop tôt
- Prochaine étape : stacking ou gradient boosting
