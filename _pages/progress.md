---
title: "Project Progress"
layout: archive
permalink: /progress/
author_profile: true
classes:
  - wide
sidebar:
  nav: "writing"
---

Track goals, work in progress, and completed milestones across projects.

{% include progress-dashboard.html %}

## All progress notes

{% assign progress_posts = site.posts | where_exp: "p", "p.categories contains 'progress'" | sort: 'date' | reverse %}
<div class="entries-list">
{% if progress_posts.size > 0 %}
  {% include documents-collection.html entries=progress_posts type="list" %}
{% else %}
  <p><em>No progress notes yet. Use <code>_templates/progress-note.md</code> to add one.</em></p>
{% endif %}
</div>

<p>Back to <a href="{{ '/writing/' | relative_url }}">writing</a> or browse <a href="{{ '/projects/' | relative_url }}">projects</a>.</p>
