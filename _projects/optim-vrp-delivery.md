---
title: "Optimisation de tournées VRP"
permalink: /projects/optim-vrp-delivery/
layout: single
project_id: optim-vrp-delivery
domain: optimization
autonomy: solo-project
stage: prototype
status: done
featured: true
tags:
  - Python
  - OR-Tools
  - optimisation
excerpt: "Résolution d'un problème de tournées de véhicules pour minimiser la distance parcourue."
---

{% include project-meta.html %}

Prototype d'optimisation de tournées (Vehicle Routing Problem) pour une flotte de livraison urbaine. L'objectif : attribuer des arrêts à des véhicules en minimisant la distance totale sous contraintes de capacité.

**Livrables :**

- Modèle OR-Tools avec contraintes capacité + fenêtres horaires simplifiées
- Visualisation des tournées sur carte (folium)
- Notebook reproductible + export JSON des routes

{% include project-timeline.html project_id=optim-vrp-delivery %}
