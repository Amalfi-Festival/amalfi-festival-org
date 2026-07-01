---
title: Choral Week 
title-zh: 合唱之旅
applications-closed: false
sessions:
    -   class-name: choral-week
        dates:
            start: 2027-06-27
            end: 2027-07-03
        faculty:
            - Anthony-Blake-Clark
            - Brett-Karlin
application:
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
    cost: 2630
    name: Cost (not including airfare)
    description: Balance due will be made in two installments. Invoices will be sent to trip participants with the deadline for those amounts.
    hotel-single-upgrade: 500
    hotel-superior-upgrade: 500
tuition-guests:
    intro: Guests of the choral tour will enjoy the same special trips and group activities and attend concerts on the other side of the podium. The cost and registration fees are the same for participants and guests. The registration form has a section for guests to apply.
    cost: true
    name: true
    description: true
webpage-data:
    menu-title: Choral
    menu-title-zh: 合唱之旅
    hero-image: chorus-performance.jpg
    hero-image-position: 0% 50%
    meta-description: "The Choral Tour is an unforgettable singing-vacation in Maiori, Italy! This unique experience includes performing the classics of choral repertoire at historic cloisters and cathedrals on the Amalfi Coast."
---
{%- include site/program/initialize-program-variables.fx -%}

<section class="standard-block" markdown="1">

{% include site/session/session-info.md faculty-type="Co-Artistic Directors" %}

{% capture tuition-description %}
The cost is listed as one total fee, which includes:

- Accommodation in modern hotel overlooking the sea in Salerno, the Gateway to the Amalfi Coast.
- Meals:  All breakfasts  (buffet) and 5 dinners (classic 3-course Italian dinners with wine and mineral water included).
- Excursions with guide to Pompeii and Ravello.
- Bilingual tour assistant and experienced festival personnel to assure every detail goes smoothly.

Friends and family members are welcome to join the tour as guests. They will enjoy the same special trips and group activities and attend concerts on the other side of the podium. The registration form has a section for guests to apply. The cost is the same for participants and guests.
{% endcapture %}
{% include site/program/tuition-accommodations.md title="What's Included" description=tuition-description %}

{% include site/program/outings-fees.md %}

{% include application-instructions.md %}

{% include site/program/cancellations.md %}

</section>
