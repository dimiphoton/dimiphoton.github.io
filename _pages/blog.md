---
title: "Blog"
layout: single
permalink: /blog/
author_profile: true
---

# Blog

Technical notes, opinions, and tutorials.

{% assign blog_posts = site.posts | where_exp: "p", "p.categories contains 'blog'" | sort: 'date' | reverse %}
{% if blog_posts.size > 0 %}
  {% include documents-collection.html entries=blog_posts type="list" %}
{% else %}
  <p><em>No blog posts yet. Use <code>_templates/blog-post.md</code> to add one.</em></p>
{% endif %}

<p>See also <a href="{{ '/reading/' | relative_url }}">reading notes</a> and <a href="{{ '/progress/' | relative_url }}">project progress</a>, or browse all <a href="{{ '/writing/' | relative_url }}">writing</a>.</p>
