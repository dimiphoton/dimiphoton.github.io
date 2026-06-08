---
title: "Project Progress"
layout: single
permalink: /progress/
author_profile: true
classes:
  - wide
toc: false
---

Track goals, work in progress, and completed milestones across projects.

{% include progress-dashboard.html %}

## All progress notes

<div class="grid__wrapper">
  {% assign progress_posts = site.posts | where_exp: "p", "p.categories contains 'progress'" | sort: 'date' | reverse %}
  {% for post in progress_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
