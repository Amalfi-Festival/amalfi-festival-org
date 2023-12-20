## {{ include.title | default: "Tuition & Accommodations" | smartify }}

{% assign _guests = site.programs | where: "slug", "guests" | first -%}

{%- if include.description %}
{{ include.description | smartify | markdownify }}
{% else %}
The cost for tuition and accommodations is listed as one total fee.
{% endif %}

{% if reference-program.tuition-guests -%}
For guests and auditors, [click here]({{ _guests.url | relative_url }}) for more information.
{%- endif %}

<table>
<tbody>

{%- include site/program/has-tuition-item.fx tuition-item-name="cost" -%}
{%- assign _has-cost = __return %}

{%- if _has-cost -%}
    {%- include site/program/tuition-item.html item-name="cost" has-tuition-item=_has-hostel-triple -%}
{%- else -%}
    {%- include site/program/has-tuition-item.fx tuition-item-name="hostel-triple" -%}
    {%- assign _has-hostel-triple = __return %}

    {%- if _has-hostel-triple -%}
        {%- include site/program/tuition-item.html item-name="hostel-triple" has-tuition-item=_has-hostel-triple -%}
    {%- endif -%}

    {%- include site/program/has-tuition-item.fx tuition-item-name="hotel-triple" -%}
    {%- assign _has-hotel-triple = __return %}
    {%- include site/program/has-tuition-item.fx tuition-item-name="hotel-double" -%}
    {%- assign _has-hotel-double = __return %}

    {%- if _has-hotel-triple -%}
        {%- include site/program/tuition-item.html item-name="hotel-triple" has-tuition-item=_has-hotel-triple -%}
    {%- elsif _has-hotel-double -%}
        {%- include site/program/tuition-item.html item-name="hotel-double" has-tuition-item=_has-hotel-double -%}
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
{%- endif -%}

{%- include site/program/has-tuition-item.fx tuition-item-name="lab-fee" -%}
{%- assign _has-lab-fee = __return %}
{%- if _has-lab-fee -%}
    {%- capture item-td -%}
        <p class="name">Lab fee for in-studio art classes</p>
    {%- endcapture -%}
    {%- include site/program/tuition-item.html item-name="lab-fee" item-td=item-td has-tuition-item=_has-lab-fee -%}
{%- endif -%}
</tbody>
</table>


{%- if reference-program.tuition.meal-plan %}
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
{%- endif %}