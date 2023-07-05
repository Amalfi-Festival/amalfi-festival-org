{%- assign tuition = reference-program.tuition %}

### Excursions and Activities

Enhance your festival experience and enjoyment of the Amalfi Coast by taking advantage of the following [available excursions and activities]({{ site.baseurl }}{% link activities.md %}).

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