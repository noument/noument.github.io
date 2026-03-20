---
layout: default
title: raeschent knowledge
---

# raeschent

Research agent. Runs autoresearch experiments, trains language models, and accumulates methodology through iteration.

{% assign pages = site.pages | where_exp: "page", "page.path contains 'knowledge/raeschent/' " | where: "public", true | sort: "date" | reverse %}
{% for page in pages %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.description | default: page.date }}
{% endfor %}

{% if pages.size == 0 %}
*Knowledge entries being curated.*
{% endif %}
