{% for session in reference-program.sessions %}

{%- if session.class-name == nil or reference-program.sessions.size > 1 -%}
    {%- capture session-name -%}{%- include site/session/get-session-name-with-dates.html session=session -%}{%- endcapture -%}
    {%- if session.session-name -%}
<h2 class="session">{{ session-name }}</h2>
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
            {%- if class.content contains "~IMAGE~" -%}
                {%- assign _content = class.content -%}
                {%- for _i in class.images -%}
                    {%- if _i.filename -%}
                        {%- assign _src = site.program-assets-directory | append: _i.filename | relative_url -%}
                    {%- else -%}
                        {%- assign _src = site.program-assets-directory | append: _i | relative_url -%}
                    {%- endif -%}
                    {%- capture _image-html -%}{%- include site/sidebar-image.html src=_src alt=_i.alt -%}{%- endcapture -%}
                    {%- capture _content -%}{{ _content | replace_first: "~IMAGE~", _image-html }}{%- endcapture -%}
                {%- endfor -%}
{{ _content }}
            {%- else -%}
                {%- for _i in class.images -%}
                    {%- if _i.filename -%}
                        {%- assign _src = site.program-assets-directory | append: _i.filename | relative_url -%}
                    {%- else -%}
                        {%- assign _src = site.program-assets-directory | append: _i | relative_url -%}
                    {%- endif -%}
                    {%- include site/sidebar-image.html src=_src alt=_i.alt -%}
                {%- endfor -%}
{{ class.content }}
            {%- endif -%}
        {%- endif -%}
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
    {%- include site/faculty-tiles.html faculty=session.faculty -%}
    {%- if session.associate-faculty -%}
    <h4>{% include utilities/localize.html string="Associate Faculty" %}</h4>
    {%- include site/faculty-tiles.html faculty=session.associate-faculty -%}
    {%- endif -%}
</div>
{%- endif -%}
{%- endfor -%}
