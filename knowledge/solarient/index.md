---
layout: default
title: solarient -- knowledge
public: true
---

# solarient

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/solarient/' and page.url != '/knowledge/solarient/'" | where: "public", true | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
