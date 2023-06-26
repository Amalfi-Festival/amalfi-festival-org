{%- assign tuition = reference-program.tuition %}

### Options for Meal Plan, Excursions, Cooking & Language Classes
 
Enhance your festival experience and enjoyment of the Amalfi Coast by taking advantage of these options.

<table>
    <tbody>
        <tr class="header"><td colspan="2"><p>Room and board additions</p></td></tr>
        <tr>
            <td>
                <p class="name">Meal plan dinners</p>
                <p class="description">Includes full three-course meal with wine & mineral water</p>
            </td><td class="cost" align="center" valign="top"><p><strong>${{ tuition.meal-plan }}</strong></p></td>
        </tr>
{%- if tuition.double-room-upgrade -%}
        <tr>
            <td><p class="name">Hotel upgrade: Double Room</p></td>
            <td class="cost" align="center" valign="top"><p><strong>${{ tuition.double-room-upgrade }}</strong></p></td>
        </tr>
{%- endif -%}
{%- if tuition.single-room-upgrade -%}
        <tr>
            <td><p class="name">Hotel upgrade: Single Room</p></td>
            <td class="cost" align="center" valign="top"><p><strong>${{ tuition.single-room-upgrade }}</strong></p></td>
        </tr>
{%- endif -%}
    </tbody>
</table>

Additional activities are available with the fees listed below. [Learn more about the activities and excursions.]({{ site.baseurl }}{% link activities.md %})

<table>
    <tbody>
        <tr class="header"><td colspan="2"><p>Excursions</p></td></tr>
{% for excursion in site.data.institute.excursions -%}
        <tr>
            <td>
                <p class="name">{{ excursion.name }}</p>
                {%- if excursion.description -%}
                <p class="description">{{ excursion.description }}</p>
                {%- endif -%}
            </td><td class="cost" align="center" valign="top"><p><strong>${{ excursion.cost }}</strong></p></td></tr>
{% endfor -%}
    </tbody>
    <tbody>
        <tr class="header"><td colspan="2"><p>Activities</p></td></tr>
{%- for activity in site.data.institute.activity-fees -%}
        <tr>
            <td>
                <p class="name">{{ activity.name }}</p>
                {%- if activity.description -%}
                <p class="description">{{ activity.description }}</p>
                {%- endif -%}
            </td>
            <td class="cost" align="center" valign="top"><p><strong>${{ activity.cost }}</strong></p></td></tr>
{%- endfor -%}
    </tbody>
</table>