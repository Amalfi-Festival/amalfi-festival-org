---
title: Piano Program
sessions:
    -   session-name: Session 1
        session-name-zh: 第一期
        dates:
            start: 2024-07-05
            end: 2024-07-17
        faculty:
            -   Boris-Berman
            -   Christopher-Guzman
            -   Min-Kwon
            -   Marina-Lomazov
            -   Jerome-Lowenthal 
            -   Kara-Huber
            -   Yoshikazu-Nagai
            -   Ursula-Oppens
            -   Joseph-Rackers
            -   Steven-Spooner 
        associate-faculty:
            -   Yetong-Tang
            -   Shichao-Zhang
    -   session-name: Session 2
        session-name-zh: 第二期
        dates:
            start: 2024-07-18
            end: 2024-07-30
        faculty:
            -   Bernadene-Blaha
            -   Bruce-Brubaker
            -   Kevin-Fitz-Gerald
            -   James-Giles
            -   Douglas-Humpherys
            -   Wei-Lung-Li
            -   Thomas-Rosenkranz
            -   Hong-Xu
            -   Wei-Yi-Yang
        associate-faculty:
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
            additional-description-zh: "***由于几乎所有学生都将前往卡普里岛旅行，因此这一天将没有课程安排。***"
    activities:
        -   outing-slug: language
        -   outing-slug: cooking
tuition:
    meal-plan: 695
    hotel-triple: 3385
    hostel-triple: 2995
    hotel-double-upgrade: 465
    hotel-single-upgrade: 965
tuition-guests:
    meal-plan: true
    hotel-triple: 3195
    hotel-double-upgrade: true
    hotel-single-upgrade: true
webpage-data:
    menu-title: Piano
    menu-title-zh: 钢琴项目
    hero-image: IMG_2351.jpg
    program-heads:
        -   person-slug: James-Giles
            title: Artistic Director
            title-zh: 艺术总监
        -   person-slug: Yoshikazu-Nagai
            title: Faculty Chair
            title-zh: 师资主任
    meta-description: "The Amalfi Festival’s Piano Program offers private lessons, master classes, and recitals while offering opportunities to fully experience the Amalfi Coast with excursions to historic locations."
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
