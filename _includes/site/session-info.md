{% for session in program.sessions %}

{% unless include.show-localization %}
## {% if session.session-name %}{{ session.session-name }}: {% endif %}{% include utilities/date-range.html dates=session.dates %}
{: class="session"}
{% else %}
## {% if session.session-name-cn %}{{ session.session-name-cn }}{% else %}{{ session.session-name }}{% endif %}: {% include utilities/date-range-cn.html dates=session.dates %}
{: class="session"}
{% endunless %}

### Faculty

{% assign faculty = session.faculty -%}
<div class="tiles">
{%- for faculty-member-name in faculty %}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-member-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}
<div><a href="{{ faculty-member.url | relative_url }}"><div class="image"><img src="{{ site.faculty-image-directory | append: faculty-member.headshot-filename | relative_url }}" /></div><div class="name">{{ faculty-member.first-name }} {{ faculty-member.last-name }}{% if faculty-member.cn-name and include.show-localization %}<br/>({{ faculty-member.cn-name }}){% endif %}</div><div class="school">{{ faculty-member.school }}</div>
</a></div>
{%- endfor -%}
</div>

{%- if session.associate-faculty -%}

### Associate Staff

{% assign faculty = session.associate-faculty -%}
<div class="tiles">
{%- for faculty-member-name in faculty %}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-member-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}
<div><a href="{{ faculty-member.url | relative_url }}"><div class="image"><img src="{{ site.faculty-image-directory | append: faculty-member.headshot-filename | relative_url }}" /></div><div class="name">{{ faculty-member.first-name }} {{ faculty-member.last-name }}{% if faculty-member.cn-name and include.show-localization %}<br/>({{ faculty-member.cn-name }}){% endif %}</div><div class="school">{{ faculty-member.school }}</div>
</a></div>
{%- endfor -%}
</div>
{%- endif -%}


{%- endfor -%}
