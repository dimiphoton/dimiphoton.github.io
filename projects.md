---
layout: page
title: "My Projects"
permalink: /projects/
---

Here are some of my projects:

{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}