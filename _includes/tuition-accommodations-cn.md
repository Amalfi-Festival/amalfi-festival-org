## 费用一览表

{% assign guests = site.programs | where: "slug", "guests" | first -%}

{%- if include.description %}
{{ include.description | smartify | markdownify }}
{% else %}
学费为单期音乐节单人费用，包括一对一私教课、大师班、讲座、研讨会、音乐会等
{% endif %}

For guests and auditors, [click here]({{ guests.url | relative_url }}) for more information.

<table>
<tbody>
{%- if reference-program.tuition.hostel-triple -%}
    <tr class="base">
        <td>
            <p class="name">青年旅馆 及 欧陆式早餐</p>
            <p class="description">三人间设有共用浴室</p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/number-delimited.html number=reference-program.tuition.hostel-triple %}美元</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-triple -%}
    {%- assign base-price = reference-program.tuition.hotel-triple -%}
    <tr class="base">
        <td>
            <p class="name">酒店三人房 及 自助式早餐</p>
            <p class="description">三人间房型较少</p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/number-delimited.html number=base-price %}美元</strong></p></td>
    </tr>
{%- elsif reference-program.tuition.hotel-double -%}
    {%- assign base-price = reference-program.tuition.hotel-double -%}
    <tr>
        <td>
            <p class="name">Tuition with Hotel accommodations, double occupancy</p>
            <p class="description">Double rooms includes buffet breakfast.</p>
        </td>
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/number-delimited.html number=base-price %}美元</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-double-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">酒店房型升级至双人间</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-double-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/number-delimited.html number=price %}美元</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-single-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">酒店房型升级至单人间</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-single-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/number-delimited.html number=price %}美元</strong></p></td>
    </tr>
{%- endif -%}
{%- if reference-program.tuition.lab-fee -%}
    <tr class="base">
        <td><p class="name">Lab fee for in-studio art classes</p></td>
        <td class="cost" align="center" valign="top"><p><strong>{% include utilities/number-delimited.html number=reference-program.tuition.lab-fee %}美元</strong></p></td>
    </tr>
{%- endif -%}
</tbody>
</table>

The meal plan provides daily dinners. We recommend this option as participants and faculty dine together, including when festival concerts are held in locations outside Maiori.

<table>
<tbody>
    <tr>
        <td>
            <p class="name">音乐节期间的晚餐</p>
            <p class="description">每餐包括前餐、主餐、甜点、以及红/白酒</p>
        </td><td class="cost" align="center" valign="top"><p><strong>{{ reference-program.tuition.meal-plan }}美元</strong></p></td>
    </tr>
</tbody>
</table>
