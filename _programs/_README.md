---
title:
sessions:
    -   session-name:
        session-name-cn:
        dates:
            start:
            end:
        faculty:
            -   Faculty-1
            -   Faculty-2
        associate-staff:
            -   Staff-1
            -   Staff-2
    # ...
application:
    form-url:
    guest-form-url:
tuition:
    meal-plan: # cost
    hotel-triple: # cost
    hostel-triple: # cost
    hotel-double-upgrade: # cost
    hotel-single-upgrade: # cost
tuition-guests:
    # The use of |true| means to refer to the participants' tuition for the value
    meal-plan: # |true| or cost
    hotel-triple: # |true| or cost
    hotel-double-upgrade: # |true| or cost
    hotel-single-upgrade: # |true| or cost
webpage-data:
    menu-title:
    hero-image:
    program-header-subtitle: # HTML
    localizations:
        -   abbreviation: # text to display for language
            program: # slug for the specific program
        # ...
---
{%- include site/program/initialize-program-variables.fx program=page -%}

{% include site/session/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes six days of writing sessions with class-based excursions, two receptions, and all festival activities.
{% endcapture %}
{% include tuition-accommodations.md description=tuition-description %}

{% include activity-fees.md %}

{% include application-instructions.md %}

{% include fees-deposits.md %}
{% include cancellations.md %}

