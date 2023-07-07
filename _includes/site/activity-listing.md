{%- assign activity = site.data.institute.activities | where: "name", include.activity-name | first -%}
{%- if activity.available-to-programs %}
### {{ activity.name }}

<div class="activity-info standard-block">
<ul class="highlight-box colored">
    <li>Price: <div>${{ activity.cost }}</div></li>

    {%- unless activity.available-to-programs[0] -%}
    <li>Available to all programs participants and guests</li>
    {%- else -%}
    <li>Available to:
    <ul>
    {%- for group in activity.available-to-programs -%}
        {%- assign program = site.programs | where: "slug", group | first -%}
        <li><a href="{{ program.url | relative_url }}">{{ program.program-name | smartify }}</a></li>
    {%- endfor -%}
    </ul></li>
    {%- endunless -%}
</ul>

<div>{{ include.description | markdownify }}</div>

</div>
{%- endif -%}