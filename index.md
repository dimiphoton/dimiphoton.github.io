---
layout: home
author_profile: true
---

Welcome to my portfolio and blog. Here you'll find projects in data science, web development, and geospatial work, along with writing notes and project progress updates.

<p><a href="{{ '/progress/' | relative_url }}" class="btn btn--primary">View current progress</a></p>

## Featured projects

<div class="grid__wrapper">
  {% assign featured = site.projects | where: "featured", true %}
  {% if featured.size > 0 %}
    {% include documents-collection.html entries=featured type="grid" %}
  {% else %}
    {% assign recent_projects = site.projects | sort: 'title' | reverse | limit: 3 %}
    {% include documents-collection.html entries=recent_projects type="grid" %}
  {% endif %}
</div>

<p><a href="{{ '/projects/' | relative_url }}">Browse all projects →</a></p>

## Latest writing

<div class="grid__wrapper">
  {% assign latest = site.posts | sort: 'date' | reverse %}
  {% for post in latest limit:5 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<p><a href="{{ '/writing/' | relative_url }}">All writing →</a></p>
