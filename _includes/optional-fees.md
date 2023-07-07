{%- assign tuition = reference-program.tuition %}

### Excursions and Activities

Enhance your festival experience and enjoyment of the Amalfi Coast by taking advantage of the following [available excursions and activities]({{ site.baseurl }}{% link activities.md %}).

<table>
{%- assign excursions = site.empty-array -%}
{%- for excursion in site.data.institute.excursions -%}
    {%- unless excursion.available-to-programs -%}
        {%- continue -%}
    {%- endunless -%}
    {%- if excursion.available-to-programs[0] -%}
        {%- unless excursion.available-to-programs contains page.slug -%}
            {%- continue -%}
        {%- endunless -%}
    {%- endif -%}
    {%- assign excursions = excursions | push: excursion -%}
{%- endfor -%}
{%- if excursions.size > 0 -%}
    <tbody>
        <tr class="header"><td colspan="2"><p>Excursions</p></td></tr>
    {%- for excursion in excursions -%}
            <tr>
                <td>
                    <p class="name">{{ excursion.name }} ({{ excursion.length }})</p>
                    {%- if excursion.description -%}
                    <p class="description">{{ excursion.description }}</p>
                    {%- endif -%}
                </td><td class="cost" align="center" valign="top"><p><strong>${{ excursion.cost }}</strong></p></td></tr>
    {%- endfor -%}
    </tbody>
{%- endif -%}
{%- assign activities = site.empty-array -%}
{%- for activity in site.data.institute.activities -%}
    {%- unless activity.available-to-programs -%}
        {%- continue -%}
    {%- endunless -%}
    {%- if activity.available-to-programs[0] -%}
        {%- unless activity.available-to-programs contains page.slug -%}
            {%- continue -%}
        {%- endunless -%}
    {%- endif -%}
    {%- assign activities = activities | push: activity -%}
{%- endfor -%}
{%- if activities.size > 0 -%}
    <tbody>
        <tr class="header"><td colspan="2"><p>Activities</p></td></tr>
    {%- for activity in activities -%}
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
{%- endif -%}
</table>