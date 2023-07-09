{% for session in reference-program.sessions %}

{%- capture session-name -%}{%- include site/session-name.html session=session -%}{%- endcapture -%}
{%- unless include.show-localization -%}
    {%- if session.session-name -%}
    <h2 class="session" id="{{ session-name | slugify }}">{{ session-name }}</h2>
    {%- endif -%}
{%- else -%}
## {% if session.session-name-cn %}{{ session.session-name-cn }}{% else %}{{ session.session-name }}{% endif %}: {% include utilities/date-range-cn.html dates=session.dates %}
{: class="session" id="{{ session-name | slugify }}"}
{% endunless %}

{%- if session.class-name -%}
    {%- assign class = site.classes | where: "slug", session.class-name | first %}
    {%- if class.class-name %}
### {{ class.class-name | smartify }}
    {% endif %}

<div class="tiles inside-brochure class">
    <h3>{% if include.faculty-type %}{{ include.faculty-type }}{% else %}Faculty{% endif %}</h3>
    {%- include site/faculty-tiles.md faculty=session.faculty localization=include.show-localization -%}
</div>

{{ class.content }}

{%- else -%}
<div class="tiles inside-brochure">
    <h3>{% if include.faculty-type %}{{ include.faculty-type }}{% else %}Faculty{% endif %}</h3>
    {%- include site/faculty-tiles.md faculty=session.faculty localization=include.show-localization -%}
    {%- if session.associate-faculty -%}
    <h3>Associate Staff</h3>
    {%- include site/faculty-tiles.md faculty=session.associate-faculty localization=include.show-localization -%}
    {%- endif -%}
</div>
{%- endif -%}

{%- endfor -%}
