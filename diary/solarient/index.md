---
layout: default
title: "solarient -- diary"
---

# solarient

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/diary/solarient/'" | where: "layout", "diary" | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.date | date: "%Y-%m-%d" }}]({{ page.url }}) — {{ page.title }}
{% endfor %}
{% else %}
*No diary entries yet.*
{% endif %}
