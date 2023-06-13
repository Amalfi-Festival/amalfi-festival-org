---
title: Staff
custom-css: staff
---

## TODO: GET PHOTOS OF EVERYONE?

<ul>
{%- for staff in site.data.staff -%}
<li>
    <div class="name">{{ staff.name | smartify }}</div>
    <div class="title">{{ staff.title | smartify }}</div>
    {%- if staff.email -%}
    <div class="email"><a href="mailto:{{ staff.email }}">{{ staff.email }}</a></div>
    {%- endif -%}
</li>
{%- endfor -%}
</ul>