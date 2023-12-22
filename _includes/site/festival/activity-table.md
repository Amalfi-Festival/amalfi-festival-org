<table>
{%- assign excursions = site.empty-array -%}
{%- for excursion in site.data.festival.excursions -%}
    {%- unless excursion.available-to-programs -%}
        {%- continue -%}
    {%- endunless -%}
    {%- if excursion.available-to-programs[0] -%}
        {%- unless excursion.available-to-programs contains reference-program.slug -%}
            {%- continue -%}
        {%- endunless -%}
    {%- endif -%}
    {%- assign excursions = excursions | push: excursion -%}
{%- endfor -%}
{%- if excursions.size > 0 -%}
    <tbody>
        <tr class="header"><td colspan="2"><p>{% unless include.localization %}Excursions{% else %}短途旅行{% endunless %}</p></td></tr>
    {%- for excursion in excursions -%}
        {%- assign excursion-text = excursion -%}
        {%- if include.localization -%}
            {%- assign excursion-text = excursion.localization.cn -%}
        {%- endif -%}
        <tr>
            <td>
                <p class="name">{{ excursion-text.name }} ({{ excursion-text.length }})</p>
                {%- if excursion.description -%}
                <p class="description">{% include utilities/markdownify-without-p.html text=excursion-text.description %} <a href="{{ site.baseurl }}{% link activities.md %}#{{ excursion-text.name | downcase }}">Learn more</a></p>
                {%- endif -%}
            </td><td class="cost" align="center" valign="top"><p>{% include utilities/format-cost.html localization=include.localization cost=excursion.cost %}</p></td>
        </tr>
    {%- endfor -%}
    </tbody>
{%- endif -%}
{%- assign activities = site.empty-array -%}
{%- for activity in site.data.festival.activities -%}
    {%- unless activity.available-to-programs -%}
        {%- continue -%}
    {%- endunless -%}
    {%- if activity.available-to-programs[0] -%}
        {%- unless activity.available-to-programs contains reference-program.slug -%}
            {%- continue -%}
        {%- endunless -%}
    {%- endif -%}
    {%- assign activities = activities | push: activity -%}
{%- endfor -%}
{%- if activities.size > 0 -%}
    <tbody>
        <tr class="header"><td colspan="2"><p>{% unless include.localization %}Activities{% else %}课外探索活动{% endunless %}</p></td></tr>
    {%- for activity in activities -%}
        {%- assign activity-text = activity -%}
        {%- if include.localization -%}
            {%- assign activity-text = activity.localization.cn -%}
        {%- endif -%}
        <tr>
            <td>
                <p class="name">{{ activity-text.name }}</p>
                {%- if activity-text.description -%}
                <p class="description">{% include utilities/markdownify-without-p.html text=activity-text.description %}</p>
                {%- endif -%}
            </td>
            <td class="cost" align="center" valign="top"><p><strong>{% include utilities/format-cost.html localization=include.localization cost=activity.cost %}</strong></p></td></tr>
    {%- endfor -%}
    </tbody>
{%- endif -%}
</table>