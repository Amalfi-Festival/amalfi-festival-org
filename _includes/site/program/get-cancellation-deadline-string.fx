{%- capture __date -%}
{%- include utilities/date.html date=include.cancellation-parameter.date -%}
{%- endcapture -%}
{%- assign __date-relation-localization-key = include.cancellation-parameter.date-relation | append: "-date" -%}
{% include utilities/localize.html string=__date-relation-localization-key replace-key="~~~DATE~~~" replace-value=__date %}