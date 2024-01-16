{%- assign tuition = reference-program.tuition %}

### {% include utilities/localize.html string="outings-title" %}

{% capture _url -%}
{{- site.baseurl }}{% link excursions-and-activities.md -%}
{%- endcapture -%}
{%- include utilities/localize.html string="outings-intro" replace-key="~~~URL~~~" replace-value=_url %}

{% include site/program/outings-table.html %}
