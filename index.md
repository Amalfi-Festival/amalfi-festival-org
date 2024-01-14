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
custom-js: rellax.min
custom-css: home
body-class: home
header-blend-mode: normal
---
{%- include site/home-logo.svg -%}
<section id="hero">
    <div class="logo">
        <div id="logo-container"><div id="svg-container"><svg><use xlink:href="#home-logo" /></svg></div></div>
        <span>{{ site.data.institute.edition }}</span>
    </div>
    <div class="image-container">
        <img src="{{ site.image-directory | append: 'amalfi1.jpg' | relative_url }}" alt="Amalfi" class="rellax" data-rellax-speed="-2" />
    </div>
</section>

<section class="copy" markdown="1">

{% assign institute-age = 'now' | date: "%Y" | minus: 1997 %}

## {{ institute-age }} 27 Years of Music & Art on the Amalfi Coast
The Amalfi Coast Music & Arts Festival is based in Maiori, Italy and features a month of concerts each summer throughout the magnificent area of the Amalfi Coast. The region includes world-heritage sites and landmark destinations such as the excavations of Pompeii, the spectacular seaside  towns of Amalfi and Ravello, the magical isle of Capri, and more.
 .

</section>

<section class="copy" markdown="1">

## Concerts Around the Clock... Art, Writing, Italian Language & Mediterranean Cuisine!
Concerts take place daily and include chamber music with the Fine Arts Quartet, piano recitals, vocal performances and opera. The Music Institute, staffed by internationally recognized artists and professors, offers high-level training in piano, strings, and voice, including concert opera productions with orchestra, in addition to a choral program. The festival also presents a rich program in in the visual arts, offering courses in painting and ceramics, in addition to intensive workshops in fiction, poetry, and memoir for writers of all levels.


## The Festival Spirit
More than a series of concerts, the festival is a vibrant international community that brings together musicians, artists and writers, students, teachers and guests,  all from a wide range of countries to interact and learn from each other while engaged in the creative process.


 Participants take excursions and enjoy meals together, spend time on the beach, and, in the close-knit community, form long-lasting friendships and invaluable professional associations. 



</section>

<section id="institute" class="background-image-container">
<img src="{{ site.image-directory | append: "amalfi2.jpg" | relative_url }}" />

<div class="inset-container">
<div class="content-container">
<h2 id="programs">Programs</h2>
<div>
{%- for program-entry in site.data.institute.programs -%}
{%- if program-entry.translation -%}
    {%- continue -%}
{%- endif -%}
{%- assign program-slug = program-entry.name -%}
{%- assign program = site.programs | where: "slug", program-slug | first -%}
<div>
    <img src="{{ site.program-assets-directory | append: program-slug | append: '/home.jpg' | relative_url }}" />
    <div>
        <a href="{{ program.url | relative_url }}">
            <h3 class="program-name">{{ program.title | smartify }}</h3>
        </a>
        <ul>
        {%- for session in program.sessions -%}
            <li>
            {%- if session.session-name -%}
                {{- session.session-name }}:
            {% endif -%}
            {%- include utilities/date-range.html dates=session.dates -%}
            </li>
        {%- endfor -%}
        </ul>
        <div class="buttons">
            <a href="{{ program.url | relative_url }}" class="  button">Learn more</a>
            {%- include site/program/get-apply-url.fx program-name=program-slug -%}
            <a href="{{ __return }}" class="button">Apply</a>
        </div>
    </div>
</div>
{%- endfor -%}
</div>
</div>
</div>

</section>


<section id="institute2" class="background-image-container">
<img src="{{ site.image-directory | append: "amalfi2.jpg" | relative_url }}" />

<h2>Programs</h2>

<div>
{%- for program-entry in site.data.institute.programs -%}
{%- if program-entry.translation -%}
    {%- continue -%}
{%- endif -%}
{%- assign program-name = program-entry.name -%}
{%- assign program = site.programs | where: "slug", program-name | first -%}
<a href="{{ program.url | relative_url }}">
    <h3 class="program-name">{{ program.title | smartify }}</h3>
    <img src="{{ site.program-assets-directory | append: program.slug | append: '/home.jpg' | relative_url }}" />
    <ul>
    {%- for session in program.sessions -%}
        <li>
        {%- if session.session-name -%}
            {{- session.session-name }}:
        {% endif -%}
        {%- include utilities/date-range.html dates=session.dates -%}
        </li>
    {%- endfor -%}
    </ul>
</a>
{%- endfor -%}
</div>

</section>


<section class="copy" markdown="1">

## Guests Are Always Welcome
The Amalfi Guest Program offers a unique opportunity in cultural tourism. Sit in on  master classes and attend concerts and pre-concert lectures. Take advantage of festival excursions to the area's cultural sites and join festival meals and receptions. 


</section>


<section class="copy" markdown="1">

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


<script>
  // Accepts any class name
  var rellax = new Rellax('.rellax');
</script>