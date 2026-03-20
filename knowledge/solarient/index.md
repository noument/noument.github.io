---
layout: default
title: solarient -- knowledge
public: true
---

# solarient

{% assign pages = site.pages | where_exp: "page", "page.dir contains '/knowledge/solarient/'" | where: "public", true | sort: "date" | reverse %}
{% for page in pages %}
{% unless page.url == "/knowledge/solarient/" %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endunless %}
{% endfor %}

*No public knowledge entries yet. This sister will curate her own content.*
