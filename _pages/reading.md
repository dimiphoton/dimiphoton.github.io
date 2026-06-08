---
title: "Reading Notes"
layout: single
permalink: /reading/
author_profile: true
classes:
  - wide
---

Notes on books, papers, courses, and documentation.

<div class="grid__wrapper">
  {% assign reading_posts = site.posts | where_exp: "p", "p.categories contains 'reading'" | sort: 'date' | reverse %}
  {% for post in reading_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% if reading_posts.size == 0 %}
<p><em>No reading notes yet. Use <code>_templates/reading-note.md</code> to add one.</em></p>
{% endif %}
