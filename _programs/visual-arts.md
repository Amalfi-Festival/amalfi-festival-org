---
program-name: Visual Arts Program
sessions:
    -   session-name: Session I
        dates:
            start: 2023-07-08
            end: 2023-07-17
        faculty:
            - David-Daniels
        guests:
            hotel-description: Hotel accommodations (double occupancy) & buffet breakfast
            hotel-fee: 3195
            form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:9464b5c4-5b72-4d58-8ad3-dce49b354f56
    -   session-name: Session II
        dates:
            start: 2023-07-18
            end: 2023-07-27
application:
    deadline: 2023-04-15
    extended-deadline: 2023-04-23
    registration-fee: 45
    deposit: 350
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c7610bfe-617b-4482-8a7f-b09513d1c287
    payment-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c76
tuition:
    meal-plan: 540
    single-room-upgrade: 749
    hotel-double: 3495
    guests:
        hotel-double: 3195
menu-title: Visual Arts
---

## We look forward to welcoming you in Summer 2023!

A legendary retreat for artists, poets, and composers seeking inspiration in its sublime beauty, the Amalfi Coast is a natural setting to explore the visual arts.

For centuries, the sweeping coastlines and rocky cliffs have drawn painters eager to capture the breathtaking landscapes. Ceramics artists have also flocked here to experience the centuries-old tradition of majolica ceramics still flourishing in many
of the towns along the coast.

At the Amalfi Coast Music & Arts Festival, students are encouraged to explore the artistic traditions of the area while embarking on an intensive course of study.

The Visual Arts Program is designed to take advantage of the cultural riches in the area. Students will be able to tour an array of museums and architectural treasures, such as the Naples Archaeology Museum, the magnificently preserved Greek temples in Paestum, and the haunting ruins of Pompeii. Instructors will bring perspectives gained back into the classroom. Students may also be invited to visit local studios and meet Italian artists to exchange ideas and share techniques. An exhibit of student work is held at the end of each session.

## Visual Arts Classes offered in 2023

Exploring Watercolor
         David Daniels, Washington, D.C.

Sketchbook
         Rebecca Cross, Washington, D.C.

Mixed Media - Mapping the Amalfi Coast: Tile Painting & Artist Books
         Robert J. Devers, Washington, D.C.

Photography: Finding Your Vision

See course descriptions here.
See faculty artwork  here.

{% include application-instructions.md %}

## Tuition & Accommodations

The cost for Tuition & Accommodations is listed as one total fee, which includes tuition for class of your choice, hotel accommodations (double occupancy), art-related excursions at instructor's discretion, daily concerts, and group transportation to and from Naples airport (on arrival and departure day at designated times).

* Hotel accommodations (double occupancy) & buffet breakfast: **${% include utilities/number-delimited.html number=page.tuition.hotel-double %}**\
    For single rooms, see below.
* Lab fee for in-studio art classes: **$145**

{% assign guests = site.programs | where: "slug", "guests" | first %}
For more information for guests, [click here]({{ guests.url | relative_url }})

{% include optional-fees.md tuition=page.tuition %}

{% include fees-deposits-cancellations.md %}
