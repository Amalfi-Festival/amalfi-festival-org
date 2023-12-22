---
### This is a complete listing of data available to set the parameters of a program.
### It is unlikely a program will use everything below. Remove any items that are not applicable.
title: text # REQUIRED.
to-be-announced: true # OPTIONAL, |true| or string. If the program is not yet confirmed, set to |true| and the message will say "To be announced", otherwise set a custom message. Remove the line completely once it is. If a program is not supposed to be part of the festival at all, remove it in festival.yaml.
sessions: # REQUIRED. At least one session needs to exist.
    -   session-name: # OPTIONAL.
        session-name-cn: # OPTIONAL.
        dates: # REQUIRED.
            start:
            end:
        faculty: # OPTIONAL.
            -   person-slug
            # ...
        associate-staff: # OPTIONAL.
            -   person-slug
            # ...
    # ...
application: # REQUIRED.
    form-url: URL # REQUIRED.
    guest-form-url: URL # OPTIONAL.
    # The following items may be used to override the festival's application deadlines and fees. They should be rarely used.
    deadline: 2024-01-01 # OPTIONAL. Overrides festival.yaml.
    extended-deadline: 2024-04-01 # OPTIONAL. Overrides festival.yaml.
    registration-fee: 100 # OPTIONAL. Overrides festival.yaml.
    deposit: 100 # OPTIONAL. Overrides festival.yaml.
outings: # OPTIONAL.
    activities: # OPTIONAL.
        -   outing-slug: outing-slug # REQUIRED.
            cost: 0 # OPTIONAL. Overrides the festival's cost for the excursion. If you use 0, the outing will say "included" instead of having a price.
            additional-description: text # OPTIONAL.
            localizations:
                cn:
                    additional-description: text # OPTIONAL.
        # ...
    excursions: # OPTIONAL.
        -   outing-slug: outing-slug # REQUIRED.
            cost: 0 # OPTIONAL. Overrides the festival's cost for the excursion. If you use 0, the outing will say "included" instead of having a price.
            additional-description: text # OPTIONAL.
            localizations:
                cn:
                    additional-description: text # OPTIONAL.
        # ...
tuition: # REQUIRED.
    # For most programs with accommodation options
    meal-plan: 1 # number
    hotel-triple: 1 # number
    hotel-double: 1 # number
    hostel-triple: 1 # number
    hotel-double-upgrade: 1 # number
    hotel-single-upgrade: 1 # number
    # For choral tour
    cost: 1 # number
    name: text # summary name of what the cost is
    description: text # details about the cost
tuition-guests: # OPTIONAL. If this item exists, the program will be listed in the guests page. Make sure that application.guest-form-url also exists (see above).
    # The use of |true| below means to refer to the participants' tuition for the value
    meal-plan: 1 # |true| or number
    hotel-triple: 1 # |true| or number
    hotel-double: 1 # |true| or number
    hotel-double-upgrade: 1 # |true| or number
    hotel-single-upgrade: 1 # |true| or number
cancellation-policy: # OPTIONAL. Override festival's cancellation policy for a specific program. This is unusual to have (mostly for choral program), and most programs rely on the cancellation schedule provided in festival.yaml.
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
        deductible: 1500 # if specified, adds the phrase "up to a deductible of X."
    no-refund:
        # Choose one of the following.
        as-of-date: 2024-05-01 # "As of [date]"
        after-date: 2024-05-01 # "After [date]"
webpage-data:
    menu-title: text
    hero-image: image-file.jpg
    program-header-subtitle: HTML markup # OPTIONAL.
    localizations:
        -   abbreviation: cn # text to display for language
            program: program-slug # slug for the specific program
        # ...
---
{%- include site/program/initialize-program-variables.fx -%}

{% include site/session/session-info.md faculty-type="Instructor" %}

{% capture tuition-description %}
The cost for Tuition & Accommodations is listed as one total fee, which includes six days of writing sessions with class-based excursions, two receptions, and all festival activities.
{% endcapture %}
{% include tuition-accommodations.md description=tuition-description %}

{% include outings-fees.md %}

{% include application-instructions.md %}

{% include fees-deposits.md %}
{% include site/program/cancellations.md %}

