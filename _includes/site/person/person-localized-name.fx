{%- capture __result -%}{{ include.person.first-name }} {{ include.person.last-name }}{%- if include.person.zh-name and include.lang == "zh" %}<span class="zh-name">（{{ include.person.zh-name }}）</span>{%- endif -%}{%- endcapture -%}
{%- unless include.person.prefers-en-name -%}
    {%- if include.person.zh-name and include.lang == "zh" -%}
        {%- capture __result -%}{{ include.person.zh-name }}{%- endcapture -%}
    {%- endif -%}
{%- endunless -%}