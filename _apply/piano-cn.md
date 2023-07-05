---
program-name: piano-cn
---
{%- include site/initialize-program-variables.md program=page.program-name -%}

<div class="highlight-box" markdown="1">
<div class="header">Contents</div>
- contents
{:toc}
</div>

## Program details and application

The Amalfi Festival's Piano Program offers 2 sessions, each of which includes:

* Four 1-hour private lessons, with multiple faculty
* An opportunity to participate in one masterclass
* An opportunity to perform in Young Artist Series
* Admission to all festival concerts

During the application process, you may request lessons with the faculty listed below. While there is no guarantee of faculty assignments, we will attempt to accommodate your requests.

{% include site/session-info.md show-localization=true %}

## Tuition & Accommodations

{% assign guests = site.programs | where: "slug", "guests" | first -%}

The cost for tuition and accommodations is listed as one total fee. For guests and auditors, [click here]({{ guests.url | relative_url }}) for more information.

<table>
    <tbody>
        <tr class="border-bottom">
            <td>
                <p class="name">Tuition with Hostel accommodations, triple occupancy</p>
                <p class="description">Triple rooms with shared bathroom.</p>
            </td><td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hostel-triple %}</strong></p></td>
        </tr>
        <tr>
            <td>
                <p class="name">Tuition with Hotel accommodations, triple occupancy</p>
                <p class="description">Triple rooms includes buffet breakfast. <strong>Limited number of triple rooms available.</strong></p>
            </td><td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hotel-triple %}</strong></p></td>
        </tr>
{%- if reference-program.tuition.double-room-upgrade -%}
        <tr class="upgrade">
            <td><p class="name">Hotel upgrade: Double Room</p></td>
            {%- assign price = reference-program.tuition.hotel-triple | plus: reference-program.tuition.double-room-upgrade -%}
            <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=price %}</strong></p></td>
        </tr>
{%- endif -%}
{%- if reference-program.tuition.single-room-upgrade -%}
        <tr class="upgrade">
            <td><p class="name">Hotel upgrade: Single Room</p></td>
            {%- assign price = reference-program.tuition.hotel-triple | plus: reference-program.tuition.single-room-upgrade -%}
            <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=price %}</strong></p></td>
        </tr>
{%- endif -%}
    </tbody>
</table>

The meal plan provides daily dinners. We recommend this option as participants and faculty dine together, including when festival concerts are held in locations outside Maiori.

<table>
<tbody>
    <tr>
        <td>
            <p class="name">Meal plan dinners</p>
            <p class="description">Includes full three-course meal with wine & mineral water</p>
        </td><td class="cost" align="center" valign="top"><p><strong>${{ reference-program.tuition.meal-plan }}</strong></p></td>
    </tr>
</tbody>
</table>

{% include optional-fees-cn.md %}

{% include application-instructions-cn.md %}

### Recording guidelines

* Recordings (audio or video) should contain two works, preferably solo, which demonstrate a contrast of style and character. Individual movements of sonatas and suites are acceptable.
* Recordings must be recent, made no more than six months prior to application.
* Each excerpt or work must be played through without stopping.
* Each work should be uploaded as separate tracks.
* All excerpts and works must be uploaded in the order listed.
* Audition materials must be submitted together with (or after) an application is received in our office.  No audition recordings will be considered without a completed registration from the applicant.

### Submitting recordings

1. Audition recordings may be YouTube links or mp3 files.
1. Label each upload with the name of the excerpt or work. **Do not include your name.**
2. Email recordings to [music@amalfi-festival.org](mailto:music@amalfi-festival.org).



{% include fees-deposits-cancellations.md %}

