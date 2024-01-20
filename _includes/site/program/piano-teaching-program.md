<section class="standard-block" markdown="1">
{%- assign _src = site.program-assets-directory | append: "piano-teaching/seminar.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ opening }}
</section>

<section id="faculty" markdown="1">

## {% include utilities/markdownify-without-p.html text=faculty %}
{: class="standard-block" id="" }

{% assign all-faculty = reference-program.sessions[0].faculty -%}
<div class="standard-block tiles front-of-brochure">
{%- include site/faculty-tiles.html faculty=all-faculty -%}
</div>
</section>

<section class="standard-block" markdown="1">


## {{ experience-title }}

### {{ maiori-title }}

{% assign _src = site.program-assets-directory | append: "piano-teaching/maiori.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ maiori-body }}

### {{ lemons-title }}

{% assign _src = site.program-assets-directory | append: "piano-teaching/lemons.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ lemons-body }}

### {{ minori-title }}

{% assign _src = site.program-assets-directory | append: "piano-teaching/minori.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ minori-body }}

### {{ concerts-title }}

{% assign _src = site.program-assets-directory | append: "piano-teaching/concerts.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ concerts-body }}

### {{ days-nights-title }}

{% assign _src = site.program-assets-directory | append: "piano-teaching/nights.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ days-nights-body }}

### {{ excursions-title }}

{% assign _src = site.program-assets-directory | append: "piano-teaching/excursions.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{{ excursions-body }}

{% include site/program/tuition-accommodations.md description=tuition-description %}

{% include site/program/outings-fees.md %}
{%- unless page.lang == "zh" -%}
{% include application-instructions.md %}
{% include fees-deposits.md %}
{% include site/program/cancellations.md %}
{%- else -%}
{% include application-instructions-zh.md %}
{% include fees-deposits-zh.md %}
{% include site/program/cancellations-zh.md %}
{%- endunless -%}

</section>