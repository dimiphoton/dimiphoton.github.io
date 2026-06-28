---
title: "Idée : optimisation de tournées VRP"
date: 2026-02-10
categories:
  - idea
project_id: optim-vrp-delivery
domain: optimization
autonomy: solo-project
stage: notebook
status: goal
tags:
  - OR-Tools
excerpt: "Idée de départ — modéliser des tournées de livraison comme un VRP."
---

## Motivation

Une connaissance gère une petite flotte de livraison locale. Les tournées sont construites à la main dans Excel. Hypothèse : un solveur VRP pourrait réduire les km parcourus de 10–15 %.

## Rough plan

1. Formaliser le VRP capacité + distance
2. Prototyper avec OR-Tools sur 20–30 arrêts fictifs
3. Visualiser les tournées sur une carte

## Open questions

- Fenêtres horaires client : indispensables ou V2 ?
- Données réelles disponibles ou jeu synthétique pour le prototype ?

→ Hub projet : [Optimisation de tournées VRP](/projects/optim-vrp-delivery/)
