{%- assign excursion = site.data.institute.excursions | where: "name", include.excursion-name | first %}

<div class="excursion-hero">
<img class="rellax" data-rellax-speed="-3" data-rellax-percentage="0.6" src="{{ site.image-directory | append: include.hero-image | relative_url }}" />
<div class="title">
<div class="standard-block" markdown="1">
### {{ excursion.name }}
</div>
</div>
</div>

<div class="excursion-info standard-block">
<ul class="highlight-box colored">
    <li>Price: <div>${{ excursion.cost }}</div></li>
    <li>Duration: <div>{{ excursion.length }}</div></li>
    {%- unless excursion.available-to-programs[0] -%}
    <li>Available to all programs participants and guests</li>
    {%- else -%}
    <li>Available to:
    <ul>
    {%- for group in excursion.available-to-programs -%}
        {%- assign program = site.programs | where: "slug", group | first -%}
        <li><a href="{{ program.url | relative_url }}">{{ program.program-name | smartify }}</a></li>
    {%- endfor -%}
    </ul></li>
    {%- endunless -%}
    <li>{{ excursion.description | markdownify }}</li>
</ul>

<div>{%- if excursion.tagline -%}
<h4>{{ excursion.tagline }}</h4>
{%- endif -%}

{{ include.description | markdownify }}</div>

</div>