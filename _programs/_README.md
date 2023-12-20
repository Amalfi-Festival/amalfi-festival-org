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
    deadline: # OPTIONAL. Overrides _institute.yaml.
    extended-deadline: # OPTIONAL. Overrides _institute.yaml.
    registration-fee: # OPTIONAL. Overrides _institute.yaml.
    deposit: # OPTIONAL. Overrides _institute.yaml.
tuition:
    # For most programs with accommodation options
    meal-plan: # cost
    hotel-triple: # cost
    hotel-double: # cost
    hostel-triple: # cost
    hotel-double-upgrade: # cost
    hotel-single-upgrade: # cost
    # For choral tour
    cost: # cost
    name: # summary name of what the cost is
    description: # details about the cost
tuition-guests:
    # The use of |true| means to refer to the participants' tuition for the value
    meal-plan: # |true| or cost
    hotel-triple: # |true| or cost
    hotel-double: # |true| or cost
    hotel-double-upgrade: # |true| or cost
    hotel-single-upgrade: # |true| or cost
cancellation-policy:
    # Optional override of cancellation policy for a specific program. This is unusual to have (mostly for choral program), and most programs rely on the cancellation schedule provided in _institute.yaml.
    full-refund:
        before-date: 2024-02-15
    processing-fee:
        as-of-date: 2024-03-15
        amount: 50
    withdrawal-fee:
        as-of-date: 2024-04-15
        amount: 100
    forfeit:
        as-of-date: 2024-05-01
        deductible: # if specified, adds the phrase "up to a deductible of X."
    no-refund:
        # Choose one of the following.
        as-of-date: # "As of [date]"
        after-date: # "After [date]"
webpage-data:
    menu-title:
    hero-image:
    program-header-subtitle: # HTML
    localizations:
        -   abbreviation: # text to display for language
            program: # slug for the specific program
        # ...
---
{%- include site/program/initialize-program-variables.fx -%}

{% include site/session/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes six days of writing sessions with class-based excursions, two receptions, and all festival activities.
{% endcapture %}
{% include tuition-accommodations.md description=tuition-description %}

{% include activity-fees.md %}

{% include application-instructions.md %}

{% include fees-deposits.md %}
{% include cancellations.md %}

