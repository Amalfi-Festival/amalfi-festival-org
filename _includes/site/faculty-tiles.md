{%- for faculty-member-name in include.faculty -%}
    {%- assign faculty-member = nil -%}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-member-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}
    {%- unless faculty-member -%}
        {%- for staff-candidate in site.staff -%}
            {%- if staff-candidate.slug == faculty-member-name -%}
                {%- assign faculty-member = staff-candidate -%}
                {%- break -%}
            {%- endif -%}
        {%- endfor -%}
    {%- endunless -%}

    {%- capture faculty-name -%}{{ faculty-member.first-name }} {{ faculty-member.last-name }}{%- if faculty-member.cn-name and include.localization -%}<br/>({{ faculty-member.cn-name }}){%- endif -%}{%- endcapture -%}
    {%- unless faculty-member.prefers-en-name -%}
        {%- if faculty-member.cn-name and include.localization -%}
            {%- capture faculty-name -%}{{ faculty-member.cn-name }}{%- endcapture -%}
        {%- endif -%}
    {%- endunless -%}
<div><a href="{{ faculty-member.url | relative_url }}"><div class="image"><img src="{% include site/faculty-headshot-filepath.html faculty=faculty-member %}" /></div><div class="name">{{ faculty-name }}</div><div class="school">{% if faculty-member.school-cn and include.localization %}{{ faculty-member.school-cn }}{% else %}{{ faculty-member.school }}{% endif %}</div>
</a></div>
{%- endfor -%}
