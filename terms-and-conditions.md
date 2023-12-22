---
title: Terms & Conditions
custom-css: institute
---

<section id="cancellation-policy" class="standard-block" markdown="1">
{% include cancellation-policy.md %}
{%- assign hide-all = "" -%}
{%- assign show-only = "" -%}
{%- for _program in site.data.institute.programs -%}
    {%- if _program.translation -%}
        {%- continue -%}
    {%- endif -%}
    {%- assign reference-program = site.programs | where: "slug", _program.name | first -%}
    {%- if reference-program.to-be-announced -%}
        {%- continue -%}
    {%- endif -%}

    {%- if hide-all == "" -%}
        {%- assign hide-all = hide-all | append: "." | append: reference-program.slug | append: " > div" -%}
        {%- assign show-only = show-only | append: "." | append: reference-program.slug | append: " #cancellation-" | append: reference-program.slug -%}
    {%- else -%}
        {%- assign hide-all = hide-all | append: ",." | append: reference-program.slug | append: " > div" -%}
        {%- assign show-only = show-only | append: ",." | append: reference-program.slug | append: " #cancellation-" | append: reference-program.slug -%}
    {%- endif %}

<div id="cancellation-{{ reference-program.slug }}" markdown="1">
### {{ reference-program.title | smartify }}

{% include cancellation-table.md %}
</div>
{%- endfor %}
<style>
{{ hide-all }} { display: none; }
{{ show-only }} { display: block; }
</style>
<script>
var _queryProgram = new URLSearchParams(location.search).get("program");
if (_queryProgram) {
    document.getElementById("cancellation-policy").classList.add(_queryProgram);
}
</script>
</section>

<section class="standard-block" markdown="1">

## Miscellaneous Costs Not Included in Festival Fees

- Airline tickets, fees for passports and, if applicable, visas entry/departure
fees
- Personal gratuities
- Laundry and dry cleaning
- Non-specifically-included excursions, liquors, other beverages and meals not mentioned in festival promotional materials or on website under included features
- Travel insurance
- All items of strictly personal nature
 
## Mobility and Fitness to Travel

The right is retained to decline to accept or to retain any person as a
participant or guest at the Festival who, in the opinion of the officers of
the Amalfi Coast Music & Arts Festival (ACM&AF) and Center of Musical
Studies ("partners") is unfit for travel or whose physical or mental
condition may constitute a hazard or cause damage to themselves or to others
during the festival, subjects only to the requirement that the portion of the
total amount paid which corresponds to the unused services and accommodation
be refunded. Passengers requiring special assistance, including without
limitation, those who permanently or periodically use a wheelchair, must be
accompanied by someone who is fit and able to assist them, and who will be
totally responsible for providing all required assistance, at no cost to the
organization (ACM&AF).
 
## Authority to Use Images and Audio Recordings

Upon occasion, ACM&AF and partners obtain, from its staff, or from other
participants, photographic or video images of festival participants and
guests engaged in festival-related activities. By attending and/or
participating in festival programs, you authorize ACM&AF and partners,
without providing compensation to you or obtaining additional approvals from
you, to include photographic and video recordings of you, as well as voice
recordings included with any videos, in ACM&AF  marketing, advertising,
publicity and/or training activities.
 
## Responsibility

ACM&AF and partners do not own or operate any entity which provides goods or
services for the Festival and act only as agents for the independent
suppliers of travel conveyance, transport, accommodations or other services.
All such persons or entities are independent contractors. As a result, ACM&AF
and partners are not liable for any negligence or willful act of any such
person or entity or any third person. In addition and without limitation,
ACM&AF and partners are not responsible for any delays, delayed departure or
arrival, missed carrier connections, loss, death, damage or injury to person
or property or accident, mechanical defect, failure or negligence of any
nature howsoever caused in connection with any accommodations, transportation
or other services or for any substitution of hotels or of common carrier
equipment, with or without notice, or for any additional expenses occasioned
thereby. Dates, program details and costs, although given in good faith and
based on tariffs, exchange rates and other information current at the time of
printing, are subject to change at or before the time of departure.  No
revisions of printed itineraries or schedules or any included features are
anticipated; however, the right is reserved to make any changes, with or
without notice, which might become necessary with the mutual understanding
that any additional expenses will be paid by the individual participant or
guest.  Baggage and personal effects are the sole responsibility of the
owners at all times. If the entire program is canceled for any reason,
participants shall have no claim other than for a full refund. By paying the
deposit and/or fees to attend the Festival, the festival participant or guest
certifies that he/she has no physical, mental or other condition of
disability that would create a hazard for himself/herself or other festival
staff, participants and guests, and accepts the terms of this contract set
out herein and in more specific pre-departure passenger information.
 
For information concerning possible dangers at international destinations,
contact the Travel Advisory Section of the U.S. State Department [(202) 647-5225](tel:(202) 647-5225),
or access the State Department's [online travel advisory service](http://travel.state.gov/travel/travel_1744.html).
For medical information, call the U.S. Centers for Disease Control (CDC)
[(404) 332-4559](tel:(404) 332-4559) or log on to [their website](http://www.cdc.gov/travel).
By embarking upon his/her travel, the traveler voluntarily assumes all risk
involved in such travel---whether expected or unexpected. Festival
participants and/or guests are hereby warned of the above risks as well as
possible travel industry' bankruptcies and medical and climatic disruptions,
and the possibility they may be unable to travel as scheduled because of
personal emergency.  Festival participants and guests are advised to obtain
appropriate insurance coverage against these risks; information is available
on the ACM&AF website.
 
## Disclaimer

ACM&AF and partners are not responsible for changes of flight times, fare
changes, damage, loss of baggage, dishonor of airline, hotel or other
reservations, delays, losses, injuries, inconveniences, cessation of
operations, airline or hotel bankruptcies, accidents, or for the acts of
defaults of any person or entity engaged in conveying participants or in
carrying out other arrangements of the Festival.  ACM&AF and partners reserve
the right to substitute hotels of similar quality. ACM&AF and partners
further reserve the right to decline to accept or to retain any person as a
participant or guest at the Festival should such person's health, actions or
general deportment impede the functioning of the Festival or the right or
welfare of the other participants and/or guests.  No refund will be made for
the unused portion of the Festival or any of its related activities. ACM&AF,
therefore, shall not be responsible for breach of contract, failure to comply
with any state or federal laws, including the Americans with Disabilities
Act (ADA), or any intentional or negligent actions or missions on the part of
any such suppliers or agents, which result in any loss, damage, delay,
inconvenience or injury, to participants, guests, their companions or group
members. ACM&AF and partners shall not be responsible for any injuries,
damages or other losses caused to any festival guest or participant in
connection with terrorist activities, social or labor unrest, mechanical or
construction failures or difficulties, diseases, local laws, climatic
conditions, abnormal conditions or developments, or any other action,
omissions, or conditions outside the ACM&AF and partners' control. Festival
participants and guests assume complete and full responsibility for, and
hereby release ACM&AF from any duty of, checking and verifying any and all
passport, visa, vaccination, or other entry requirements, and all safety and
security conditions of any destinations, during the length of the Festival.

</section>