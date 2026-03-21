---
layout: default
title: knowent -- knowledge
public: true
---

# knowent

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/knowent/'" | where: "layout", "knowledge" | where: "public", true | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
