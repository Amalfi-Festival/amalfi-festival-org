---
program-name: piano
---
{%- include site/initialize-program-variables.md program=page.program-name -%}

1. contents
{:toc}

## Program details and application

You will receive:

* Four 1-hour private lessons, with multiple faculty
* One masterclass
* An opportunity to perform in Young Artist Series

During the application process, you may request lessons with the faculty listed below. While there is no guarantee of faculty assignments, we will attempt to accommodate everyone's request.

{% include site/session-info.md show-localization=false %}

## Tuition & Accommodations

The cost for Tuition & Accommodations is listed as one total fee, which includes private lessons, masterclasses, workshops, all concerts, plus accommodations for 12 nights:

<table>
    <tbody>
        <tr>
            <td>
                <p class="name">Tuition with Hotel accommodations</p>
                <p class="description">Triple occupancy. Includes buffet breakfast. <strong>Limited number of triple rooms available.</strong> For double and single rooms, see below.</p>
            </td><td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hotel-triple %}</strong></p></td>
        </tr>
        <tr>
            <td>
                <p class="name">Tuition with Hostel accommodations</p>
                <p class="description">Triple rooms with shared bathroom.</p>
            </td><td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hostel-triple %}</strong></p></td>
        </tr>
    </tbody>
</table>

{% assign guests = site.programs | where: "slug", "guests" | first %}
For more information for guests, [click here]({{ guests.url | relative_url }}).

{% include optional-fees.md %}

{% include application-instructions.md %}

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

