---
program-name: Piano Program
sessions:
    -   session-name: Session I
        session-name-cn: 第一期
        dates:
            start: 2023-07-05
            end: 2023-07-17
        faculty:
            -   Boris-Berman
            -   Bernadene-Blaha
            -   Enrico-Elisi
            -   Kevin-Fitz-Gerald
            -   James-Giles
            -   Ian-Jones
            -   Wei-Lung-Li
            -   Marina-Lomazov
            -   Yoshikazu-Nagai
            -   Joseph-Rackers
            -   Jerry-Wong
        guests:
            hotel-description: Hotel accommodations (triple occupancy) & buffet breakfast
            hotel-fee: 3195
            form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
    -   session-name: Session II
        session-name-cn: 第二期
        dates:
            start: 2023-07-18
            end: 2023-07-30
        faculty:
            -   James-Giles
            -   Kyu-Yeon-Kim
            -   Marina-Lomazov
            -   Jerome-Lowenthal
            -   Thomas-Lymenstull
            -   Ursula-Oppens
            -   Joseph-Rackers
            -   Chi-Wu
            -   Hong-Xu
        guests:
            hotel-description: Hotel accommodations (triple occupancy) & buffet breakfast
            hotel-fee: 3195
            form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:edcacead-0546-45f0-bc7a-481cb8a4ffc0
    -   session-name: Piano Teacher Seminar
        dates:
            start: 2023-07-10
            end: 2023-07-17
        faculty:
            -   Yetong-Tang
            -   Shichao-Zhang
associate-faculty:
    -   Yetong-Tang
    -   Shichao-Zhang
application:
    extended-deadline: 2023-04-23
    form-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c7610bfe-617b-4482-8a7f-b09513d1c287
    payment-url: https://forms.wix.com/0cb07d8d-319b-4ed3-a053-999b7fe2e326:c7610bfe-617b-4482-8a7f-b09513d1c287
tuition:
    meal-plan: 625
    hotel-triple: 3385
    hostel-triple: 2995
    double-room-upgrade: 465
    single-room-upgrade: 945
menu-title: Piano
translations:
    -   abbreviation: en
        program-name: piano
    -   abbreviation: 中文
        program-name: piano-cn
---

## Master Classes, Private Lessons, Seminars & Performance Opportunities

All pianists will enjoy:
* The individual attention of private lessons.
* Daily master classes that provide a dynamic, interactive learning experience in a supportive environment.
* Workshops and round tables to be held on ground-breaking topics such as musical memory, performance anxiety, technique, and wellness.
* Daily faculty concerts and  institute recital for students (Young Artist Series).
* Young Artist Series concerts provide an array of performance opportunities at historic landmarks in the intimate settings of historic churches and halls.

{% include site/session-info.md show-localization=false %}

{% include application-instructions.md application=page.application is-music=true %}

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


## Tuition & Accommodations

The cost for Tuition & Accommodations is listed as one total fee, which includes private lessons, masterclasses, workshops, all concerts, plus accommodations for 12 nights:

* Hotel accommodations (triple occupancy) & buffet breakfast: **${% include utilities/number-delimited.html number=page.tuition.hotel-triple %}**\
    **Limited number of triple rooms available.** For double and single rooms, see below.
* Hostel accommodations (triple rooms with shared bathroom): **${% include utilities/number-delimited.html number=page.tuition.hostel-triple %}**

{% assign guests = site.programs | where: "slug", "guests" | first %}
For more information for guests, [click here]({{ guests.url | relative_url }})

{% include optional-fees.md tuition=page.tuition %}

{% include fees-deposits-cancellations.md %}