---
layout: default
title: nemoent -- knowledge
public: true
---

# nemoent

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/nemoent/'" | where: "public", true | where_exp: "page", "page.url != '/knowledge/nemoent/'" | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
