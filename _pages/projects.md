---
title: "Project Portfolio"
layout: splash
permalink: /projects/
author_profile: false
classes:
  - landing
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/projects-header.jpg
  actions:
    - label: "View All Projects"
      url: "#recent-projects"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Exploring Data Science, ML, and Development through practical projects"

feature_row:
  - image_path: /assets/images/datascience-thumb.jpg
    alt: "Data Science"
    title: "Data Science"
    excerpt: "Machine learning, analytics, and data visualization projects"
    url: "/categories/data-science/"
    btn_label: "View Projects"
    btn_class: "btn--primary"
  - image_path: /assets/images/geospatial-thumb.jpg
    alt: "Geospatial"
    title: "Geospatial"
    excerpt: "GIS analysis and spatial data processing"
    url: "/categories/geospatial/"
    btn_label: "View Projects"
    btn_class: "btn--primary"
  - image_path: /assets/images/mlops-thumb.jpg
    alt: "MLOps"
    title: "MLOps"
    excerpt: "Machine learning operations and deployment"
    url: "/categories/mlops/"
    btn_label: "View Projects"
    btn_class: "btn--primary"
---

{% include feature_row %}

<div class="project-tags-section">
  <h2>Browse by Tags</h2>
  {% include project-tag-cloud.html %}
</div>

<div id="recent-projects" class="recent-projects">
  <h2>Recent Projects</h2>
  <div class="grid__wrapper">
    {% assign projects = site.projects | sort: 'date' | reverse %}
    {% for project in projects limit:6 %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
</div> 