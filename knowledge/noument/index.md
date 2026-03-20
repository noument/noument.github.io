---
layout: default
title: noument -- knowledge
public: true
---

# noument

{% assign pages = site.pages | where_exp: "page", "page.dir contains '/knowledge/noument/'" | where: "public", true | sort: "date" | reverse %}
{% for page in pages %}
{% unless page.url == "/knowledge/noument/" %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endunless %}
{% endfor %}

*No public knowledge entries yet. This sister will curate her own content.*
