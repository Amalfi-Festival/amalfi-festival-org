{% comment %}
program-name: name of program (optional)
    uses |reference-program| as default

return: URL string
{% endcomment %}

{%- assign __return = site.apply | where: "slug", program.slug | first -%}
{%- if __return -%}
    {%- assign __return = __return.url | relative_url -%}
{%- elsif page.url == program.url -%}
    {%- assign __return = "#how-to-apply" -%}
{%- else -%}
    {%- assign __return = program.url | append: "#how-to-apply" | relative_url -%}
{%- endif -%}