---
program-name: Piano Program
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
        guests:
            hotel-description: Hotel accommodations (triple occupancy) & buffet breakfast
            hotel-fee: 3195
            form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
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
        guests:
            hotel-description: Hotel accommodations (triple occupancy) & buffet breakfast
            hotel-fee: 3195
            form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
application:
    extended-deadline: 2023-04-23
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c7610bfe-617b-4482-8a7f-b09513d1c287
    payment-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c7610bfe-617b-4482-8a7f-b09513d1c287
    include-audition: true
tuition:
    meal-plan: 625
    hotel-triple: 3385
    hostel-triple: 2995
    double-room-upgrade: 465
    single-room-upgrade: 945
menu-title: Piano
hero-image: concert.jpg
translations:
    -   abbreviation: en
        program-name: piano
    -   abbreviation: 中文
        program-name: piano-cn
---
{%- include site/initialize-program-variables.md program=page -%}

<section id="splash" class="standard-block" markdown="1">

## Experience an intensive piano education within the breathtaking views of the Amalfi Coast

<div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
<a class="apply" href="{{ apply-page.url | relative_url }}#how-to-apply">Apply</a>
</div>

<div class="image-copy">
<div class="image rellax" data-rellax-speed="-1" markdown="1">
![Giles at San Domenico]({{ site.program-assets-directory | append: "piano/Spooner & Student.JPG" | relative_url }})
</div>
<div class="copy">
Receive individual attention from world-renowned faculty with 4 one-hour private lessons.
</div>
</div>


<div class="image-copy right">
<div class="image rellax" data-rellax-speed="-.7" markdown="1">
![Nagai teaching]({{ site.program-assets-directory | append: "piano/IMG_1398_edited.jpg" | relative_url }})
</div>
<div class="copy">
Daily masterclasses provide a dynamic, interactive learning experience in a supportive environment.
</div>
</div>


<div class="image-copy">
<div class="image rellax" data-rellax-speed="-.3" markdown="1">
![Giles at San Domenico]({{ site.program-assets-directory | append: "piano/giles-san-domenico.jpg" | relative_url }})
</div>
<div class="copy" style="bottom: -7rem;">
Held in an array of intimate settings at historic churches, halls, and landmarks, the Festival hosts daily faculty concerts and the Young Artist Series, the institute recital series for students.
</div>
</div>

<div class="image-copy right">
<div class="image rellax" data-rellax-speed=".3" markdown="1">
![Student performing]({{ site.program-assets-directory | append: "piano/1554040_orig.jpg" | relative_url }})
</div>
</div>

<div class="image-copy">
<div class="image rellax" data-rellax-speed=".5" markdown="1">
![Giles at San Domenico]({{ site.program-assets-directory | append: "piano/art show 2.jpg" | relative_url }})
</div>
<div class="copy" style="bottom: 5rem;">
Opportunities to fully experience the Amalfi Coast with excursions to world-renowned locations, and cultural activities including language, pottery, and cooking classes.
</div>
</div>


</section>

<section id="faculty" markdown="1">

## Learn from world-class faculty

<div id="faculty-list" class="standard-block">
{%- assign all-faculty = page.sessions[0].faculty | concat: page.sessions[1].faculty | uniq | sort -%}
{%- for faculty-name in all-faculty -%}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}
<div><a href="{{ faculty-member.url | relative_url }}"><div><img src="{{ site.faculty-image-directory | append: faculty-member.headshot-filename | relative_url }}" /></div><div class="name">{{ faculty-member.first-name }} {{ faculty-member.last-name }}{% if faculty-member.cn-name and include.show-localization %}<br/>({{ faculty-member.cn-name }}){% endif %}</div><div class="school">{{ faculty-member.school }}</div>
</a></div>
{%- endfor -%}

</div>

</section>

<section id="learn">
<a class="apply" href="{{ apply-page.url | relative_url }}">Learn More and Apply</a>
</section>

