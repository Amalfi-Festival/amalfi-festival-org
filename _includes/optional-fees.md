### Options for Meal Plan, Excursions, Cooking & Language Classes
 
Enhance your festival experience and enjoyment of the Amalfi Coast by taking advantage of these options.

Meal plan dinners (full three-course meal with wine & mineral water): **${{ include.tuition.meal-plan }}**

{% if include.tuition.double-room-upgrade or include.tuition.single-room-upgrade -%}
Hotel Upgrades:
<ul>
{%- if include.tuition.double-room-upgrade -%}
<li>Double Room Upgrade: <strong>${{ include.tuition.double-room-upgrade }}</strong></li>
{%- endif -%}
{%- if include.tuition.single-room-upgrade -%}
<li>Single Room Upgrade: <strong>${{ include.tuition.single-room-upgrade }}</strong></li>
{%- endif -%}
</ul>
{%- endif %}

Additional activities are available with the fees listed below. [Learn more about the activities and excursions.]({{ site.baseurl }}{% link activities.md %})

<ul>
{%- for activity in site.data.institute.activity-fees -%}
<li>{{ activity.name }}: <strong>${{ activity.cost }}</strong></li>
{%- endfor -%}
<li>Excursions
    <ul>
        {%- for excursion in site.data.institute.excursions -%}
            <li>{{ excursion.name }}: <strong>${{ excursion.cost }}</strong></li>
        {%- endfor -%}
    </ul>
</li>
</ul>
