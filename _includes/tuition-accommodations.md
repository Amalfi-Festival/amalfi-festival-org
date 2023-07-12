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

{%- include site/program/has-tuition-item.mdfx tuition-item-name="hotel-triple" -%}
{%- assign has-hotel-triple = __return %}
{%- include site/program/has-tuition-item.mdfx tuition-item-name="hotel-double" -%}
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
    {%- assign base-price = reference-program.tuition["hotel-double"] -%}
    <tr>
        <td>
            <p class="name">Tuition with Hotel accommodations, double occupancy</p>
            <p class="description">Double rooms includes buffet breakfast.</p>
        </td>
    {%- unless has-hotel-double == 2 -%}
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/format-cost.md cost=base-price %}</strong></p></td>
    </tr>
    {%- else -%}
        <td></td>
    </tr>
        {%- for session in reference-program.sessions -%}
    <tr>
        <td>
            <p class="session">{%- include site/session/get-class-or-session-name.md session=session -%}</p>
        </td>
            {%- assign price = base-price -%}
            {%- if session.tuition["hotel-double"] -%}
                {%- assign price = session.tuition["hotel-double"] -%}
            {%- endif -%}
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/format-cost.md cost=price %}</strong></p></td>
    </tr>
        {%- endfor -%}
    {%- endunless -%}
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

{%- include site/program/has-tuition-item.mdfx tuition-item-name="lab-fee" -%}
{%- if __return -%}
    {%- assign base-price = reference-program.tuition["lab-fee"] -%}
    <tr class="base">
        <td><p class="name">Lab fee for in-studio art classes</p></td>
    {%- unless has-hotel-double == 2 -%}
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/format-cost.md cost=base-price %}</strong></p></td>
    </tr>
    {%- else -%}
        <td></td>
    </tr>
        {%- for session in reference-program.sessions -%}
            {%- if session.tuition["lab-fee"] or base-price -%}
    <tr>
        <td>
            <p class="session">{%- include site/session/get-class-or-session-name.md session=session -%}</p>
        </td>
            {%- assign price = base-price -%}
            {%- if session.tuition["lab-fee"] -%}
                {%- assign price = session.tuition["lab-fee"] -%}
            {%- endif -%}
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/format-cost.md cost=price %}</strong></p></td>
    </tr>
            {%- endif -%}
        {%- endfor -%}
    {%- endunless -%}
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
