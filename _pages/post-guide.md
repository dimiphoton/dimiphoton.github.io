---
title: "Writing Guide"
layout: single
permalink: /post-guide/
toc: true
toc_sticky: true
author_profile: true
---

# Writing Guide

All notes live in `_posts/` and are filtered by **category** (content type). Projects have permanent hubs in `_projects/`.

## Content types (categories)

| Category | Purpose | Template |
|----------|---------|----------|
| `blog` | Technical notes, opinions, tutorials | `_templates/blog-post.md` |
| `reading` | Books, papers, courses, documentation | `_templates/reading-note.md` |
| `progress` | Project progress journal entries | `_templates/progress-note.md` |

Listing pages: [/blog/](/blog/), [/reading/](/reading/), [/progress/](/progress/).

## Project taxonomy

Progress notes and project hubs share these front matter fields:

- `domain` — data-science, geospatial, mlops, web-dev, ai-agents, optimization, energy-modeling
- `autonomy` — exercise, little-experiment, solo-project
- `stage` — notebook, prototype, mvp, app
- `status` — goal, wip, done
- `project_id` — slug linking notes to `/projects/your-id/`

See the [Project Taxonomy Guide](/tag-guide/) for details.

## Reading note structure

1. Overview
2. Key takeaways
3. Practical applications
4. Recommendations

## Progress note structure

1. Link to project hub
2. What you did
3. Next steps

## Blog post structure

Use clear sections, code snippets when useful, and link related projects or reading notes.
