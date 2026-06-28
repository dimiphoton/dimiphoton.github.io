---
title: "Challenge : Titanic — baseline"
date: 2026-04-12
categories:
  - challenge
project_id: kaggle-titanic
domain: data-science
competition: titanic
autonomy: little-experiment
stage: notebook
status: wip
tags:
  - Kaggle
excerpt: "Première soumission Kaggle Titanic — modèle logistic + imputation simple."
---

[Kaggle Titanic](/projects/kaggle-titanic/)

## Competition

Titanic — prédire `Survived`. Score public LB ~0.76.

## Approach

- Imputation âge par médiane, `Embarked` mode
- One-hot `Sex`, `Embarked`
- `LogisticRegression` baseline

## Results

CV accuracy 0.79 — soumission 0.76.

## Lessons learned

- Feature `Title` extraite du nom à explorer en V2
