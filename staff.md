---
title: Staff
custom-css: staff
---

<section class="standard-block">

<div>
{%- for staff in site.data.staff -%}
{%- assign faculty = nil -%}
{%- if staff.faculty -%}
    {%- assign faculty = site.faculty | where: "slug", staff.faculty | first -%}
{%- endif -%}
<div>
    <div class="image">
{%- unless faculty -%}
{%- else -%}
    <img src="{% include site/faculty-headshot-filepath.html faculty=faculty %}" />
{%- endunless -%}
    </div>
{%- unless faculty -%}
    <div class="name">{{ staff.name | smartify }}</div>
{%- else -%}
    <div class="name"><a href="{{ faculty.url | relative_url }}">{{ staff.name | smartify }}</a></div>
{%- endunless -%}
    <div class="title">{{ staff.title | smartify }}</div>
    {%- if staff.email -%}
    <div class="email"><svg><use xlink:href="#envelope" /></svg><a href="mailto:{{ staff.email }}">{{ staff.email }}</a></div>
    {%- endif -%}
</div>
{%- endfor -%}
</div>

</section>