---
title: "Archive"
layout: archive
permalink: /archive/
author_profile: true
---

<div class="archive-content">
  <h2>Content by Year</h2>
  {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
  {% for year in postsByYear %}
    <div class="archive-year">
      <h3 id="{{ year.name }}">{{ year.name }}</h3>
      {% for post in year.items %}
        {% include archive-single.html %}
      {% endfor %}
    </div>
  {% endfor %}

  <h2>Projects by Category</h2>
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
    <div class="archive-category">
      <h3 id="{{ category[0] }}">{{ category[0] }}</h3>
      {% for post in category[1] %}
        {% include archive-single.html %}
      {% endfor %}
    </div>
  {% endfor %}
</div> 