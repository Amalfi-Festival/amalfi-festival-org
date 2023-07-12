{% for session in reference-program.sessions %}

{%- capture session-name -%}{%- include site/session/get-session-name-with-dates.html session=session -%}{%- endcapture -%}
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

{%- unless class.summary %}
{{ class.content }}
{%- else -%}
{{ class.summary | smartify | markdownify }}
<details>
    <summary>
        <div class="summary-chevron-up"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#025E73" stroke-width="2" stroke-linecap="cap" stroke-linejoin="cap" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
        <span class="summary-title">More information</span>
    </summary>
    <div class="summary-chevron-down"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#025E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg></div>
    <section class="details-content" markdown="1">{{ class.content }}</section>
</details>
{%- endunless -%}

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
