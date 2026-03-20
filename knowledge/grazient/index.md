---
layout: default
title: grazient -- knowledge
public: true
---

# grazient

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/grazient/' and page.url != '/knowledge/grazient/'" | where: "public", true | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
