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
        - hertz.jpg
custom-js: rellax.min
custom-css: home
body-class: home
header-blend-mode: normal
---
{%- include site/home-logo.svg -%}
<section id="hero">
    <div class="logo">
        <svg><use xlink:href="#home-logo" /></svg>
        <span>{{ site.data.institute.edition }}</span>
    </div>
    <div class="image-container">
        <img src="{{ site.image-directory | append: 'amalfi1.jpg' | relative_url }}" alt="Amalfi" class="rellax" data-rellax-speed="-2" />
    </div>
</section>

<section class="copy" markdown="1">

{% assign institute-age = 'now' | date: "%Y" | minus: 1997 %}

## {{ institute-age }} Years of Music & Art on the Amalfi Coast
The Amalfi Coast Music & Arts Festival is produced by the Center of Musical Studies of Washington, in conjunction with the Accademia Jacopo Napoli of Salerno, Italy, and Artis International. The festival is based in Maiori, Italy, and features a month of concerts each summer throughout the magnificent area of the Amalfi Coast, in the area, including the excavations of Pompeii, the world-famous vistas of Ravello, where Wagner composed Parisfal, the incomparable Greek temples at Paestum, the magical isle of Capri, and more.

</section>

<section>
    <iframe src="https://www.youtube.com/embed/bP4LVZUGYYs?modestbranding=1" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
</section>

<section class="copy" markdown="1">

## Concerts Around the Clock... Art, Writing, Italian Language & Mediterranean Cuisine!
Concerts take place daily and include chamber music with the Fine Arts Quartet, piano recitals, vocal performances and opera. The Music Institute, staffed by internationally recognized artists and professors, offers high-level training in piano, strings, and voice, including concert opera productions with orchestra, in addition to a choral program. The festival also presents a rich program in in the visual arts, offering courses in painting and ceramics, in addition to intensive workshops in fiction, poetry, and memoir for writers of all levels.


## The Festival Spirit
More than a series of concerts, the festival is a Chautauqua-style social experiment in the arts on an international level. The festival is a vibrant community that brings together performing artists, visual artists, writers and poets, students, teachers, and music aficionados from different countries to interact and learn from each other while engaged in the creative process. In this stimulating and supportive environment, participants form long-lasting friendships and invaluable professional associations. Musicians and singers embarking upon a professional career gain invaluable performing experience. Visual artists present their work at festival exhibitions. Writers present their work at evening readings. The festival also embraces the wider community and creates ongoing cultural exchanges by inviting Italian artists, students and teachers to participate in its symposia, master classes, and social events. Local towns host receptions and boat rides; mayors and ambassadors come to dinner!

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
A special program for guests provides an unparalleled opportunity in cultural tourism. Guests are welcomed as part of the festival community and are afforded a unique backstage experience. They are invited to attend rehearsals, master classes, and pre-concert lectures. They may take advantage of the many educational offerings at the festival, such as art courses, Italian language classes, cooking lessons, and excursions to the area's monuments and cultural sites, such as the excavations of Pompeii, the isle of Capri, and the delightful seaside towns that have made this region famous -- Positano, Ravello, Sorrento, Amalfi, and others.

</section>


<section id="sponsors" markdown="1">

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