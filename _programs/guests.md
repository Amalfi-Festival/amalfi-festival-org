---
program-name: Program For Guests & Auditors
sessions:
    -   dates:
            start: 2023-07-05
            end: 2023-07-30
application:
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
menu-title: Guests
---

Tour fascinating locales, sit in on rehearsal and enjoy concerts under the stars. Expand your culinary vistas, experiment with clay or capture fabulous landscapes in paint. Visit the enchanting coastal towns of Amalfi and Positano, discover the stunning vistas of Ravello and the sparkling beaches of Capri and explore the haunting ruins of Pompeii.

## Soak up the magical atmosphere!

Friends and family members of Institute participants are invited to visit the festival as part of our Guest Program.  Guests will enjoy a rich, cultural experience and unique back-stage perspective as they explore the area while sampling the diverse musical offerings, lectures and workshops that take place around the clock.

Activities include workshops in ceramics and painting plus Italian language and Mediterranean cooking lessons. Guests may also sign up for an array of excursions to world-renowned destinations such as Pompeii, Naples, Capri. Guests will also join performing artists to travel to concerts in towns such as Amalfi, Ravello, Maiori, and other scenic locations. Other possible side trips may include a boat trip to Positano, the Greek temples at Paestum, and the 12th century Benedictine abbey of Cava de' Tirreni.

## Guests

Guests are invited to daily performances and are welcome to sit in on master classes and other presentations to see teachers and students at work or to observe a rehearsal session.

Guests will enjoy eating and socializing with the musicians and attending pre-concert lectures and post-concert receptions…not to mention indulging in gelato or sipping limoncello with the performers on a terrace late into the night!


{% include application-instructions.md application=page.application %}


## Accommodations

Guest Program fees includes access all festival activities for the full session.

{%- for program-entry in site.data.institute.programs -%}
    {%- if program-entry.translation -%}
        {%- continue -%}
    {%- endif -%}
    {%- assign program = site.programs | where: "slug", program-entry.name | first -%}
    {%- assign guest-sessions = site.empty-array -%}
    {%- for session in program.sessions -%}
        {%- if session.guests -%}
            {%- assign guest-sessions = guest-sessions | push: session -%}
        {%- endif -%}
    {%- endfor -%}
    {%- unless guest-sessions[0] -%}
        {%- continue -%}
    {%- endunless %}
<h3>{{ program.program-name }}</h3>
<ul>
    {%- for session in guest-sessions -%}
    <li>{{ session.session-name }} ({% include site/date-range.html dates=session.dates %})
        <ul>
            <li>{{ session.guests.hotel-description }}: <strong>${% include site/number-delimited.html number=session.guests.hotel-fee %}</strong></li>
            <li><a href="{{ session.guests.form-url }}">Online application form</a></li>
        </ul>
    </li>
    {%- endfor -%}
    <li><a href="{{ program.url | relative_url }}#options-for-meal-plan-excursions-cooking--language-classes">Fees for additional options</a></li>
</ul>
{%- endfor -%}

{% include fees-deposits-cancellations.md %}