---
title: "Projects"
layout: collection
collection: projects
permalink: /projects/
author_profile: true
entries_layout: grid
classes:
  - wide
header:
  overlay_color: "#1a365d"
  overlay_filter: "0.65"
  caption: "Projets"
---

Travaux pratiques en optimisation, analyse spatiale et data engineering.

## Par domaine

- [Data Science]({{ "/categories/data-science/" | relative_url }})
- [Geospatial]({{ "/categories/geospatial/" | relative_url }})
- [MLOps]({{ "/categories/mlops/" | relative_url }})
- [Optimization]({{ "/categories/optimization/" | relative_url }})
- [Energy Modeling]({{ "/categories/energy-modeling/" | relative_url }})

{% include projects-filter.html %}

<h2 id="browse-by-taxonomy">Stage & technologies</h2>

{% include project-tag-cloud.html hide_autonomy=true %}

<p class="projects-footer">Suivi d'avancement : <a href="{{ '/progress/' | relative_url }}">progress dashboard</a></p>
