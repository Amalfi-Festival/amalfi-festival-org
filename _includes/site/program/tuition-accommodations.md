{%- capture _s -%}
{%- include utilities/localize.html string="tuition-title" -%}
{%- endcapture -%}
{%- assign _s = include.title | default: _s | smartify %}
## {% include utilities/localize.html string=_s %}

{% assign _guests = site.programs | where: "slug", "guests" | first -%}

{%- if include.description %}
{{ include.description | smartify | markdownify }}
{% else -%}
{%- include utilities/localize.html string="tuition-cost-is-one-fee" -%}
{%- endif %}

{% if reference-program.tuition-guests and page.slug != "choral" -%}
    {%- capture _url -%}
    {{- _guests.url | relative_url -}}
    {%- endcapture -%}
    {%- include utilities/localize.html string="tuition-guests-link" replace-key="~~~URL~~~" replace-value=_url -%}
{%- endif %}

{%- assign _name-key = include.name-key | default: "name" -%}
{%- assign _desc-key = include.description-key | default: "description" -%}
{%- if page.lang -%}
    {%- assign _name-key = _name-key | append: "-" | append: page.lang -%}
    {%- assign _desc-key = _desc-key | append: "-" | append: page.lang -%}
{%- endif %}

<table>
<tbody>

{%- include site/program/has-tuition-item.fx tuition-item-name="cost" -%}
{%- assign _has-cost = __return %}

{%- if _has-cost -%}
    {%- include site/program/tuition-item.html item-name="cost" has-tuition-item=_has-cost name-key=_name-key description-key=_desc-key -%}
{%- else -%}
    {%- include site/program/has-tuition-item.fx tuition-item-name="hostel-triple" -%}
    {%- assign _has-hostel-triple = __return %}

    {%- if _has-hostel-triple -%}
        {%- include site/program/tuition-item.html item-name="hostel-triple" has-tuition-item=_has-hostel-triple name-key=_name-key description-key=_desc-key -%}
    {%- endif -%}

    {%- include site/program/has-tuition-item.fx tuition-item-name="hotel-triple" -%}
    {%- assign _has-hotel-triple = __return %}
    {%- include site/program/has-tuition-item.fx tuition-item-name="hotel-double" -%}
    {%- assign _has-hotel-double = __return %}

    {%- if _has-hotel-triple -%}
        {%- include site/program/tuition-item.html item-name="hotel-triple" has-tuition-item=_has-hotel-triple name-key=_name-key description-key=_desc-key -%}
    {%- elsif _has-hotel-double -%}
        {%- include site/program/tuition-item.html item-name="hotel-double" has-tuition-item=_has-hotel-double name-key=_name-key description-key=_desc-key -%}
    {%- endif -%}

    {%- if reference-program.tuition.hotel-double-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">{{ site.data.accommodations.hotel-double-upgrade[_name-key] }}</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-double-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>+ {% include utilities/format-cost.html cost=reference-program.tuition.hotel-double-upgrade %}</strong></p></td>
    </tr>
    {%- endif -%}
    {%- if reference-program.tuition.hotel-single-upgrade -%}
    <tr class="upgrade">
        <td valign="top"><p class="name">{{ site.data.accommodations.hotel-single-upgrade[_name-key] }}</p></td>
        {%- assign price = base-price | plus: reference-program.tuition.hotel-single-upgrade -%}
        <td class="cost" align="center" valign="top"><p><strong>+ {% include utilities/format-cost.html cost=reference-program.tuition.hotel-single-upgrade %}</strong></p></td>
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

{% include utilities/localize.html string="meal-plan" %}

<table>
<tbody>
    <tr>
        <td>
            <p class="name">{% include utilities/localize.html source=site.data.accommodations.meal-plan key="name" %}</p>
            <p class="description">
{%- capture _d -%}
{%- include utilities/localize.html source=site.data.accommodations.meal-plan key="description" -%}
{%- endcapture -%}
                {% include utilities/markdownify-without-p.html text=_d %}</p>
        </td><td class="cost" align="center" valign="top"><p><strong>+ {% include utilities/format-cost.html cost=reference-program.tuition.meal-plan %}</strong></p></td>
    </tr>
</tbody>
</table>
{%- endif %}