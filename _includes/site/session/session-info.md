{% for session in reference-program.sessions %}

{%- capture session-name -%}{%- include site/session/get-session-name-with-dates.html session=session -%}{%- endcapture -%}
{%- if session.session-name -%}
{%- unless page.lang -%}
<h2 class="session" id="{{ session-name | slugify }}">{{ session-name }}</h2>
{%- else -%}
<h2 class="session" id="{{ session-name | slugify }}">{% if session.session-name-zh %}{{ session.session-name-zh }}{% else %}{{ session.session-name }}{% endif %}: {% include utilities/date.html dates=session.dates %}</h2>
{% endunless %}
{%- endif -%}

{%- if session.class-name -%}
    {%- assign class = site.classes | where: "slug", session.class-name | first %}
    {%- if class.class-name %}
### {{ class.class-name | smartify }}
    {% endif %}

<div class="tiles inside-brochure class">
    <h4>{% if include.faculty-type %}{{ include.faculty-type }}{% else %}{% include utilities/localize.html string="Faculty" %}{% endif %}</h4>
    {%- include site/faculty-tiles.html faculty=session.faculty -%}
</div>


{%- unless class.summary -%}
    {%- if class.images -%}
        {%- for image in class.images -%}
<div class="highlight-box image">
    <img src="{{ site.program-assets-directory | append: image | relative_url }}" />
</div>
        {%- endfor -%}
    {%- endif -%}
{{ class.content }}
{%- else -%}
{%- if class.images -%}
    {%- for image in class.images -%}
<div class="image-container">
    <img src="{{ site.program-assets-directory | append: image | relative_url }}" />
</div>
    {%- endfor -%}
{%- endif -%}
{{ class.summary | smartify | markdownify }}
{%- capture details_content -%}{{ class.content | smartify | markdownify }}{%- endcapture -%}
{%- include site/details.html summary="More information" details=details_content -%}
{%- endunless -%}

{%- else -%}
<div class="tiles inside-brochure">
    <h4>{% if include.faculty-type %}{{ include.faculty-type }}{% else %}{% include utilities/localize.html string="Faculty" %}{% endif %}</h4>
    {%- include site/faculty-tiles.html faculty=session.faculty localization=include.show-localization -%}
    {%- if session.associate-staff -%}
    <h4>{% include utilities/localize.html string="Associate Staff" %}</h4>
    {%- include site/faculty-tiles.html faculty=session.associate-staff localization=include.show-localization -%}
    {%- endif -%}
</div>
{%- endif -%}

{%- endfor -%}
