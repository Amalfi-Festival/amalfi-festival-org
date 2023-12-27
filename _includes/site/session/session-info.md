{% for session in reference-program.sessions %}

{%- if session.class-name == nil or reference-program.sessions.size > 1 -%}
    {%- capture session-name -%}{%- include site/session/get-session-name-with-dates.html session=session -%}{%- endcapture -%}
    {%- if session.session-name -%}
        {%- unless page.lang -%}
<h2 class="session" id="{{ session-name | slugify }}">{{ session-name }}</h2>
        {%- else -%}
<h2 class="session" id="{{ session-name | slugify }}">{{ session.session-name-zh | default: session.session-name }}: {% include utilities/date.html dates=session.dates %}</h2>
        {%- endunless -%}
    {%- endif -%}
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
            {%- for _i in class.images -%}
                {%- if _i.filename -%}
                    {%- assign _src = site.program-assets-directory | append: _i.filename | relative_url -%}
                {%- else -%}
                    {%- assign _src = site.program-assets-directory | append: _i | relative_url -%}
                {%- endif -%}
                {%- include site/sidebar-image.html src=_src alt=_i.alt -%}
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
