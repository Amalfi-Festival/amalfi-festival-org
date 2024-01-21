{% assign __c = reference-program.cancellation-policy | default: site.data.festival.cancellation-policy %}

<div id="cancellation-schedule" markdown="1">
{%- capture _date -%}
{%- include utilities/date.html date=__c.full-refund.before-date -%}
{%- endcapture -%}
{% include utilities/localize.html string="before-date" replace-key="~~~DATE~~~" replace-value=_date %}
{: class="dateline"}

<div>{% include utilities/localize.html string="full-refund" %}</div>

{%- capture _date -%}
{%- include utilities/date.html date=__c.processing-fee.as-of-date -%}
{%- endcapture -%}
{% include utilities/localize.html string="as-of-date" replace-key="~~~DATE~~~" replace-value=_date %}
{: class="dateline"}

<div>
{%- capture _cost -%}
{%- include utilities/format-cost.html cost=__c.processing-fee.amount -%}
{%- endcapture -%}
{%- include utilities/localize.html string="processing-fee" replace-key="~~~COST~~~" replace-value=_cost -%}
</div>

{%- capture _date -%}
{%- include utilities/date.html date=__c.withdrawal-fee.as-of-date -%}
{%- endcapture -%}
{% include utilities/localize.html string="as-of-date" replace-key="~~~DATE~~~" replace-value=_date %}
{: class="dateline"}

<div>
{%- capture _cost -%}
{%- include utilities/format-cost.html cost=__c.withdrawal-fee.amount -%}
{%- endcapture -%}
{%- include utilities/localize.html string="withdrawal-fee" replace-key="~~~COST~~~" replace-value=_cost -%}
</div>

{%- capture _date -%}
{%- include utilities/date.html date=__c.forfeit.as-of-date -%}
{%- endcapture -%}
{% include utilities/localize.html string="as-of-date" replace-key="~~~DATE~~~" replace-value=_date %}
{: class="dateline"}

<div>
{%- if __c.forfeit.deductible -%}
    {%- capture _cost -%}
    {%- include utilities/format-cost.html cost=__c.forfeit.deductible -%}
    {%- endcapture -%}
    {%- capture _html -%}
    {%- include utilities/localize.html string="deposit-forfeit-with-deductible" replace-key="~~~DEDUCTIBLE~~~" replace-value=_cost -%}
    {%- endcapture -%}
{%- else -%}
    {%- capture _html -%}
    {%- include utilities/localize.html string="deposit-forfeit" -%}
    {%- endcapture -%}
{%- endif -%}

{%- if application-deposit -%}
    {%- capture _cost -%}
    <strong>{% include utilities/format-cost.html cost=application-deposit %}</strong>
    {%- endcapture -%}
{%- else -%}
    {%- assign _cost = "" -%}
{%- endif -%}
{{- _html | replace: "~COST~", _cost -}}
</div>

{% capture __no-refund-date %}
{%- if __c.no-refund.after-date -%}
    {%- capture _date -%}
    {%- include utilities/date.html date=__c.no-refund.after-date -%}
    {%- endcapture -%}
    {% include utilities/localize.html string="after-date" replace-key="~~~DATE~~~" replace-value=_date %}
{%- else -%}
    {%- capture _date -%}
    {%- include utilities/date.html date=__c.no-refund.as-of-date -%}
    {%- endcapture -%}
    {% include utilities/localize.html string="as-of-date" replace-key="~~~DATE~~~" replace-value=_date %}
{%- endif -%}
{% endcapture %}

{{ __no-refund-date }}
{: class="dateline"}

<div>{% include utilities/localize.html string="no-refund" %}</div>
</div>
