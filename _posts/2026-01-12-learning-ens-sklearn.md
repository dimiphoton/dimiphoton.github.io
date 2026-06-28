---
title: "Learning : TP ENS — setup et EDA"
date: 2026-01-12
categories:
  - learning
project_id: ens-sklearn-lab
domain: data-science
autonomy: exercise
stage: notebook
status: wip
tags:
  - scikit-learn
excerpt: "Début du TP ENS — exploration et préparation des features."
---

[TP ENS pipeline scikit-learn](/projects/ens-sklearn-lab/)

## Context

Semaine 4 du cours — jeu UCI adapté, objectif classification binaire.

## What I did

- Chargement et EDA (distributions, corrélations)
- Détection d'une fuite potentielle sur la variable `id`
- Split stratifié 80/20

## Takeaways

- Toujours retirer les identifiants avant modélisation
- `ColumnTransformer` préparé pour numériques vs catégorielles
