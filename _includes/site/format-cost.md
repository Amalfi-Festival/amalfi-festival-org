{% unless include.localization -%}
${{ include.cost }}
{%- else -%}
{{ include.cost }}美元
{%- endunless %}