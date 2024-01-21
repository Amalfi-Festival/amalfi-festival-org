---
title: Writers' Studio
#to-be-announced: true
sessions:
    -   class-name: writing-studio
        dates:
            start: 2024-07-19
            end: 2024-07-25
        faculty:
            - Mary-Hall-Surface
application:
    allow-mail-registration: true
    form-url: https://forms.gle/wiA3j5DWk6XkVAGZ7
outings:
    excursions:
        -   outing-slug: pompeii
    activities:
        -   outing-slug: cooking
tuition:
    meal-plan: 330
    hotel-double: 3100
    hotel-single-upgrade: 430
webpage-data:
    menu-title: Writing
    hero-image: ravello-villa-cimbrone.jpg
---
{%- include site/program/initialize-program-variables.fx -%}

<section class="standard-block" markdown="1">

{% include site/session/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes six days of writing sessions with class-based excursions, two receptions, and all festival activities.
{% endcapture %}
{% include site/program/tuition-accommodations.md description=tuition-description %}

{% include site/program/outings-fees.md %}

{% include application-instructions.md %}

{% include site/program/cancellations.md %}

</section>