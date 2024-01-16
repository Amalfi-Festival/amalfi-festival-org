---
layout: default
sponsors:
    government:
        - icon: campania-arms.jpg
          label: Regione Campania
        - icon: salerno-arms.jpg
          label: Provincia di Salerno
        - icon: salerno-ente.jpg
          label: Ente Pronvinciale di Salerno
        - icon: amalfi-arms.jpg
          label: Comune di Amalfi
        - icon: maiori-arms.jpg
          label: Comune di Maiori
        - icon: minori-arms.gif
          label: Comune di Minori
    corporate:
        - progetto.jpg
        - coelmo.jpg
custom-css: home
body-class: home
webpage-data:
    header-blend-mode: normal
---
{%- include site/home-logo.svg -%}
<section id="hero">
    <div class="background-image-container parallax">
        <img src="{{ site.image-directory | append: 'amalfi1.jpg' | relative_url }}" alt="Amalfi" />
    </div>
    <div id="masthead">
        <div class="logo">
            <div id="logo-container"><div id="svg-container"><svg><use xlink:href="#home-logo" /></svg></div></div>
            <span id="festival-edition">{{ site.data.festival.edition }}</span>
            <div id="hero-links">{%- include site/festival-links.html omit-guests=true -%}</div>
        </div>
    </div>
</section>

<section class="copy" markdown="1">

{% assign festival-age = 'now' | date: "%Y" | minus: 1997 %}

## {{ festival-age }} Years of Music & Art on the Amalfi Coast
The Amalfi Coast Music & Arts Festival is based in Maiori, Italy and features a month of concerts each summer throughout the magnificent area of the Amalfi Coast. The region includes landmark destinations such as the excavations of Pompeii, the spectacular seaside  towns of Amalfi and Ravello, the magical isle of Capri, and more.

</section>

<section class="copy" markdown="1">

{% assign _src = site.image-directory | append: "concert-choral-2022.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

{% assign _src = site.image-directory | append: "concert-pianos-2019.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

## Concerts around the clock, art exhibits, and writing workshops plus Italian language & Mediterranean cooking classes!

Concerts and master classes take place daily daily and are open to all festival participants. Seminars and workshops are offered by our outstanding faculty. Group meals provide opportunities to sample the finest in regional cuisine. Excursions to the area's outstanding tourist destinations round out the Amalfi experience!


## The Festival Spirit
More than a series of concerts, the festival is a vibrant international community that brings together musicians, artists, writers and guests from a wide range of countries to interact and learn from each other while engaged in the creative process.

Participants take excursions and enjoy meals together, spend time on the beach, and in this close-knit community form long-lasting friendships and invaluable professional associations. 
</section>

<section id="festival" class="background-image-container parallax">
<img src="{{ site.image-directory | append: "amalfi3@0.5x.jpg" | relative_url }}" srcset="{{ site.image-directory | append: "amalfi3.jpg" | relative_url }} 2400w, {{ site.image-directory | append: "amalfi3@0.5x.jpg" | relative_url }} 1363w" sizes="100vw" alt="Scenic Photo Of Coast During Daytime, by Michael Giugliano on Pexels" />

<div class="inset-container">
<div class="content-container">
<h2 id="programs">Programs</h2>
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
        {%- include site/program/get-apply-url.fx program=program -%}
        <a href="{{ __return }}" class="button">Apply</a>
    </div>
    {%- endif -%}
</div>
{%- endfor -%}
</div>
</div>
</div>

</section>

<section class="copy" markdown="1">

{% assign _src = site.image-directory | append: "view-minori.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}
 
## Guests Are Always Welcome

The Amalfi Guest Program offers a unique opportunity in cultural tourism. Sit in on  master classes and attend concerts and pre-concert lectures. Take advantage of festival excursions to the area's cultural sites and join festival meals and receptions.

<a class="button" href="{{ site.baseurl }}{% link _programs/guests.md %}">Learn more</a>

</section>


<section class="copy" markdown="1">

{% assign _src = site.image-directory | append: "dinner-toast-2023.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}
 
## We Appreciate Your Support!

Your donations keep the festival thriving and provide much needed scholarship funds. Help extend the legacy of this unique festival and bring experiences of a lifetime to the artists and musicians seeking inspiration in this historic part of Italy.

<a class="button" href="{{ site.baseurl }}{% link donations.md %}">Donate Now</a>

</section>

<section id="sponsors" markdown="1">

## Many thanks to our generous sponsors

### Government sponsors

<div class="sponsor-gallery">
{%- for sponsor-image in page.sponsors.government -%}
<div><img src="{{ site.image-directory | append: "sponsors/" | append: sponsor-image.icon | relative_url }}" /><div>{{ sponsor-image.label }}</div></div>
{%- endfor -%}
</div>

### Corporate sponsors

<div class="sponsor-gallery">
{%- for sponsor-image in page.sponsors.corporate -%}
<img src="{{ site.image-directory | append: "sponsors/" | append: sponsor-image | relative_url }}" />
{%- endfor -%}
</div>
