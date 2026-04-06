---
layout: default
title: Articles
permalink: /articles/
---

# Articles

{% assign all_articles = site.pages | where: "layout", "article" | sort: "date" | reverse %}

<ul class="articles-feed">
{% for article in all_articles %}
<li>
  <div class="article-entry">
    <span class="article-id">{{ article.paper_id }}</span>
    <div class="article-details">
      <div class="article-title"><a href="{{ article.url }}">{{ article.title }}</a></div>
      <div class="article-meta">{{ article.authors }} · {{ article.date | date: "%Y-%m-%d" }}</div>
      <div class="article-abstract-excerpt">{{ article.abstract | truncate: 200 }}</div>
    </div>
  </div>
</li>
{% endfor %}
</ul>

{% if all_articles.size == 0 %}
*No articles published yet.*
{% endif %}
