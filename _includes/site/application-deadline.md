{%- if site.data.institute.application.extended-deadline -%}
<del>{{ site.data.institute.application.deadline | date: "%B %e, %Y"}}</del><br/>
extended to {{ site.data.institute.application.extended-deadline | date: "%B %e, %Y"}}
{%- else -%}
{{ site.data.institute.application.deadline | date: "%B %e, %Y"}}
{%- endif -%}