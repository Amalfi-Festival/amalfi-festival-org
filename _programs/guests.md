---
title: Guests & Auditors
sessions:
    -   dates:
            start: 2023-07-05
            end: 2023-07-30
application:
    allow-mail-registration: true
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
menu-title: Guests
custom-css: guests
---

<section class="standard-block" markdown="1">

Tour fascinating locales, sit in on rehearsal and enjoy concerts under the stars. Expand your culinary vistas, experiment with clay or capture fabulous landscapes in paint. Visit the enchanting coastal towns of Amalfi and Positano, discover the stunning vistas of Ravello and the sparkling beaches of Capri and explore the haunting ruins of Pompeii.

## Soak up the magical atmosphere!

Friends and family members of Institute participants are invited to visit the festival as part of our Guest Program.  Guests will enjoy a rich, cultural experience and unique back-stage perspective as they explore the area while sampling the diverse musical offerings, lectures and workshops that take place around the clock.

Activities include workshops in ceramics and painting plus Italian language and Mediterranean cooking lessons. Guests may also sign up for an array of excursions to world-renowned destinations such as Pompeii, Naples, Capri. Guests will also join performing artists to travel to concerts in towns such as Amalfi, Ravello, Maiori, and other scenic locations. Other possible side trips may include a boat trip to Positano, the Greek temples at Paestum, and the 12th century Benedictine abbey of Cava de' Tirreni.

## Guests

Guests are invited to daily performances and are welcome to sit in on master classes and other presentations to see teachers and students at work or to observe a rehearsal session.

Guests will enjoy eating and socializing with the musicians and attending pre-concert lectures and post-concert receptions…not to mention indulging in gelato or sipping limoncello with the performers on a terrace late into the night!


## Accommodations

Guest Program fees includes access all festival activities for the full session.

{% for program-entry in site.data.institute.programs -%}
    {%- if program-entry.translation -%}
        {%- continue -%}
    {%- endif -%}
    {%- assign program = site.programs | where: "slug", program-entry.name | first -%}
    {%- assign program-guest = program.tuition.guests -%}
    {%- assign can-have-guests = false -%}
    {%- unless program-guest -%}
        {%- for session in program.sessions -%}
            {%- if session.guests -%}
                {%- assign can-have-guests = true -%}
                {%- break -%}
            {%- endif -%}
        {%- endfor -%}
    {%- endunless %}
    {%- unless program-guest or can-have-guests -%}
        {%- continue -%}
    {%- endunless -%}

{%- capture details_summary -%}
<h3>{{ program.title }}</h3>
{%- endcapture -%}

{%- capture details_content -%}
<ul>
    {%- for session in program.sessions -%}
    <li>{{ session.session-name }} ({% include utilities/date-range.html dates=session.dates %})
        <ul>
            <li>{{ session.guests.hotel-description }}: <strong>${% include utilities/number-delimited.html number=session.guests.hotel-fee %}</strong></li>
            <li><a href="{{ session.guests.form-url }}">Online application form</a></li>
        </ul>
    </li>
    {%- endfor -%}
    <li><a href="{{ program.url | relative_url }}#excursions-and-activities">Fees for additional options</a></li>
</ul>
{%- endcapture -%}
{% include site/details.html summary=details_summary details=details_content %}
{%- endfor %}

{% include application-instructions.md application=page.application %}

{% include fees-deposits-cancellations.md %}

</section>