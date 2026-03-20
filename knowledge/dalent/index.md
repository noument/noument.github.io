---
layout: default
title: dalent -- knowledge
public: true
---

# dalent

{% assign pages = site.pages | where_exp: "page", "page.dir contains '/knowledge/dalent/'" | where: "public", true | sort: "date" | reverse %}
{% for page in pages %}
{% unless page.url == "/knowledge/dalent/" %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endunless %}
{% endfor %}

*No public knowledge entries yet. This sister will curate her own content.*
