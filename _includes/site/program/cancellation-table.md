{% assign __c = reference-program.cancellation-policy | default: site.data.festival.cancellation-policy %}

<div id="cancellation-schedule" markdown="1">

{% include site/program/get-cancellation-deadline-string.fx cancellation-parameter=__c.full-refund %}
{: class="dateline"}
<div>{% include utilities/localize.html string="full-refund" %}</div>

{% include site/program/get-cancellation-deadline-string.fx cancellation-parameter=__c.processing-fee %}
{: class="dateline"}
<div>
{%- capture _cost -%}
{%- include utilities/format-cost.html cost=__c.processing-fee.amount -%}
{%- endcapture -%}
{%- include utilities/localize.html string="processing-fee" replace-key="~~~COST~~~" replace-value=_cost -%}
</div>

{% include site/program/get-cancellation-deadline-string.fx cancellation-parameter=__c.withdrawal-fee %}
{: class="dateline"}
<div>
{%- capture _cost -%}
{%- include utilities/format-cost.html cost=__c.withdrawal-fee.amount -%}
{%- endcapture -%}
{%- include utilities/localize.html string="withdrawal-fee" replace-key="~~~COST~~~" replace-value=_cost -%}
</div>

{% include site/program/get-cancellation-deadline-string.fx cancellation-parameter=__c.forfeit %}
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
    {%- include utilities/localize.html string="first-installment-payment-forfeit" -%}
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

{% include site/program/get-cancellation-deadline-string.fx cancellation-parameter=__c.no-refund %}
{: class="dateline"}
<div>{% include utilities/localize.html string="no-refund" %}</div>
</div>
