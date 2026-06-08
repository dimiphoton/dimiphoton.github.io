---
title: "Project Taxonomy Guide"
layout: single
permalink: /tag-guide/
author_profile: true
toc: true
---

# Project Taxonomy Guide

Projects and progress notes use structured front matter fields. Tags remain available for technologies and search.

## Domain (`domain`)

Technical or thematic area of the project:

- `data-science`
- `geospatial`
- `mlops`
- `web-dev`
- `ai-agents`
- `optimization`
- `energy-modeling`

## Autonomy (`autonomy`)

How independently the work was carried out:

- `exercise` — guided learning exercise
- `little-experiment` — small independent exploration
- `solo-project` — fully independent project

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

## Project link (`project_id`)

A slug shared between the project hub in `_projects/` and progress notes in `_posts/`.

Example: `project_id: rc-model-heating` links `/projects/rc-model-heating/` to all related progress notes.

## Tags

Use Jekyll tags for technologies and tools: `Python`, `QGIS`, `docker`, etc.

## Example front matter

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
