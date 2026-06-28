---
title: "Writing Guide"
layout: single
permalink: /post-guide/
toc: true
toc_sticky: true
author_profile: true
sidebar:
  nav: "writing"
---

# Writing Guide

All notes live in `_posts/` and are filtered by **category** (content type). Projects have permanent hubs in `_projects/`.

**Rule of thumb:** category = type of note · `domain` = subject area · `project_id` = link to a project · `tags` = technologies and search keywords.

## Content types (categories)

| Category | Purpose | Listing | Template |
|----------|---------|---------|----------|
| `blog` | Industry news, opinions, commentary | [/writing/](/writing/) | `_templates/blog-post.md` |
| `progress` | Project progress journal | [/writing/](/writing/) | `_templates/progress-note.md` |
| `learning` | Guided exercises, coursework, tutorials | [/writing/](/writing/) | `_templates/learning-note.md` |
| `explainer` | Deep dive on a concept | [/writing/](/writing/) | `_templates/explainer-note.md` |
| `challenge` | Kaggle, ENS, hackathon write-ups | [/writing/](/writing/) | `_templates/challenge-note.md` |
| `idea` | Quick future project ideas | [/writing/](/writing/) | `_templates/idea-note.md` |
| `reading` | Books, papers, courses | [/writing/](/writing/) | `_templates/reading-note.md` |

## Which category to use?

| You are writing… | Category | Key front matter |
|------------------|----------|------------------|
| Actu / opinion piece | `blog` | `domain` |
| Project milestone update | `progress` | `project_id`, `domain`, `status`, `stage` |
| Guided exercise (“projet bateau”) | `learning` | `domain`, `autonomy: exercise` |
| Weekend exploration | `learning` or `progress` | `autonomy: little-experiment` |
| Future project idea (quick note) | `idea` | `domain` |
| Future project idea (serious) | hub in `_projects/` | `status: goal` (+ optional `idea` post) |
| Concept deep dive | `explainer` | `domain` |
| Kaggle / ENS write-up | `challenge` | `domain`, `competition` |

## Shared front matter

Use on any note where relevant (not as categories):

- `domain` — data-science, geospatial, mlops, web-dev, ai-agents, optimization, energy-modeling
- `autonomy` — exercise, little-experiment, solo-project
- `stage` — notebook, prototype, mvp, app
- `status` — goal, wip, done (mainly `progress` and project hubs)
- `project_id` — slug linking notes to `/projects/your-id/`
- `competition` — slug grouping challenge posts (e.g. `titanic`, `ens-challenge-2024`)

See the [Project Taxonomy Guide](/tag-guide/) for field details.

## Tags

Technologies and free-form keywords only: `Python`, `PyTorch`, `Kaggle`, `time-series`. Do not use tags for content type or domain.

## Note structures

### Blog

Clear sections, link related projects or reading notes.

### Progress

1. Link to project hub
2. What you did
3. Next steps

### Learning

1. Context (course / tutorial source)
2. What you did
3. Takeaways

### Explainer

1. Problem
2. Intuition
3. How it works
4. Example
5. When to use it

### Challenge

1. Competition overview
2. Approach
3. Results
4. Lessons learned

### Idea

1. Motivation
2. Rough plan
3. Open questions

### Reading

1. Overview
2. Key takeaways
3. Practical applications
4. Recommendations
