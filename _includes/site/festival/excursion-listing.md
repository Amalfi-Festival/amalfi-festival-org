{%- assign _excursion = site.data.outings.excursions[include.outing-slug] %}

<div class="excursion-hero background-image-container parallax" id="{{ include.outing-slug }}">
<img src="{{ site.image-directory | append: include.hero-image | relative_url }}" />
<div class="title">
<div class="standard-block" markdown="1">
### {{ _excursion.name }}
</div>
</div>
</div>

<div class="excursion-info standard-block">
<ul class="highlight-box colored">
<li><h5>Duration</h5> <div>{{ _excursion.length }}</div></li>

{%- assign _availability = site.empty-array -%}
{%- for _p in site.data.festival.programs -%}
    {%- assign _program = site.programs | where: "slug", _p.program-slug | first -%}
    {%- if _program.to-be-announced -%}
        {%- continue -%}
    {%- endif -%}
    {%- assign _has-excursion = _program.outings.excursions | where: "outing-slug", include.outing-slug | first -%}
    {%- if _has-excursion -%}
        {%- assign _availability = _availability | push: _program -%}
    {%- endif -%}
{%- endfor -%}
<li><h5>Available to</h5>
    <ul>
{%- for _p in _availability -%}
    <li><a href="{{ _p.url | relative_url }}">{{ _p.title | smartify }}</a></li>
{%- endfor -%}
    </ul>
</li>
<li class="description">{% include utilities/markdownify-without-p.html text=_excursion.description %}</li>
</ul>

<div>
{%- if _excursion.tagline -%}
<h4>{{ _excursion.tagline }}</h4>
{%- endif -%}
{{ include.description | markdownify }}
</div>

</div>
