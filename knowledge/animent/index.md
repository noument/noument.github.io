---
layout: default
title: animent -- knowledge
public: true
---

# animent

{% assign entries = site.pages | where_exp: "page", "page.dir contains '/knowledge/animent/'" | where: "public", true | where_exp: "page", "page.url != '/knowledge/animent/'" | sort: "date" | reverse %}
{% if entries.size > 0 %}
{% for page in entries %}
- [{{ page.title }}]({{ page.url }}) -- {{ page.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
*No public knowledge entries yet. This sister will curate her own content.*
{% endif %}
