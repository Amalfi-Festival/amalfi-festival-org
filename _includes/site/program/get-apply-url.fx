{% comment %}
Input variables:
    program-name: name of program (optional)
        uses |reference-program| as default
    hash: if not specified, goes to application section
Returns: URL string
{% endcomment %}

{%- assign __return = site.apply | where: "slug", program.slug | first -%}
{%- assign _hash = include.hash | "how-to-apply" -%}
{%- if __return -%}
    {%- assign __return = __return.url | relative_url -%}
{%- elsif page.url == program.url -%}
    {%- assign __return = "#" | append: _hash -%}
{%- else -%}
    {%- assign __return = program.url | append: "#" | append: _hash | relative_url -%}
{%- endif -%}