{%- assign activity = site.data.festival.activities | where: "name", include.activity-name | first -%}
{%- if activity.available-to-programs %}
### {{ activity.name }}

<div class="activity-info standard-block">
<ul class="highlight-box colored">
    <li><h5>Price</h5> <div>${{ activity.cost }}</div></li>

    {%- unless activity.available-to-programs[0] -%}
    <li><h5>Available to</h5> <div>all programs participants and guests</div></li>
    {%- else -%}
    <li><h5>Available to</h5>
    <ul>
    {%- for group in activity.available-to-programs -%}
        {%- assign program = site.programs | where: "slug", group | first -%}
        <li><a href="{{ program.url | relative_url }}">{{ program.title | smartify }}</a></li>
    {%- endfor -%}
    </ul></li>
    {%- endunless -%}
</ul>

<div>{{ include.description | markdownify }}</div>

</div>
{%- endif -%}