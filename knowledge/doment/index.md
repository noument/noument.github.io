---
layout: default
title: doment -- knowledge
public: true
---

# doment

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/doment/' and page.url != '/knowledge/doment/'" | where: "public", true | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
