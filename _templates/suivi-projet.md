---
title: "RC Model for Home Heating – Project Overview"
layout: single
permalink: /projects/rc-model-heating/
---
<h2>RC Model for Home Heating – Progress Overview</h2>
<p>This page aggregates all posts related to the RC model for home heating project.</p>

<ul>
  {% assign project_posts = site.posts | where_exp: "post", "post.project_id == 'rc-model-heating'" | sort: 'date' %}
  {% for post in project_posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> &ndash; {{ post.date | date: "%B %d, %Y" }}
      {% if post.tags contains 'goal:notebook' %}
        (Goal)
      {% elsif post.tags contains 'wip:notebook' %}
        (WIP)
      {% elsif post.tags contains 'done:notebook' %}
        (Done)
      {% endif %}
    </li>
  {% endfor %}
</ul>
