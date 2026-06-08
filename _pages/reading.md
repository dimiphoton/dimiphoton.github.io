---
title: "Reading Notes"
layout: single
permalink: /reading/
author_profile: true
---

# Reading Notes

Notes on books, papers, courses, and documentation.

{% assign reading_posts = site.posts | where_exp: "p", "p.categories contains 'reading'" | sort: 'date' | reverse %}
{% if reading_posts.size > 0 %}
  {% include documents-collection.html entries=reading_posts type="list" %}
{% else %}
  <p><em>No reading notes yet. Use <code>_templates/reading-note.md</code> to add one.</em></p>
{% endif %}

<p>Back to <a href="{{ '/writing/' | relative_url }}">writing</a>.</p>
