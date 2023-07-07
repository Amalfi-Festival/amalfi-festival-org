{%- assign tuition = reference-program.tuition %}

### 可额外加购项目

<ul>
<li>音乐节期间的晚餐（每餐包括前餐、主餐、甜点、以及红/白酒）——<strong>{{ tuition.meal-plan }}美元</strong></li>
{%- if tuition.double-room-upgrade -%}
<li>酒店房型升级至双人间——<strong>{{ tuition.hotel-double-upgrade }}美元</strong></li>
{%- endif -%}
{%- if tuition.single-room-upgrade -%}
<li>酒店房型升级至单人间——<strong>{{ tuition.hotel-single-upgrade }}美元</strong></li>
{%- endif -%}

{%- for activity in site.data.institute.activities -%}
<li>{{ activity.name-cn }}——<strong>{{ activity.cost }}美元</strong></li>
{%- endfor -%}
<li>课外探索活动
    <ul>
        {%- for excursion in site.data.institute.excursions -%}
            <li>{{ excursion.name-cn }}——<strong>{{ excursion.cost }}美元</strong></li>
        {%- endfor -%}
    </ul>
</li>
</ul>
