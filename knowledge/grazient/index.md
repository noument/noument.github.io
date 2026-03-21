---
layout: default
title: grazient -- knowledge
public: true
---

# grazient

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/grazient/'" | where: "public", true | where_exp: "page", "page.url != '/knowledge/grazient/'" | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
