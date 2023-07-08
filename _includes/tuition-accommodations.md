## Tuition & Accommodations

{% assign guests = site.programs | where: "slug", "guests" | first -%}

{%- if include.description %}
{{ include.description | smartify | markdownify }}
{% else %}
The cost for tuition and accommodations is listed as one total fee.
{% endif %}

For guests and auditors, [click here]({{ guests.url | relative_url }}) for more information.

<table>
<tbody>
{%- if reference-program.tuition.hostel-triple -%}
    <tr class="base">
        <td>
            <p class="name">Tuition with Hostel accommodations, triple occupancy</p>
            <p class="description">Triple rooms with shared bathroom.</p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hostel-triple %}</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-triple -%}
    {%- assign base-price = reference-program.tuition.hotel-triple -%}
    <tr class="base">
        <td>
            <p class="name">Tuition with Hotel accommodations, triple occupancy</p>
            <p class="description">Triple rooms includes buffet breakfast. <strong>Limited number of triple rooms available.</strong></p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=base-price %}</strong></p></td>
    </tr>
{%- elsif reference-program.tuition.hotel-double -%}
    {%- assign base-price = reference-program.tuition.hotel-double -%}
    <tr>
        <td>
            <p class="name">Tuition with Hotel accommodations, double occupancy</p>
            <p class="description">Double rooms includes buffet breakfast.</p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=base-price %}</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-double-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">Hotel upgrade: Double Room</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-double-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=price %}</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-single-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">Hotel upgrade: Single Room</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-single-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=price %}</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.lab-fee -%}
    <tr class="base">
        <td><p class="name">Lab fee for in-studio art classes</p></td>
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.lab-fee %}</strong></p></td>
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
