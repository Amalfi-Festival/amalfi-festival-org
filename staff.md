---
title: Staff
custom-css: staff
---

<section class="standard-block">

<div>
{%- for _s in site.data.staff -%}
{%- assign _person = nil -%}
{%- if _s.person-slug -%}
    {%- assign _person = site.faculty | where: "slug", _s.person-slug | first -%}
{%- endif -%}
<div>
    <div class="image">
{%- unless _person -%}
    {%- if _s.headshot-filename -%}
    <img src="{{ site.people-image-directory | append: _s.headshot-filename | relative_url }}" />
    {%- endif -%}
{%- else -%}
    <a href="{{ _person.url | relative_url }}"><img src="{% include site/person/faculty-thumbnail-filepath.html faculty=_person %}" /></a>
{%- endunless -%}
    </div>
{%- unless _person -%}
    <div class="name">{{ _s.name | smartify }}</div>
{%- else -%}
    <div class="name"><a href="{{ _person.url | relative_url }}">{{ _s.name | smartify }}</a></div>
{%- endunless -%}
    <div class="title">{{ _s.title | smartify }}</div>
    {%- if _s.email -%}
    <div class="email"><svg><use xlink:href="#envelope" /></svg><a href="mailto:{{ _s.email }}">{{ _s.email }}</a></div>
    {%- endif -%}
</div>
{%- endfor -%}
</div>

</section>