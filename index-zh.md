---
layout: default
sponsors:
    government:
        - icon: campania-arms.jpg
          label: Regione Campania
        - icon: salerno-arms.jpg
          label: Provincia di Salerno
        - icon: salerno-ente.jpg
          label: Ente Pronvinciale di Salerno
        - icon: amalfi-arms.jpg
          label: Comune di Amalfi
        - icon: maiori-arms.jpg
          label: Comune di Maiori
        - icon: minori-arms.gif
          label: Comune di Minori
    corporate:
        - progetto.jpg
        - coelmo.jpg
custom-css: home
body-class: home has-hero
lang: zh
permalink: /zh/
---
{%- assign festival-year = site.data.festival.application.deadline | date: "%Y" -%}
{%- assign festival-age = festival-year | minus: 1997 -%}

{%- capture years-title -%}
{{ festival-age }} Years of Music & Art on the Amalfi Coast
{%- endcapture -%}

{%- capture years-body -%}
The Amalfi Coast Music & Arts Festival is based in Maiori, Italy and features a month of concerts each summer throughout the magnificent area of the Amalfi Coast. The region includes landmark destinations such as the excavations of Pompeii, the spectacular seaside towns of Amalfi and Ravello, the magical isle of Capri, and more.
{%- endcapture -%}

{%- capture immersion-title -%}
A Mediterranean Cultural Immersion
{%- endcapture -%}

{%- capture immersion-body -%}
Concerts and master classes take place daily and are open to all festival participants. Our outstanding faculty offer seminars and workshops. Group meals provide opportunities to sample the finest in regional cuisine. Excursions to the area's outstanding tourist destinations round out the Amalfi experience!
{%- endcapture -%}

{%- capture spirit-title -%}
The Festival Spirit
{%- endcapture -%}

{%- capture spirit-body -%}
More than a series of concerts, the festival is a vibrant international community that brings together musicians, artists, writers and guests from a wide range of countries to interact and learn from each other while engaged in the creative process, taking inspiration from the breathtaking surroundings. A uniquely collaborative and supportive environment is essential to the Amalfi experience.

Beyond their individual achievements, in this close-knit community festival participants form long-lasting friendships and invaluable professional associations. The Amalfi experience lasts a lifetime!
{%- endcapture -%}

{%- capture season-header -%}
Our {{ festival-year }} Season
{%- endcapture -%}

{%- capture guests-title -%}
Guests Are Always Welcome
{%- endcapture -%}

{%- capture guests-body -%}
The Amalfi Guest Program offers a unique opportunity in cultural tourism. Sit in on  master classes and attend concerts and pre-concert lectures. Take advantage of festival excursions to the area's cultural sites and join festival meals and receptions.
{%- endcapture -%}

{%- capture support-title -%} 
We Appreciate Your Support!
{%- endcapture -%}

{%- capture support-body -%}
Your donations keep the festival thriving and provide much needed scholarship funds. Help extend the legacy of this unique festival and bring experiences of a lifetime to the artists and musicians seeking inspiration in this historic part of Italy.
{%- endcapture -%}

{%- capture sponsors -%}
Many thanks to our generous sponsors
{%- endcapture -%}

{%- capture sponsor-government -%}
Government sponsors
{%- endcapture -%}

{%- capture sponsor-corporate -%}
Corporate sponsors
{%- endcapture -%}

{%- include site/festival/home.md -%}