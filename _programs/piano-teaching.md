---
title: Piano Teaching Seminar
to-be-announced: true
sessions:
    -   dates:
            start: 2024-07-10
            end: 2024-07-17
        faculty:
            -   James-Giles
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

## An Immersive Experience with the Art of Piano Teaching

### Topic Lecture

Our world-class professors lead engaging lectures covering a spectrum of topics, from practical methodologies and challenges in piano teaching to stylistic nuances and composers within the piano literature. The experience is personalized to cater to individual needs and interests.

### Seminar & Workshop

Experts conduct workshops on various aspects, including piano technique, ensemble playing (piano duo & duet), and exercise methods, providing valuable insights and hands-on learning opportunities.

### Repertoire Coaching Session

A repertoire collection tailored for competitions and recitals is curated by festival faculties, offering a customized selection. Participants are encouraged to learn 1-2 short pieces in advance from this collection, receiving individual coaching during the Repertoire Seminar for further refinement.

### Roundtable Forum

A unique opportunity to engage in discussions on musical art and teaching experiences with esteemed pedagogues in the enchanting Mediterranean town. Participants also have the chance to receive one-on-one guidance, enhancing their musical journey.

### Concert and Master Class Observation

Teaching Seminar participants have the opportunity to attend Faculty Concerts, Young Artist Series Recitals, Master Classes, and various activities within the Piano Program. This inclusive approach offers a holistic and immersive experience for all involved.
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

## Experience the Best of the Amalfi Coast

{% assign _src = site.program-assets-directory | append: "piano-teaching/maiori.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Maiori

Since ancient Roman times, this tourist attraction boasts the longest coastline along the Amalfi Coast. Explore mountain paths on foot and discover rare volcanic sand and gravel beaches. Maiori serves as our primary venue, hosting the music festival accommodation and the majority of course activities.

### Amalfi's Lemons

Embark on a morning stroll along the world-famous Lemon Tree Path on the Amalfi Coast, and savor a cup of Southern Italy's most mellow espresso with friends.

{% assign _src = site.program-assets-directory | append: "piano-teaching/minori.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Minori

In Minori, a quaint town just a 20-minute walk from Maiori, you'll find Sal De Riso, a dessert shop featured on a CNN documentary. Among its renowned treats is the "Delizia al limone," fondly nicknamed "Venus's Breasts." During each music festival, there's an outdoor concert and dinner in Minori. Some students opt to visit the famed dessert shop, strolling back to Maiori with cake in hand, alongside indulging in Italian handmade ice cream in the refreshing sea breeze.

{% assign _src = site.program-assets-directory | append: "piano-teaching/concerts.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Concerts

The festival features Faculty Concerts and the Young Artist Recital Series, offering almost daily concerts. Our event venues include selected churches and concert halls in various towns, each with unique architectural styles. We aim to provide the audience with a diverse music and artistic experience throughout the festival.

{% assign _src = site.program-assets-directory | append: "piano-teaching/nights.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

### Days & Nights in a Mediterranean Town

The Amalfi Coast observes the Siesta Hour, a unique practice in the Mediterranean region. During the peak of the day at noon, most shops and restaurants close as our piano master class takes place in the air-conditioned hall. Following the lunch break, the Mediterranean town comes alive with vibrant nightlife. After group formal dinners and daily concerts, professors and students often gather to enjoy drinks at a seaside restaurant. If fortunate, you might also catch a spectacular fireworks show in a nearby town by the sea.

### Capri & Ravello Excursions

{% assign _src = site.program-assets-directory | append: "piano-teaching/excursions.jpg" | relative_url -%}
{%- include site/sidebar-image.html src=_src %}

Driving through Mamma Mia while listening to Debussy's piano prelude "The Hill of Anna Capri" creates a captivating experience, transitioning from serenity to exhilaration. Taking the cable car to the summit of Anna Capri, you'll be surrounded by the enchanting color #0476D0, known as Capri Blue.

Beyond its mesmerizing beauty, Capri stands among the world's top ten most expensive resorts. Laden with luxury stores and exclusive five-star hotels, securing a room can be a challenge. In 29 BC, the esteemed Augustus the Great was willing to exchange an island several times to gain access to Capri.

As part of the Seminar, the one-day tour to Capri for participants includes ferry tickets, entry passes, and the guided tour service.

Ravello, renowned as the "City of Music," hosts the Ravello Festival, frequently graced by conductor Muti, at the enchanting Villa Rufolo. Ravello served as an inspiration for Wagner's opera Parsifal and is a musical shrine revered by Liszt.

During the Seminar, the half-day tour to Ravello offers participants a guided tour, ensuring a leisurely and delightful musical exploration.

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes access to the Piano Festival, round-trip to and from Naples airport to Maiori, full hotel accommodation, daily breakfast and dinner, a formal dress party, translation services, and a certificate of completion.
{% endcapture %}
{% include site/program/tuition-accommodations.md description=tuition-description %}

{% include site/program/outings-fees.md %}
{% include application-instructions.md %}
{% include fees-deposits.md %}
{% include site/program/cancellations.md %}
</section>