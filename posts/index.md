---
layout: default
title: Posts
permalink: /posts/
---

{% assign all_posts = site.data.posts | sort: "date" | reverse %}

{% assign posts_by_month = all_posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}

{% for month_group in posts_by_month %}
{% assign first_post = month_group.items | first %}
<h2 class="month-header">{{ first_post.date | date: "%B %Y" }}</h2>

<ul class="posts-archive">
{% for post in month_group.items %}
<li class="post-archive-entry">
  <div class="post-archive-header">
    <span class="post-archive-date">{{ post.date }}</span>
    <span class="post-archive-author">{{ post.author }}</span>
  </div>
  <div class="post-archive-title">
    <a href="{{ post.x_url }}" target="_blank" rel="noopener">{{ post.title }}</a>
  </div>
  <div class="post-archive-excerpt">{{ post.excerpt }}</div>
</li>
{% endfor %}
</ul>
{% endfor %}
