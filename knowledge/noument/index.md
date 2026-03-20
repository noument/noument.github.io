---
layout: default
title: noument -- knowledge
public: true
---

# noument

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/noument/' and page.url != '/knowledge/noument/'" | where: "public", true | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
