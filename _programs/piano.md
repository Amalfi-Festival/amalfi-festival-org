---
title: Piano Program
sessions:
    -   session-name: Session I
        session-name-cn: 第一期
        dates:
            start: 2023-07-05
            end: 2023-07-17
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
        associate-faculty:
            -   Yetong-Tang
            -   Shichao-Zhang
    -   session-name: Session II
        session-name-cn: 第二期
        dates:
            start: 2023-07-18
            end: 2023-07-30
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
        associate-faculty:
            -   Yetong-Tang
            -   Shichao-Zhang
application:
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c7610bfe-617b-4482-8a7f-b09513d1c287
    guest-form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
    include-audition: true
tuition:
    meal-plan: 625
    hotel-triple: 3385
    hostel-triple: 2995
    hotel-double-upgrade: 465
    hotel-single-upgrade: 945
    guests:
        hotel-triple: 3195
menu-title: Piano
hero-image: 23.jpg
localizations:
    -   abbreviation: en
        program: piano
    -   abbreviation: 中文
        program: piano-cn
---
{%- include site/program/initialize-program-variables.fx program=page -%}

<section id="splash" class="proto-2 standard-block" markdown="1">

## Experience an intensive piano education within the breathtaking views of the Amalfi Coast

<div class="image-copy">
<div class="image" data-rellax-speed="-1" data-rellax-percentage="0">
<img src="{{ site.program-assets-directory | append: "piano/Spooner & Student.JPG" | relative_url }}" />
</div>
<div class="copy">
    Receive individual attention from world-renowned faculty with 4 one-hour private lessons.
</div>
</div>


<div class="image-copy right">
<div class="image" data-rellax-speed="-.7" data-rellax-percentage="0">
<img src="{{ site.program-assets-directory | append: "piano/IMG_1398_edited.jpg" | relative_url }}" alt="Nagai teaching" />
</div>
<div class="copy">
    Daily masterclasses provide a dynamic, interactive learning experience in a supportive environment.
</div>
</div>


<div class="image-copy">
<div class="image" data-rellax-speed="-.3" data-rellax-percentage="0">
<img src="{{ site.program-assets-directory | append: "piano/giles-san-domenico.jpg" | relative_url }}" />
</div>
<div class="copy" style="bottom: -7rem;">
Held in an array of intimate settings at historic churches, halls, and landmarks, the Festival hosts daily faculty concerts and the Young Artist Series, the institute recital series for students.
</div>
</div>

<div class="image-copy right">
<div class="image" data-rellax-speed=".3" data-rellax-percentage="0">
<img src="{{ site.program-assets-directory | append: "piano/1554040_orig.jpg" | relative_url }}" alt="Student performing" />
</div>
<div class="image" data-rellax-speed=".3" data-rellax-percentage="0.5">
<img src="{{ site.program-assets-directory | append: "piano/lowenthal-oppens.jpg" | relative_url }}" alt="Student performing" />
</div>
</div>

<div class="image-copy row">
<div class="image" data-rellax-speed=".5" data-rellax-percentage="0">
<img src="{{ site.program-assets-directory | append: "piano/art show 2.jpg" | relative_url }}" />
</div>
<div class="copy">
Opportunities to fully experience the Amalfi Coast with excursions to world-renowned locations, and cultural activities including language, pottery, and cooking classes.
</div>
</div>
</section>

<section id="faculty" markdown="1">

## Learn from world-class faculty
{: class="standard-block"}

{% assign all-faculty = reference-program.sessions[0].faculty | concat: reference-program.sessions[1].faculty | uniq | sort -%}
<div class="standard-block tiles front-of-brochure">
{%- include site/faculty-tiles.html faculty=all-faculty -%}
</div>
</section>

<section id="learn" class="background-image-container">
<img src="{{ site.program-assets-directory | append: 'piano/collage.jpg' | relative_url }}" />
<h3>Application deadline:<br/>{% include site/institute/application-deadline.html %}</h3>
<a class="apply" href="{{ apply-page.url | relative_url }}">Learn More and Apply</a>
</section>

