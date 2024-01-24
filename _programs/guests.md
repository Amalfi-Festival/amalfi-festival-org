---
title: Guests & Auditors
custom-css: guests
webpage-data:
    menu-title: Guests
    hero-image: home.jpg
    meta-description: "Friends and family members of Institute participants are invited to visit the festival as part of our Guest Program. Guests will enjoy a rich, cultural experience and unique back-stage perspective as they explore the area while sampling the festival’s diverse musical offerings, lectures and workshops."
---
{%- assign is-guests-page = true -%}

{%- assign programs-with-guests = site.empty-array -%}
{%- for _p in site.data.festival.programs -%}
    {%- assign program = site.programs | where: "slug", _p.program-slug | first -%}
    {%- if program.to-be-announced -%}
        {%- continue -%}
    {%- endif -%}
    {%- assign program-guest = program.tuition-guests -%}
    {%- assign can-have-guests = false -%}
    {%- unless program-guest -%}
        {%- for session in program.sessions -%}
            {%- if session.guests -%}
                {%- assign can-have-guests = true -%}
                {%- break -%}
            {%- endif -%}
        {%- endfor -%}
        {%- unless can-have-guests -%}
            {%- continue -%}
        {%- endunless -%}
    {%- endunless %}
    {%- assign programs-with-guests = programs-with-guests | push: program -%}
{%- endfor -%}

<section class="standard-block" markdown="1">

Tour fascinating locales, sit in on rehearsal and enjoy concerts under the stars. Expand your culinary vistas, experiment with clay or capture fabulous landscapes in paint. Visit the enchanting coastal towns of Amalfi and Positano, discover the stunning vistas of Ravello and the sparkling beaches of Capri and explore the haunting ruins of Pompeii.

## Soak up the magical atmosphere!

Friends and family members of Institute participants are invited to visit the festival as part of our Guest Program.  Guests will enjoy a rich, cultural experience and unique back-stage perspective as they explore the area while sampling the diverse musical offerings, lectures and workshops that take place around the clock.

Activities include workshops in ceramics and painting plus Italian language and Mediterranean cooking lessons. Guests may also sign up for an array of excursions to world-renowned destinations such as Pompeii, Naples, Capri. Guests will also join performing artists to travel to concerts in towns such as Amalfi, Ravello, Maiori, and other scenic locations. Other possible side trips may include a boat trip to Positano, the Greek temples at Paestum, and the 12th century Benedictine abbey of Cava de' Tirreni.

## Guests

Guests are invited to daily performances and are welcome to sit in on master classes and other presentations to see teachers and students at work or to observe a rehearsal session.

Guests will enjoy eating and socializing with the musicians and attending pre-concert lectures and post-concert receptions…not to mention indulging in gelato or sipping limoncello with the performers on a terrace late into the night!


## Accommodations

Guest Program fees includes access to all festival activities for the full session.

{% for program in programs-with-guests -%}
{%- capture details_summary -%}
<h3>{{ program.title }}</h3>
{%- endcapture -%}

{%- capture details_content -%}
<table>
<tbody>

{%- if program.tuition-guests.intro -%}
<tr><td colspan="2"><p>{{ program.tuition-guests.intro | smartify }}</p></td></tr>
{%- endif %}

{% comment %}This next section is taken from tuition-accommodations.md{% endcomment %}


{%- include site/program/has-tuition-item.fx tuition-item-name="cost" program=program -%}
{%- assign _has-cost = __return %}

{%- if _has-cost -%}
    {%- include site/program/tuition-item.html item-name="cost" has-tuition-item=_has-cost program=program use-guest-tuition=true -%}
{%- else -%}
    {%- include site/program/has-tuition-item.fx tuition-item-name="hotel-triple" program=program -%}
    {%- assign _has-hotel-triple = __return %}
    {%- include site/program/has-tuition-item.fx tuition-item-name="hotel-double" program=program -%}
    {%- assign _has-hotel-double = __return %}

    {%- if _has-hotel-triple -%}
        {%- include site/program/tuition-item.html item-name="hotel-triple" has-tuition-item=_has-hotel-triple program=program use-guest-tuition=true -%}
    {%- elsif _has-hotel-double -%}
        {%- include site/program/tuition-item.html item-name="hotel-double" has-tuition-item=_has-hotel-double program=program use-guest-tuition=true -%}
    {%- endif -%}

    {%- if program.tuition-guests.hotel-double-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">{{ site.data.accommodations.hotel-double-upgrade.name }}</p></td>
        {%- assign _c = program.tuition-guests.hotel-double-upgrade -%}
        {%- if _c == true -%}
            {%- assign _c = program.tuition.hotel-double-upgrade -%}
        {%- endif -%}
        <td class="cost" align="center" valign="top"><p><strong>+ ${% include utilities/number-delimited.html number=_c %}</strong></p></td>
    </tr>
    {%- endif -%}
    {%- if program.tuition-guests.hotel-single-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">{{ site.data.accommodations.hotel-single-upgrade.name }}</p></td>
        {%- assign _c = program.tuition-guests.hotel-single-upgrade -%}
        {%- if _c == true -%}
            {%- assign _c = program.tuition.hotel-single-upgrade -%}
        {%- endif -%}
        <td class="cost" align="center" valign="top"><p><strong>+ ${% include utilities/number-delimited.html number=_c %}</strong></p></td>
    </tr>
    {%- endif -%}
{%- endif -%}

{%- if program.tuition-guests.meal-plan -%}
<tr class="base">
    <td>
        <p class="name">{{ site.data.accommodations.meal-plan.name }}</p>
        <p class="description">{% include utilities/markdownify-without-p.html text=site.data.accommodations.meal-plan.description %}</p>
    </td>
    {%- assign _c = program.tuition-guests.meal-plan -%}
    {%- if _c == true -%}
        {%- assign _c = program.tuition.meal-plan -%}
    {%- endif -%}
    <td class="cost" align="center" valign="top"><p><strong>+ ${% include utilities/number-delimited.html number=_c %}</strong></p></td>
</tr>
{%- endif -%}

{%- include site/program/get-apply-url.fx program=program hash="excursions--activities" -%}
{%- assign _apply-url = __return -%}
<tr class="base"><td colspan="2"><p><a href="{{ _apply-url }}">Fees for available excursions and activities</a></p><p><a href="{{ program.url | relative_url }}">Learn more about the {{ program.title }}</a></p>
</td></tr>
</tbody>
</table>
{%- endcapture -%}

{% include site/details.html summary=details_summary details=details_content %}
{%- endfor %}

{%- assign application-deadline = site.data.festival.application.deadline -%}
{%- assign application-extended-deadline = site.data.festival.application.extended-deadline -%}
{%- assign application-registration-fee = site.data.festival.application.registration-fee -%}
{%- assign application-deposit = site.data.festival.application.deposit -%}
{% include application-instructions.md %}

{% include cancellation-policy.md hide-table-intro-paragraph=true %}

Please refer to the program page for its cancellation policy:

{%- for _p in programs-with-guests -%}
{%- include site/program/get-apply-url.fx program=_p hash="cancellation-policy-refunds" %}
* <a href="{{ __return }}">{{ _p.title }}</a>
{% endfor -%}

</section>