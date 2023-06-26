{% comment %}
This establishes three local variables:

    - program: either a slug of the program, or the program object itself
    - reference-program: is self by default
    - apply-page: apply object if there is one
{% endcomment %}

{%- assign program = include.program -%}
{%- unless program.program-name -%}
    {%- assign program = site.programs | where: "slug", include.program | first -%}
{%- endunless -%}
{%- assign reference-program = program -%}
{%- if program.reference-program -%}
    {%- assign reference-program = site.programs | where: "slug", program.reference-program | first -%}
{%- endif -%}

{%- assign apply-page = site.apply | where: "slug", program.slug | first -%}
