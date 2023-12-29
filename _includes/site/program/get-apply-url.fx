{% comment %}
Input variables:
    program: program object
    hash: if not specified, goes to application section
Returns: URL string
{% endcomment %}

{%- assign __program = include.program -%}
{%- assign __return = site.apply | where: "slug", __program.slug | first -%}
{%- assign __hash = include.hash | default: "how-to-apply" -%}
{%- if __return -%}
    {%- assign __return = __return.url | relative_url -%}
{%- elsif page.url == __program.url -%}
    {%- assign __return = "#" | append: __hash -%}
{%- else -%}
    {%- assign __return = __program.url | append: "#" | append: __hash | relative_url -%}
{%- endif -%}