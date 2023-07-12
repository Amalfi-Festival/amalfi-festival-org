{%- comment -%}
session: session object

returns the class name if it is associated in the session object, or the session name
{%- endcomment -%}

{%- assign __name = include.session.session-name -%}
{%- if include.session.class-name -%}
    {%- assign class = site.classes | where: "slug", session.class-name | first -%}
    {%- if class.class-name -%}
        {%- assign __name = class.class-name -%}
    {%- endif -%}
{%- endif -%}
{{ __name | smartify }}