---
title: "Project Taxonomy Guide"
layout: single
permalink: /tag-guide/
author_profile: true
toc: true
sidebar:
  nav: "writing"
---

# Project Taxonomy Guide

Structured front matter for projects and notes. **Categories** define the type of note; these fields add cross-cutting metadata.

See the [Writing Guide](/post-guide/) for which category to use per note type.

## Domain (`domain`)

Technical or thematic area — use on **any** note type, never as a Jekyll category:

- `data-science`
- `geospatial`
- `mlops`
- `web-dev`
- `ai-agents`
- `optimization`
- `energy-modeling`

Project hubs filtered by domain: [/projects/](/projects/).

## Autonomy (`autonomy`)

How independently the work was carried out:

- `exercise` — guided learning exercise (affiché **learning** sur le site)
- `little-experiment` — small independent exploration (weekend project, quick POC)
- `solo-project` — fully independent portfolio project

## Production stage (`stage`)

How far the project has been taken toward production:

- `notebook` — Jupyter notebook analysis or exploration
- `prototype` — working proof of concept
- `mvp` — minimum viable product
- `app` — deployed or production-ready application

## Status (`status`)

Current state of the project or progress note:

- `goal` — planned, not yet started
- `wip` — work in progress
- `done` — completed at the current stage

## Featured (`featured`)

Set `featured: true` on a project hub to highlight it:

- Sorted first on [/projects/](/projects/) with a **★ Sélection** badge
- Shown in the featured block on the [home page](/)

```yaml
featured: true
```

## Project link (`project_id`)

A slug shared between the project hub in `_projects/` and related notes in `_posts/`.

Example: `project_id: rc-model-heating` links `/projects/rc-model-heating/` to progress notes and timelines.

## Competition (`competition`)

Optional slug for grouping challenge write-ups (category `challenge`):

- `titanic`
- `ens-challenge-2024`

Use one slug per competition across all related posts.

## Image de couverture (`header.teaser`)

Image affichée sur les **cartes projet** (accueil, grille `/projects/`) à la place du bandeau coloré par domaine.

```yaml
---
title: "Mon projet"
header:
  teaser: /assets/images/projects/mon-projet-cover.jpg
project_id: mon-projet
domain: geospatial
# ...
---
```

**Conventions :**

- Chemin relatif au site, ex. `/assets/images/projects/…`
- Format recommandé : **1200×630 px** (ratio ~1.9:1) ou **800×450 px**
- Contenu : capture notebook, carte, schéma d'architecture, dashboard
- Fichier dans `assets/images/projects/` (à créer) puis référencé dans le hub `_projects/`

Sans `header.teaser`, la carte utilise un **fond coloré** selon le `domain` (défini dans le CSS).

## Tags

Technologies and search keywords only: `Python`, `QGIS`, `docker`, `Kaggle`. Not for content type or domain.

## Example front matter

### Project hub (`_projects/`)

```yaml
---
title: "RC Model for Home Heating"
permalink: /projects/rc-model-heating/
layout: single
project_id: rc-model-heating
domain: energy-modeling
autonomy: solo-project
stage: notebook
status: goal
featured: true
tags:
  - Python
  - RC model
---
```

### Progress note

```yaml
---
title: "Progress: calibration notebook"
date: "2025-06-01"
categories:
  - progress
project_id: rc-model-heating
domain: energy-modeling
autonomy: solo-project
stage: notebook
status: wip
tags:
  - Python
---
```

### Challenge write-up

```yaml
---
title: "Challenge: Titanic — baseline model"
date: "2025-06-01"
categories:
  - challenge
domain: data-science
competition: titanic
tags:
  - Kaggle
  - classification
---
```
