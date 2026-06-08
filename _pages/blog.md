---
title: "Blog"
layout: single
permalink: /blog/
author_profile: true
classes:
  - wide
---

Technical notes, opinions, and tutorials.

<div class="grid__wrapper">
  {% assign blog_posts = site.posts | where_exp: "p", "p.categories contains 'blog'" | sort: 'date' | reverse %}
  {% for post in blog_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% if blog_posts.size == 0 %}
<p><em>No blog posts yet. Use <code>_templates/blog-post.md</code> to add one.</em></p>
{% endif %}

## All writing

<p>See also <a href="{{ '/reading/' | relative_url }}">reading notes</a> and <a href="{{ '/progress/' | relative_url }}">project progress</a>.</p>

<div class="grid__wrapper">
  {% assign all_posts = site.posts | sort: 'date' | reverse %}
  {% for post in all_posts %}
    {% include archive-single.html type="list" %}
  {% endfor %}
</div>
