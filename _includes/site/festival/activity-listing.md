{%- assign _activity = site.data.outings.activities[include.outing-slug] %}
### {{ _activity.name }}
{: id="{{ include.outing-slug }}" }

<div class="activity-info standard-block">
<ul class="highlight-box colored">
{%- assign _availability = site.empty-array -%}
{%- for _p in site.data.festival.programs -%}
    {%- assign _program = site.programs | where: "slug", _p.program-slug | first -%}
    {%- if _program.to-be-announced -%}
        {%- continue -%}
    {%- endif -%}
    {%- assign _has-activity = _program.outings.activities | where: "outing-slug", include.outing-slug | first -%}
    {%- if _has-activity -%}
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
{%- if _activity.description -%}
<li class="description">{% include utilities/markdownify-without-p.html text=_activity.description %}</li>
{%- endif -%}
</ul>
<div>{{ include.description | markdownify }}</div>
</div>
