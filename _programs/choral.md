---
title: Choral Tour
sessions:
    -   class-name: choral-tour
        dates:
            start: 2024-06-29
            end: 2024-07-05
        faculty:
            - Anthony-Blake-Clark
            - Stan-Engebretson
application:
    deadline: 2024-01-31
    registration-fee: 45
    deposit: 500
    form-url: https://forms.gle/Qe7tx2BsDdbZDgd6A
    guest-form-url: https://forms.gle/Qe7tx2BsDdbZDgd6A
outings:
    excursions:
        -   outing-slug: ravello
            cost: 0
        -   outing-slug: pompeii
            cost: 0
    activities:
        -   outing-slug: cooking
tuition:
    cost: 2195
    name: Cost (not including airfare)
    description: Balance due will be made in two payments of $975. Invoices will be sent to trip participants with the deadline for those amounts.
tuition-guests:
    intro: Guests of the choral tour will enjoy the same special trips and group activities and attend concerts on the other side of the podium. The cost and registration fees are the same for participants and guests. The registration form has a section for guests to apply.
    cost: true
    name: true
    description: true
cancellation-policy:
    trip-insurance-required: true
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
    no-refund:
        after-date: 2024-05-01
webpage-data:
    menu-title: Choral
    hero-image: Conductor with chorus.jpg
    hero-image-position: 65% 73%
---
{%- include site/program/initialize-program-variables.fx -%}

<section class="standard-block" markdown="1">

{% include site/session/session-info.md faculty-type="" %}

{% capture tuition-description %}
The cost is listed as one total fee, which includes:

- Accommodation in gracious festival hotels in heart of Maiori.
- Meals:  All breakfasts  (buffet) and 5 dinners (classic 3-course Italian dinners with wine and mineral water included).
- Excursions with guide to Pompeii and Ravello.
- Bilingual tour assistant and experienced festival personnel to assure every detail goes smoothly.

Friends and family members are welcome to join the tour as guests. They will enjoy the same special trips and group activities and attend concerts on the other side of the podium. The registration form has a section for guests to apply. The cost is the same for participants and guests.
{% endcapture %}
{% include site/program/tuition-accommodations.md title="What's Included" description=tuition-description %}

{% include site/program/outings-fees.md %}

{% include application-instructions.md %}

{% include fees-deposits.md %}
{% include site/program/cancellations.md %}

</section>
