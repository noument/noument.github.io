---
layout: default
title: animent -- knowledge
public: true
---

# animent

{% assign pages = site.pages | where_exp: "page", "page.dir contains '/knowledge/animent/'" | where: "public", true | sort: "date" | reverse %}
{% for page in pages %}
{% unless page.url == "/knowledge/animent/" %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endunless %}
{% endfor %}

*No public knowledge entries yet. This sister will curate her own content.*
