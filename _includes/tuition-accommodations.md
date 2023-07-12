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

{%- include site/program/has-tuition-item.fx tuition-item-name="hotel-triple" -%}
{%- assign has-hotel-triple = __return %}
{%- include site/program/has-tuition-item.fx tuition-item-name="hotel-double" -%}
{%- assign has-hotel-double = __return %}

{%- if has-hotel-triple -%}
    {%- assign base-price = reference-program.tuition.hotel-triple -%}
    <tr class="base">
        <td>
            <p class="name">Tuition with Hotel accommodations, triple occupancy</p>
            <p class="description">Triple rooms includes buffet breakfast. <strong>Limited number of triple rooms available.</strong></p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=base-price %}</strong></p></td>
    </tr>
{%- elsif has-hotel-double -%}
    {%- capture item-td -%}
        <p class="name">Tuition with Hotel accommodations, double occupancy</p>
        <p class="description">Double rooms includes buffet breakfast.</p>
    {%- endcapture -%}
    {%- include site/program/tuition-item.html item-name="hotel-double" item-td=item-td has-tuition-item=has-hotel-double -%}
{%- endif -%}
{%- if reference-program.tuition.hotel-double-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">Hotel upgrade: Double Room</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-double-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>+ ${% include utilities/number-delimited.html number=reference-program.tuition.hotel-double-upgrade %}</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-single-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">Hotel upgrade: Single Room</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-single-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>+ ${% include utilities/number-delimited.html number=reference-program.tuition.hotel-single-upgrade %}</strong></p></td>
    </tr>
{%- endif -%}

{%- include site/program/has-tuition-item.fx tuition-item-name="lab-fee" -%}
{%- assign has-lab-fee = __return %}
{%- if has-lab-fee -%}
    {%- capture item-td -%}
        <p class="name">Lab fee for in-studio art classes</p>
    {%- endcapture -%}
    {%- include site/program/tuition-item.html item-name="lab-fee" item-td=item-td has-tuition-item=has-lab-fee -%}
{%- endif -%}
</tbody>
</table>

The meal plan provides daily dinners. We recommend this option as participants and faculty dine together, including when festival concerts are held in locations outside Maiori.

<table>
<tbody>
    <tr>
        <td>
            <p class="name">Meal plan dinners (optional)</p>
            <p class="description">Includes full three-course meal with wine & mineral water</p>
        </td><td class="cost" align="center" valign="top"><p><strong>+ ${{ reference-program.tuition.meal-plan }}</strong></p></td>
    </tr>
</tbody>
</table>
