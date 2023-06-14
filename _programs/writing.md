---
program-name: Writers' Studio
sessions:
    -   dates:
            start: 2023-07-19
            end: 2023-07-25
        faculty:
            - Mary-Hall-Surface
tuition:
    meal-plan: 330
    hotel-double: 3100
    single-room-upgrade: 430
menu-title: Writing
---

{% for session in page.sessions %}

## {% if session.session-name %}{{ session.session-name }}: {% endif %}{% include utilities/date-range.html dates=session.dates %}

{% assign faculty = session.faculty -%}
<div class="tiles">
{%- for faculty-member-name in faculty %}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-member-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}
<a href="{{ faculty-member.url | relative_url }}"><img src="{{ site.faculty-image-directory | append: faculty-member.headshot-filename | relative_url }}" /> <div class="name">{{ faculty-member.first-name }} {{ faculty-member.last-name }}</div> <div class="school">{{ faculty-member.school }}</div>
</a>
{%- endfor -%}
</div>
{%- endfor -%}


The Writing Program invites participants to find inspiration in the landscape and character of a region known for attracting generations of writers and artists.  Participants will reflect on a range of writings by authors such as John Steinbeck and Virginia Woolf and paintings by artists like John Singer Sargent and M.C. Escher that capture the singular beauty and history of Amalfi, Ravello, Positano and more.
The key themes and perspectives of these writings and art works will offer vivid prompts crafted by the instructor for the participants' own creative and reflective writing.  Participants will tour many of the places that inspired writers and artists of the past, writing in gardens, lemon tree groves and cafes as they respond to the landscape, architecture and art that surrounds them.  An informal reading for course participants and guests will conclude the session.

{% include application-instructions.md %}

## Tuition & Accommodations

The cost for Tuition & Accommodations is listed as one total fee, which includes six days of writing sessions with class-based excursions, two receptions, and all festival activities.

* Hotel accommodations (double occupancy) & buffet breakfast: **${% include utilities/number-delimited.html number=page.tuition.hotel-double %}**\
    For single rooms, see below.

{% include optional-fees.md tuition=page.tuition %}

{% include fees-deposits-cancellations.md %}