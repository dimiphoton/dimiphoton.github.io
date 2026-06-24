---
title: "Writing"
layout: single
permalink: /writing/
author_profile: true
sidebar:
  nav: "writing"
---

Notes, learning logs, explainers, and project journals.

## Sections

- **[Blog]({{ "/blog/" | relative_url }})** — industry news, opinions, commentary
- **[Learning]({{ "/learning/" | relative_url }})** — guided exercises and tutorials
- **[Explainers]({{ "/explainer/" | relative_url }})** — deep dives on concepts
- **[Challenges]({{ "/challenge/" | relative_url }})** — Kaggle, ENS, hackathons
- **[Ideas]({{ "/ideas/" | relative_url }})** — future project brainstorming
- **[Reading notes]({{ "/reading/" | relative_url }})** — books, papers, courses
- **[Project progress]({{ "/progress/" | relative_url }})** — development logs linked to project hubs

See the [Writing Guide]({{ "/post-guide/" | relative_url }}) for templates and taxonomy.

## Latest

{% assign latest = site.posts | sort: 'date' | reverse | limit: 5 %}
{% if latest.size > 0 %}
  {% include documents-collection.html entries=latest type="list" %}
{% else %}
  <p><em>No notes published yet.</em></p>
{% endif %}
