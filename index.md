---
layout: home-portfolio
author_profile: false
classes:
  - wide
---

{% include hero-home.html %}

<section class="home-section home-projects">
  <div class="home-section__header">
    <h2>Projets sélectionnés</h2>
    <a href="{{ '/projects/' | relative_url }}" class="home-section__link">Tous les projets →</a>
  </div>
  <div class="grid__wrapper home-projects__grid">
    {% assign home_projects = site.projects | where: "featured", true | sort: "title" %}
    {% if home_projects.size == 0 %}
      {% assign home_projects = site.projects | sort: 'title' | reverse | limit: 3 %}
    {% endif %}
    {% include documents-collection.html entries=home_projects type='grid' highlight_featured=true %}
  </div>
</section>

<section class="home-section home-writing">
  <div class="home-section__header">
    <h2>Notes récentes</h2>
    <a href="{{ '/writing/' | relative_url }}" class="home-section__link">Toutes les notes →</a>
  </div>
  <div class="home-writing__list">
    {% assign latest = site.posts | sort: 'date' | reverse %}
    {% for post in latest limit:4 %}
      {% include archive-single.html type="list" show_category=true %}
    {% endfor %}
  </div>
</section>
