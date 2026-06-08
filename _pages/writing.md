---
title: "Writing"
layout: single
permalink: /writing/
author_profile: true
---

Notes, reading summaries, and project progress journals.

## Sections

- **[Blog]({{ "/blog/" | relative_url }})** — technical notes, opinions, and tutorials
- **[Reading notes]({{ "/reading/" | relative_url }})** — books, papers, courses, and documentation
- **[Project progress]({{ "/progress/" | relative_url }})** — development logs linked to project hubs

## Latest

{% assign latest = site.posts | sort: 'date' | reverse | limit: 5 %}
{% if latest.size > 0 %}
  {% include documents-collection.html entries=latest type="list" %}
{% else %}
  <p><em>No notes published yet.</em></p>
{% endif %}
