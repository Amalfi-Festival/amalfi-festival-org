---
title: Piano Teaching Seminar
sessions:
    -   dates:
            start: 2024-07-10
            end: 2024-07-17
        faculty:
            -   Boris-Berman
            -   Bernadene-Blaha
            -   Kevin-Fitz-Gerald
            -   James-Giles
            -   Wei-Lung-Li
            -   Marina-Lomazov
            -   Yoshikazu-Nagai
            -   Joseph-Rackers
application:
    form-url: https://forms.gle/33Zk5TXN2YP4Fb188
outings:
    excursions:
        -   outing-slug: ravello
            cost: 0
        -   outing-slug: capri
            cost: 0
    activities:
        -   outing-slug: language
        -   outing-slug: cooking
tuition:
    hotel-double: 2450
    hotel-single-upgrade: 945
webpage-data:
    menu-title: Piano Teaching
    hero-image: amalfi-cloister.jpg
    program-header-subtitle: "<h3>Yetong Tang, Co-Director<br/>Shichao Zhang, Co-Director</h3>"
---
{%- include site/program/initialize-program-variables.fx -%}

<section class="standard-block" markdown="1">

## A customized course plan in piano teaching

### Topic Lecture

Senior professors of world-class music colleges teach each other affectionately and carry out thematic lectures on "difficult and miscellaneous diseases" in piano teaching; personalized customization meets the all-round needs of piano teachers.

### Seminar (Workshop)

Famous teachers will guide you on the spot and carry out practical exercises on topics such as piano playing skills, double piano and four-handed playing.

### Roundtable Forum - International Big Shots (Roundtable & Discussion)

Discuss music art and teaching experience with masters in a charming Mediterranean town, and have the opportunity to get close guidance and answer questions.

### Concert and master class observation

All master class courses, teachers and student concerts of the Piano Music Festival are observed throughout the whole process.
</section>

<section id="faculty" markdown="1">

## {{ site.data.festival.application.deadline | date: "%Y" }} faculty
{: class="standard-block" id="" }

{% assign all-faculty = reference-program.sessions[0].faculty | sort -%}
<div class="standard-block tiles front-of-brochure">
{%- include site/faculty-tiles.html faculty=all-faculty -%}
</div>
</section>

<section class="standard-block" markdown="1">

## Experience the best of the Amalfi Coast

{% assign _src = site.program-assets-directory | append: "piano-teaching/maiori.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Maiori

Since ancient Roman times, the tourist attraction has the longest coastline on the Amalfi coast. There are mountain paths where you can walk on foot, and rare volcanic sand and gravel beaches. Majori is our main venue, where the accommodation of the music festival and most of the course activities are held.

{% assign _src = site.program-assets-directory | append: "piano-teaching/lemons.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Amalfi's Lemons 🍋

Experience a walk on the world-famous lemon tree path on the Amalfi coast in the morning, and taste a cup of southern Italy's most mellow espresso with friends.

{% assign _src = site.program-assets-directory | append: "piano-teaching/delizia-al-limone.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Minori

In Minori, a small town only a 20-minute walk from Maiori, there is a dessert shop Sal De Riso that has appeared on a CNN documentary, one of the most famous of which is Delizia al limone, nicknamed "Venus's Breasts". Each music festival will have an outdoor concert and dinner at Minori, and some students will choose to visit the store here. Holding a cake, holding an Italian handmade ice cream, and walking back to Maiori in the sea breeze.

{% assign _src = site.program-assets-directory | append: "piano-teaching/concerts.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Concerts

The concerts of the festival are divided into Faculty Concert and Young Artist Recital Series. There is a concert almost every day during the festival. Our event venue has selected churches and concert halls with different architectural styles in different towns, and strives to create a diversified music and artistic experience for the audience.

{% assign _src = site.program-assets-directory | append: "piano-teaching/fireworks.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Day & Night in a Mediterranean Town

The Amalfi Coast follows the Siesta Hour, which is unique to the Mediterranean region. Most shops and restaurants will close at the peak of the day at noon, when our piano master class will be held in the air-conditioned hall. After the lunch break, the nightlife in the Mediterranean town is wonderful. After a group formal dinner and daily concerts, professors and students often choose to drink in a small restaurant by the sea. If you are lucky, you can also watch a wonderful fireworks show in a nearby town at the seaside.

### Capri & Ravello Travels

{% assign _src = site.program-assets-directory | append: "piano-teaching/capri.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

Listening to Debussy's piano prelude "The Hill of Anna Capri", I drove through Mamma Mia in the local population! ( All the way to horror), then take the cable car to the top of Anna Capri and immerse yourself in the color #0476D0 Capri blue.

In addition to the exciting beauty, Capri is one of the top ten most expensive resorts in the world. The island is full of luxury stores and five-star hotels that are hard to find a room. In 29 BC, in order to get Capri, Augustus the Great was willing to use an island with several times the land area in exchange.

The one-day tour of Capri for members of Art Week includes ferry tickets, tickets, and tour guide services.

{% assign _src = site.program-assets-directory | append: "piano-teaching/ravello.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

Ravello is known as the "City of Music", and the Ravello Festival, which is often attended by the conductor Muti, is held at Villa Rufolo. Lavillo is one of the inspirations for Wagner's opera Parsifal and a musical shrine walked by Liszt.

The half-day tour of Lavello at Art Week arranged a special car and guide for the members to enjoy a relaxing and pleasant music tour.

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes access to the Piano Festival, round-trip to and from Naples airport to Maiori, full hotel accommodation, daily breakfast and dinner, a formal dress party, translation services, and a certificate of completion.
{% endcapture %}
{% include site/program/tuition-accommodations.md description=tuition-description %}

{% include site/program/outings-fees.md %}
{% include application-instructions.md %}
{% include fees-deposits.md %}
{% include site/program/cancellations.md %}
</section>