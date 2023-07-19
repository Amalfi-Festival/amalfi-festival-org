---
title: Visual Arts Program
sessions:
    -   session-name: Painting
        class-name: exploring-watercolor
        dates:
            start: 2023-07-08
            end: 2023-07-17
        faculty:
            - David-Daniels
    -   session-name: Multimedia
        class-name: mapping-the-amalfi-coast
        dates:
            start: 2023-07-18
            end: 2023-07-27
        faculty:
            - Robert-Devers
        tuition:
            lab-fee: 145
    -   session-name: Mixed Media
        class-name: artists-sketchbook
        dates:
            start: 2023-07-18
            end: 2023-07-25
        faculty:
            - Rebecca-Cross
        tuition:
            hotel-double: 2885
            lab-fee: 145
application:
    allow-mail-registration: true
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:aed9e956-ee8b-4408-b23d-cf4ca992e5f7
    guest-form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:9464b5c4-5b72-4d58-8ad3-dce49b354f56
tuition:
    meal-plan: 540
    hotel-double: 3245
    hotel-single-upgrade: 749
    guests:
        hotel-double: 3195
menu-title: Visual Arts
hero-image: capri.jpg
header-blend-mode: normal
---
{%- include site/program/initialize-program-variables.fx program=page -%}

<section class="standard-block" markdown="1">

A legendary retreat for artists, poets, and composers seeking inspiration in its sublime beauty, the Amalfi Coast is a natural setting to explore the visual arts.

For centuries, the sweeping coastlines and rocky cliffs have drawn painters eager to capture the breathtaking landscapes. Ceramics artists have also flocked here to experience the centuries-old tradition of majolica ceramics still flourishing in many
of the towns along the coast.

At the Amalfi Coast Music & Arts Festival, students are encouraged to explore the artistic traditions of the area while embarking on an intensive course of study.

The Visual Arts Program is designed to take advantage of the cultural riches in the area. Students will be able to tour an array of museums and architectural treasures, such as the Naples Archaeology Museum, the magnificently preserved Greek temples in Paestum, and the haunting ruins of Pompeii. Instructors will bring perspectives gained back into the classroom. Students may also be invited to visit local studios and meet Italian artists to exchange ideas and share techniques. An exhibit of student work is held at the end of each session.

## Sessions

{% include site/session/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for tuition & accommodations is listed as one total fee, which includes tuition for class of your choice, hotel accommodations, art-related excursions at instructor’s discretion, daily concerts, and group transportation to and from Naples airport (on arrival and departure day at designated times).
{% endcapture %}
{% include tuition-accommodations.md description=tuition-description %}

{% include activity-fees.md %}

{% include application-instructions.md %}

{% include fees-deposits-cancellations.md %}

</section>