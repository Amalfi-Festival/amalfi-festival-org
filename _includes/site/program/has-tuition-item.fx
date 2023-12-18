{%- comment -%}
Input variables:
    program: program object (optional)
        uses |reference-program| as default
    tuition-item-name: name of the tuition item

Returns:
    false - program does not have tuition item
    1 - program has tuition item
    2 - program has sessions with override tuition items (but not necessarily a fallback/general program tuition item)
{%- endcomment -%}

{%- assign __p = reference-program -%}
{%- unless __p -%}
    {%- assign __p = include.program -%}
{%- endunless -%}

{%- assign __return = false -%}
{%- for session in __p.sessions -%}
    {%- if session.tuition[include.tuition-item-name] -%}
        {%- assign __return = 2 -%}
        {%- break -%}
    {%- endif -%}
{%- endfor -%}
{%- unless __return -%}
    {%- if __p.tuition[include.tuition-item-name] -%}
        {%- assign __return = 1 -%}
    {%- endif -%}
{%- endunless -%}
