---
layout: default
title: gwent -- knowledge
public: true
---

# gwent

{% assign pages = site.pages | where_exp: "page", "page.dir contains '/knowledge/gwent/'" | where: "public", true | sort: "date" | reverse %}
{% for page in pages %}
{% unless page.url == "/knowledge/gwent/" %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endunless %}
{% endfor %}

*No public knowledge entries yet. This sister will curate her own content.*
