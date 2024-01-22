---
title: Visual Arts Program
to-be-announced: true
sessions:
    -   session-name: Painting
        class-name: exploring-watercolor
        dates:
            start: 2024-07-08
            end: 2024-07-17
        faculty:
            - David-Daniels
application:
    allow-mail-registration: true
    form-url: https://forms.gle/aYdqoqpffnM7gxR19
    guest-form-url: https://forms.gle/eXFQow9k8NtbAdga8
outings:
    excursions:
        -   outing-slug: pompeii
        -   outing-slug: capri
    activities:
        -   outing-slug: cooking
tuition:
    meal-plan: 540
    hotel-double: 3245
    hotel-single-upgrade: 749
tuition-guests:
    meal-plan: true
    hotel-double: 3195
    hotel-single-upgrade: true
webpage-data:
    menu-title: Visual Arts
    hero-image: capri.jpg
---
{%- include site/program/initialize-program-variables.fx -%}

<section class="standard-block" markdown="1">

A legendary retreat for artists, poets, and composers seeking inspiration in its sublime beauty, the Amalfi Coast is a natural setting to explore the visual arts.

For centuries, the sweeping coastlines and rocky cliffs have drawn painters eager to capture the breathtaking landscapes. Ceramics artists have also flocked here to experience the centuries-old tradition of majolica ceramics still flourishing in many
of the towns along the coast.

At the Amalfi Coast Music & Arts Festival, students are encouraged to explore the artistic traditions of the area while embarking on an intensive course of study.

The Visual Arts Program is designed to take advantage of the cultural riches in the area. Students will be able to tour an array of museums and architectural treasures, such as the Naples Archaeology Museum, the magnificently preserved Greek temples in Paestum, and the haunting ruins of Pompeii. Instructors will bring perspectives gained back into the classroom. Students may also be invited to visit local studios and meet Italian artists to exchange ideas and share techniques. An exhibit of student work is held at the end of each session.

{% if page.sessions.size > 1 %}
## Sessions
{% endif %}

{% include site/session/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for tuition & accommodations is listed as one total fee, which includes tuition for class of your choice, hotel accommodations, art-related excursions at instructor’s discretion, daily concerts, and group transportation to and from Naples airport (on arrival and departure day at designated times).
{% endcapture %}
{% include site/program/tuition-accommodations.md description=tuition-description %}

{% include site/program/outings-fees.md %}

{% include application-instructions.md %}

{% include site/program/cancellations.md %}

</section>