{% comment %}
This establishes three local variables:

    - program: either a slug of the program, or the program object itself
    - reference-program: is self by default
    - apply-url: URL to apply page (may be program page using #)
{% endcomment %}

{%- assign program = include.program -%}
{%- unless program.title -%}
    {%- assign program = site.programs | where: "slug", include.program | first -%}
{%- endunless -%}
{%- assign reference-program = program -%}
{%- if program.reference-program -%}
    {%- assign reference-program = site.programs | where: "slug", program.reference-program | first -%}
{%- endif -%}

{%- include site/program/get-apply-url.fx program-name=program.slug -%}
{%- assign apply-url = __return -%}
