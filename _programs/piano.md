---
title: Piano Program
sessions:
    -   session-name: Session I
        session-name-zh: 第一期
        dates:
            start: 2024-07-05
            end: 2024-07-17
        faculty:
            -   Boris-Berman
            -   Christopher Guzman
            -   Min Kwon
            -   Jerome Lowenthal 
            -   Wei-Lung-Li
            -   Marina-Lomazov
            -   Yoshikazu-Nagai
            -   Ursula-Oppens
            -   Joseph-Rackers
            -   Steven Spooner 
        associate-staff:
            -   Yetong-Tang
            -   Shichao-Zhang
    -   session-name: Session II
        session-name-zh: 第二期
        dates:
            start: 2024-07-18
            end: 2024-07-30
        faculty:
            -   Bernadene-Blaha
            -   Tema Blackstone
            -   Bruce Brubaker 
            -   Hung-Kuan Chen 
            -   Kevin-Fitz-Gerald
            -   James-Giles
            -   Douglas Humpherys
            -   Kyu-Yeon-Kim
            -   Thomas-Rosenkranz
            -   Ursula-Oppens
            -   Hong-Xu
        associate-staff:
            -   Yetong-Tang
            -   Shichao-Zhang
application:
    form-url: https://forms.gle/ebvRKq7ULbid4MC48
    guest-form-url: https://forms.gle/LpyNuznuL6uogNDM9
outings:
    excursions:
        -   outing-slug: ravello
        -   outing-slug: pompeii
        -   outing-slug: capri
            additional-description: "***No lessons are scheduled on this day because almost all students take this trip.***"
            localizations:
                zh:
                    additional-description: "***这一天没有安排课程，因为几乎所有学生都会参加这次旅行。***"
    activities:
        -   outing-slug: language
        -   outing-slug: cooking
tuition:
    meal-plan: 625
    hotel-triple: 3385
    hostel-triple: 2995
    hotel-double-upgrade: 465
    hotel-single-upgrade: 945
tuition-guests:
    meal-plan: true
    hotel-triple: 3195
    hotel-double-upgrade: true
    hotel-single-upgrade: true
webpage-data:
    menu-title: Piano
    hero-image: 23.jpg
    program-header-subtitle: "<h3>James Giles, Artistic Director<br/>Yoshikazu Nagai, Faculty Chair</h3>"
---
{%- include site/program/initialize-program-variables.fx -%}

<section id="splash" class="proto">
<div class="standard-block" markdown="1">

## Experience an intensive piano education amid the breathtaking views of the Amalfi Coast

{% assign _piano-dir = site.program-assets-directory | append: "piano/" -%}
<div class="image-copy">
<div class="image">
<img src="{{ _piano-dir | append: "spooner.jpg" | relative_url }}" alt="Spooner teaching a student" />
</div>
<div class="copy">
    Enjoy individual lessons with world-renowned faculty.
</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ _piano-dir | append: "IMG_1398_edited.jpg" | relative_url }}" alt="Nagai masterclass" />
</div>
<div class="copy">
    Daily master classes provide a dynamic, interactive learning experience in a supportive environment.
</div>
</div>

<div class="image-copy">
<div class="image">
<img src="{{ _piano-dir | append: "giles-san-domenico.jpg" | relative_url }}" alt="Giles performing in San Domenico" />
</div>
<div class="copy">
Perform in "Young Artist Series" concerts and attend faculty recitals in spectacular venues throughout the Amalfi Coast area. 
</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ _piano-dir | append: "group-naples-piazza-2023.jpg" | relative_url }}" alt="Group in Naples piazza" />
</div>
<div class="image">
<img src="{{ _piano-dir | append: "lowenthal-oppens.jpg" | relative_url }}" alt="Lowenthal and Oppens duet" />
</div>
</div>

<div class="image-copy row">
<div class="image">
<img src="{{ _piano-dir | append: "amalfi-from-water.jpg" | relative_url }}" alt="View of Amalfi from the water" />
</div>
<div class="copy">
Opportunities to fully experience the Amalfi Coast with excursions to historic locations.
</div>
</div>

</div>
</section>

<section id="faculty" markdown="1">

## Our distinguished {{ site.data.festival.application.deadline | date: "%Y" }} faculty
{: class="standard-block"}

{% assign all-faculty = reference-program.sessions[0].faculty | concat: reference-program.sessions[1].faculty | uniq | sort -%}
<div class="standard-block tiles front-of-brochure">
{%- include site/faculty-tiles.html faculty=all-faculty -%}
</div>
</section>

<section id="video">
    <iframe src="https://www.youtube.com/embed/bP4LVZUGYYs?modestbranding=1" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
</section>

<section id="learn" class="background-image-container parallax">
<img src="{{ site.program-assets-directory | append: 'piano/collage.jpg' | relative_url }}" />
<h3><span class="label">{% include utilities/localize.html string="Application deadline" %}</span><br/>{% include site/program/application-deadline.html %}</h3>
<a class="apply button" href="{{ apply-url }}">{% include utilities/localize.html string="Learn more and apply" %}</a>
</section>

