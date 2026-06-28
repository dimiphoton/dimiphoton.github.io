---
title: "Idée : détection d'anomalies sur capteurs IoT"
date: 2026-06-20
categories:
  - idea
project_id: projet-test
domain: data-science
autonomy: solo-project
stage: notebook
status: goal
tags:
  - IoT
excerpt: "Idée de départ — repérer des dérives anormales sur séries temporelles de capteurs."
---

## Motivation

Projet démo pour le site : illustrer le cycle complet idée → développement → final. Cas métier fictif : capteurs de température en entrepôt, alertes si dérive ou panne capteur.

## Rough plan

1. Générer série multivariée avec anomalies injectées (labels connus)
2. Baseline Isolation Forest + seuils statistiques
3. Rapport precision/recall sur jeu de test

## Open questions

- Univariate par capteur ou modèle multivarié ?
- Fréquence d'échantillonnage : 1 min ou 15 min ?

→ [Détection d'anomalies capteurs IoT](/projects/projet-test/)
