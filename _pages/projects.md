---
title: "Projects"
layout: single
permalink: /projects/
author_profile: true
---

# Projects

Portfolio of practical work in data science, machine learning, and development.

## By domain

- [Data Science]({{ "/categories/data-science/" | relative_url }})
- [Geospatial]({{ "/categories/geospatial/" | relative_url }})
- [MLOps]({{ "/categories/mlops/" | relative_url }})
- [Web Development]({{ "/categories/web-development/" | relative_url }})
- [AI Agents]({{ "/categories/ai-agents/" | relative_url }})
- [Optimization]({{ "/categories/optimization/" | relative_url }})

## All projects

{% assign projects = site.projects | sort: 'title' %}
{% if projects.size > 0 %}
  {% include documents-collection.html entries=projects type="list" %}
{% else %}
  <p><em>No projects yet.</em></p>
{% endif %}

## Browse by taxonomy

{% include project-tag-cloud.html %}

## Progress

Track goals and milestones on the [progress dashboard]({{ "/progress/" | relative_url }}).
