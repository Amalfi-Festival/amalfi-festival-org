{%- include site/home-logo.svg -%}
<header id="hero" class="background-image-container parallax">
    <img src="{{ site.image-directory | append: 'amalfi1.jpg' | relative_url }}" alt="Amalfi" />
    <div id="masthead">
        <div class="logo">
            <div id="logo-container"><noscript><h1>Amalfi Coast Music & Arts Festival</h1></noscript><div id="svg-container"><svg><use xlink:href="#home-logo" /></svg></div></div>
            <h2 id="festival-edition">{%- include utilities/localize.html source=site.data.festival key="edition" -%}</h2>
            <div id="hero-links">{%- include site/festival-links.html omit-guests=true -%}</div>
        </div>
    </div>
</header>

<section id="years">
    <div class="standard-block">
        <img src="{{ site.image-directory | append: "concert-choral-2022.jpg" | relative_url }}" data-jslghtbx="{{ include.src }}" data-jslghtbx-group="a" />
<div markdown="1">

## {{ years-title }}

{{ years-body }}
</div>
    </div>
</section>

<section id="immersion">
    <div class="dome-container"><svg><use xlink:href="#dome" /></svg></div>
    <div class="standard-block">
        <img src="{{ site.image-directory | append: "concert-piano-thunderstorm-2019.jpg" | relative_url }}" data-jslghtbx="{{ include.src }}" data-jslghtbx-group="a" />
<div markdown="1">

## {{ immersion-title }} 

{{ immersion-body }}
</div>
    </div>
</section>

<section id="spirit" class="background-image-container parallax">
    <img src="{{ site.image-directory | append: 'festival-spirit-collage.jpg' | relative_url }}" />
<div class="inset-container">
<div class="content-container" markdown="1">

## {{ spirit-title }}

{{ spirit-body }}
</div>
    </div>
</section>

<section id="festival" class="background-image-container parallax">
<img src="{{ site.image-directory | append: "amalfi3@0.5x.jpg" | relative_url }}" srcset="{{ site.image-directory | append: "amalfi3.jpg" | relative_url }} 2400w, {{ site.image-directory | append: "amalfi3@0.5x.jpg" | relative_url }} 1363w" sizes="100vw" alt="Scenic Photo Of Coast During Daytime, by Michael Giugliano on Pexels" />

<div class="inset-container">
<div class="content-container">
<h2 id="programs">{{ season-header }}</h2>
<div>
{%- for _p in site.data.festival.programs -%}
{%- assign _ps = _p.program-slug -%}
{%- assign program = site.programs | where: "slug", _ps | first -%}
<div>
    {%- if program.to-be-announced -%}
    <div>
        <img src="{{ site.program-assets-directory | append: _ps | append: '/home.jpg' | relative_url }}" />
        <h3 class="program-name">{{ program.title | smartify }}</h3>
    </div>
    <ul><li>{% if program.to-be-announced == true %}To be announced{% else %}{{ program.to-be-announced }}{% endif %}</li></ul>
    {%- else -%}
    <a href="{{ program.url | relative_url }}">
        <img src="{{ site.program-assets-directory | append: _ps | append: '/home.jpg' | relative_url }}" />
        <h3 class="program-name">{{ program.title | smartify }}</h3>
    </a>
    <ul>
        {%- for session in program.sessions -%}
        <li>
            {%- if session.session-name -%}
                {{- session.session-name }}:
            {% endif -%}
            {%- include utilities/date.html dates=session.dates -%}
        </li>
        {%- endfor -%}
    </ul>
    <div class="buttons">
        <a href="{{ program.url | relative_url }}" class="  button">Learn more</a>
        {%- unless program.applications-closed -%}
        {%- include site/program/get-apply-url.fx program=program -%}
        <a href="{{ __return }}" class="button">Apply</a>
        {%- endunless -%}
    </div>
    {%- endif -%}
</div>
{%- endfor -%}
</div>
</div>
</div>

</section>

<section class="copy standard-block" markdown="1">

{% assign _src = site.image-directory | append: "minori-view.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

## {{ guests-title }}

{{ guests-body }}

<a class="button" href="{{ site.baseurl }}{% link _programs/guests.md %}">Learn more</a>

</section>


<section class="copy standard-block" markdown="1">

{% assign _src = site.image-directory | append: "dinner-toast-2023.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

## {{ support-title }}

{{ support-body }}

<a class="button" href="{{ site.baseurl }}{% link donations.md %}">{{ donate-now }}</a>

</section>

<section id="sponsors">
<div markdown="1">

## {{ sponsors-title }}

### {{ sponsors-government }}

<div class="sponsor-gallery">
{%- for sponsor-image in page.sponsors.government -%}
<div><img src="{{ site.image-directory | append: "sponsors/" | append: sponsor-image.icon | relative_url }}" /><div>{{ sponsor-image.label }}</div></div>
{%- endfor -%}
</div>

### {{ sponsors-corporate }}

<div class="sponsor-gallery">
{%- for sponsor-image in page.sponsors.corporate -%}
<img src="{{ site.image-directory | append: "sponsors/" | append: sponsor-image | relative_url }}" />
{%- endfor -%}
</div>

</div>
</section>

<script>(() => { parallaxify("spirit", 1.5); parallaxify("festival"); })();</script>