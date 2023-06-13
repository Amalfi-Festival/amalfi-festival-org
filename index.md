---
layout: default
custom-css: home
---

<section id="hero">
    <div class="logo">
        <img src="{{ site.site-assets-directory | append: 'logo.png' | relative_url }}" />
        <span>Amalfi Coast</span>
        <span>Music&Arts Festival</span>
    </div>
    <div class="image">
        <img src="{{ site.image-directory | append: 'amalfi1.jpg' | relative_url }}" alt="Amalfi" />
    </div>
</section>

<section class="copy" markdown="1">

{% assign institute-age = 'now' | date: "%Y" | minus: 1997 %}

## {{ institute-age }} Years of Music & Art on the Amalfi Coast
The Amalfi Coast Music & Arts Festival is produced by the Center of Musical Studies of Washington, in conjunction with the Accademia Jacopo Napoli of Salerno, Italy, and Artis International. The festival is based in Maiori, Italy, and features a month of concerts each summer throughout the magnificent area of the Amalfi Coast, in the area, including the excavations of Pompeii, the world-famous vistas of Ravello, where Wagner composed Parisfal, the incomparable Greek temples at Paestum, the magical isle of Capri, and more.

## Concerts Around the Clock... Art, Writing, Italian Language & Mediterranean Cuisine!
Concerts take place daily and include chamber music with the Fine Arts Quartet, piano recitals, vocal performances and opera. The Music Institute, staffed by internationally recognized artists and professors, offers high-level training in piano, strings, and voice, including concert opera productions with orchestra, in addition to a choral program. The festival also presents a rich program in in the visual arts, offering courses in painting and ceramics, in addition to intensive workshops in fiction, poetry, and memoir for writers of all levels.


## The Festival Spirit
More than a series of concerts, the festival is a Chautauqua-style social experiment in the arts on an international level. The festival is a vibrant community that brings together performing artists, visual artists, writers and poets, students, teachers, and music aficionados from different countries to interact and learn from each other while engaged in the creative process. In this stimulating and supportive environment, participants form long-lasting friendships and invaluable professional associations. Musicians and singers embarking upon a professional career gain invaluable performing experience. Visual artists present their work at festival exhibitions. Writers present their work at evening readings. The festival also embraces the wider community and creates ongoing cultural exchanges by inviting Italian artists, students and teachers to participate in its symposia, master classes, and social events. Local towns host receptions and boat rides; mayors and ambassadors come to dinner!

</section>

<section id="institute" markdown="1">

## The Institute

<div>
{%- for program-entry in site.data.institute.programs -%}
{%- if program-entry.translation -%}
    {%- continue -%}
{%- endif -%}
{%- assign program-name = program-entry.name -%}
{%- assign program = site.programs | where: "slug", program-name | first -%}
<div>
    <h3 class="program-name">{{ program.program-name | smartify }}</h3>
    <img src="{{ site.program-assets-directory | append: program.slug | append: '/home.jpg' | relative_url }}" />
    <ul>
    {%- for session in program.sessions -%}
        <li>
        {%- if session.session-name -%}
            {{- session.session-name }}:
        {% endif -%}
        {%- include site/date-range.html dates=session.dates -%}
        </li>
    {%- endfor -%}
    </ul>
</div>
{%- endfor -%}
</div>

</section>

<section class="copy" markdown="1">

## Guests Are Always Welcome
A special program for guests provides an unparalleled opportunity in cultural tourism. Guests are welcomed as part of the festival community and are afforded a unique backstage experience. They are invited to attend rehearsals, master classes, and pre-concert lectures. They may take advantage of the many educational offerings at the festival, such as art courses, Italian language classes, cooking lessons, and excursions to the area's monuments and cultural sites, such as the excavations of Pompeii, the isle of Capri, and the delightful seaside towns that have made this region famous -- Positano, Ravello, Sorrento, Amalfi, and others.

</section>