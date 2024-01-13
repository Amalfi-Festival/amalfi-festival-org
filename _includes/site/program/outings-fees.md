{%- assign tuition = reference-program.tuition %}

### {% include utilities/localize.html string="outings-title" %}

{% capture _html -%}
{%- include utilities/localize.html string="outings-intro" -%}
{%- endcapture -%}
{%- capture _url -%}
{{- site.baseurl }}{% link excursions-and-activities.md -%}
{%- endcapture -%}
{{- _html | replace: "~~~URL~~~", _url | smartify | markdownify -}}

{% include site/program/outings-table.html %}
