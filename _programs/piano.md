---
title: Piano Program
sessions:
    -   session-name: Session I
        session-name-zh: 第一期
        dates:
            start: 2024-07-05
            end: 2024-07-17
        faculty:
            -   Boris-Berman
            -   Christopher-Guzman
            -   Min-Kwon
            -   Wei-Lung-Li
            -   Marina-Lomazov
            -   Jerome-Lowenthal 
            -   Yoshikazu-Nagai
            -   Ursula-Oppens
            -   Joseph-Rackers
            -   Steven-Spooner 
        associate-staff:
            -   Yetong-Tang
            -   Shichao-Zhang
    -   session-name: Session II
        session-name-zh: 第二期
        dates:
            start: 2024-07-18
            end: 2024-07-30
        faculty:
            -   Tema-Blackstone
            -   Bernadene-Blaha
            -   Bruce-Brubaker 
            -   Hung-Kuan-Chen 
            -   Kevin-Fitz-Gerald
            -   James-Giles
            -   Douglas-Humpherys
            -   Kyu-Yeon-Kim
            -   Thomas-Rosenkranz
            -   Ursula-Oppens
            -   Hong-Xu
        associate-staff:
            -   Yetong-Tang
            -   Shichao-Zhang
application:
    form-url: https://forms.gle/ebvRKq7ULbid4MC48
    guest-form-url: https://forms.gle/LpyNuznuL6uogNDM9
outings:
    excursions:
        -   outing-slug: ravello
        -   outing-slug: pompeii
        -   outing-slug: capri
            additional-description: "***No lessons are scheduled on this day because almost all students take this trip.***"
            additional-description-zh: "***这一天没有安排课程，因为几乎所有学生都会参加这次旅行。***"
    activities:
        -   outing-slug: language
        -   outing-slug: cooking
tuition:
    meal-plan: 625
    hotel-triple: 3385
    hostel-triple: 2995
    hotel-double-upgrade: 465
    hotel-single-upgrade: 945
tuition-guests:
    meal-plan: true
    hotel-triple: 3195
    hotel-double-upgrade: true
    hotel-single-upgrade: true
webpage-data:
    menu-title: Piano
    hero-image: 23.jpg
    program-header-subtitle: "<h3>James Giles, Artistic Director<br/>Yoshikazu Nagai, Faculty Chair</h3>"
---
{%- include site/program/initialize-program-variables.fx -%}

{%- capture experience -%}
Experience an intensive piano education amid the breathtaking views of the Amalfi Coast
{%- endcapture -%}

{%- capture lessons -%}
Enjoy individual lessons with world-renowned faculty.
{%- endcapture -%}

{%- capture masterclasses -%}
Daily master classes provide a dynamic, interactive learning experience in a supportive environment.
{%- endcapture -%}

{%- capture concerts -%}
Perform in "Young Artist Series" concerts and attend faculty recitals in spectacular venues throughout the Amalfi Coast area. 
{%- endcapture -%}

{%- capture outings -%}
Opportunities to fully experience the Amalfi Coast with excursions to historic locations.
{%- endcapture -%}

{%- capture faculty -%}
Our distinguished {{ site.data.festival.application.deadline | date: "%Y" }} faculty
{%- endcapture -%}

{%- include site/program/piano-front-brochure.md -%}
