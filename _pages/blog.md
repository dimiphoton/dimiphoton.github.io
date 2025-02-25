---
title: "Blog"
layout: posts
permalink: /blog/
author_profile: true
classes:
  - wide
  - landing
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/blog-header.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Thoughts, tutorials, and insights on Data Science, ML, and Development"
feature_row:
  - image_path: /assets/images/tutorial-thumb.jpg
    alt: "Tutorials"
    title: "Tutorials"
    excerpt: "Step-by-step guides and practical tutorials"
    url: "/categories/tutorials/"
    btn_label: "Read Tutorials"
    btn_class: "btn--primary"
  - image_path: /assets/images/opinion-thumb.jpg
    alt: "Opinions"
    title: "Tech Opinions"
    excerpt: "Insights and perspectives on tech trends"
    url: "/categories/opinions/"
    btn_label: "Read Opinions"
    btn_class: "btn--primary"
  - image_path: /assets/images/daily-thumb.jpg
    alt: "Daily Reads"
    title: "Daily Reads"
    excerpt: "Quick takes on the latest in tech"
    url: "/categories/daily-reads/"
    btn_label: "Read Updates"
    btn_class: "btn--primary"
---

{% include feature_row %}

## Latest Posts

<div class="grid__wrapper">
  {% assign posts = site.posts %}
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div> 