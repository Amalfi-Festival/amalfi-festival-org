---
program-name: Writers' Studio
sessions:
    -   class-name: writing-studio
        dates:
            start: 2023-07-19
            end: 2023-07-25
        faculty:
            - Mary-Hall-Surface
application:
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:a21a3441-3b15-49bc-aee2-ca2584bdbe35
tuition:
    meal-plan: 330
    hotel-double: 3100
    hotel-single-upgrade: 430
menu-title: Writing
hero-image: ravello-villa-cimbrone.jpg
---
{%- include site/initialize-program-variables.md program=page -%}

<section class="standard-block" markdown="1">

{% include site/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes six days of writing sessions with class-based excursions, two receptions, and all festival activities.
{% endcapture %}
{% include tuition-accommodations.md description=tuition-description %}

{% include activity-fees.md %}

{% include application-instructions.md %}

{% include fees-deposits-cancellations.md %}

</section>