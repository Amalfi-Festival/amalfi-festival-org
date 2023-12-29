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
            -   Bernadene-Blaha
            -   Enrico-Elisi
            -   Kevin-Fitz-Gerald
            -   James-Giles
            -   Ian-Jones
            -   Wei-Lung-Li
            -   Marina-Lomazov
            -   Yoshikazu-Nagai
            -   Joseph-Rackers
            -   Jerry-Wong
        associate-staff:
            -   Yetong-Tang
            -   Shichao-Zhang
    -   session-name: Session II
        session-name-zh: 第二期
        dates:
            start: 2024-07-18
            end: 2024-07-30
        faculty:
            -   James-Giles
            -   Kyu-Yeon-Kim
            -   Marina-Lomazov
            -   Jerome-Lowenthal
            -   Thomas-Lymenstull
            -   Ursula-Oppens
            -   Joseph-Rackers
            -   Chi-Wu
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

<div class="image-copy">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/Spooner & Student.JPG" | relative_url }}" />
</div>
<div class="copy">
    Receive individual lessons from world-renowned faculty.
</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/IMG_1398_edited.jpg" | relative_url }}" alt="Nagai teaching" />
</div>
<div class="copy">
    Daily master classes provide a dynamic, interactive learning experience in a supportive environment.
</div>
</div>

<div class="image-copy">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/giles-san-domenico.jpg" | relative_url }}" />
</div>
<div class="copy">
Held in spectacular venues throughout the Amalfi Coast, the Festival hosts daily concerts, including faculty recitals, and the Young Artist Series for students.
</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/1554040_orig.jpg" | relative_url }}" />
</div>
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/lowenthal-oppens.jpg" | relative_url }}" />
</div>
</div>

<div class="image-copy row">
<div class="image">
<img src="{{ site.image-directory | append: "ravello.JPG" | relative_url }}" />
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

