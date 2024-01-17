{%- assign __return = site.empty-array -%}
{%- assign _fp = site.data.festival.programs | where: "program-slug", include.program-slug | first -%}
{%- assign _p = site.programs | where: "slug", _fp.program-slug | first %}
{%- assign __return = __return | push: _p -%}
{%- if _fp.zh -%}
    {%- assign _p = site.programs | where: "slug", _fp.zh | first %}
    {%- assign __return = __return | push: _p -%}
{%- endif -%}