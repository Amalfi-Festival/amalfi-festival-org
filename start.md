---
layout: default
title: Start Page
sitemap: false
---

{%- assign gh = "https://github.com/Amalfi-Festival/amalfi-festival-org/edit/main/" %}

# Start page

Click the links to edit (GitHub login needed). When you are done, click on the green "Commit changes" button in the upper right hand side of the page.

Changes you commit will trigger an immediate update to the entire site. It will take around a minute for the changes to be visible.

To confirm that your changes are live, shift-click the reload button in your browser.

## Text and data that universally affects program pages

* [Application instructions]({{ gh }}_includes/application-instructions.md){:target="_blank"}
* (data) [Festival overview]({{ gh }}_data/festival.yaml){:target="_blank"}
    * "XXXth season, 2026" or "Since 1996"
    * Which programs to list as part of the festival
    * Application and cancellation deadlines, acting as the default dates for every program. Can be overwritten in program pages. Info is also listed in Terms & Conditions page.
* (data) [Excursions & Activities]({{ gh }}_data/outings.yaml){:target="_blank"} (how outings are described in program pages: name, description, length, cost)
    * What is offered per-program is specified in the program's page.

## Programs

* [Choral]({{ gh }}_programs/choral.md){:target="_blank"}
* [Piano]({{ gh }}_programs/piano.md){:target="_blank"}
* [Piano teaching]({{ gh }}_programs/piano-teaching.md){:target="_blank"}
* [Visual arts]({{ gh }}_programs/visual-arts.md){:target="_blank"}
* [Writing]({{ gh }}_programs/writing.md){:target="_blank"}

## Other Pages

* [Excursions & Activities]({{ gh }}excursions-and-activities.md){:target="_blank"} ("travel brochure" describing all outings)
* [FAQ]({{ gh }}faq.md){:target="_blank"}
* [Getting Here]({{ gh }}getting-here.md){:target="_blank"}
* (data) [Staff]({{ gh }}_data/staff.yaml){:target="_blank"} (List of personnel, titles, headshots)
* [Support Us]({{ gh }}donations.md){:target="_blank"}
* [Terms & Conditions]({{ gh }}terms-and-conditions.md){:target="_blank"}
