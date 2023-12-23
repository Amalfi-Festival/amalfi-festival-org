{% assign __c = reference-program.cancellation-policy | default: site.data.festival.cancellation-policy %}

<div id="cancellation-schedule" markdown="1">
Before {% include utilities/date.html date=__c.full-refund.before-date %}
{: class="dateline"}

<div><p markdown="1">Your deposit and any tuition payments made will be fully refunded without penalty (excluding registration fees).</p></div>

As of {% include utilities/date.html date=__c.processing-fee.as-of-date %}
{: class="dateline"}

<div><p markdown="1">A **{% include utilities/format-cost.html cost=__c.processing-fee.amount %}** processing fee will be applied to your refund plus any prepaid nonrefundable expenses.</p></div>

As of {% include utilities/date.html date=__c.withdrawal-fee.as-of-date %}
{: class="dateline"}

<div><p markdown="1">A **{% include utilities/format-cost.html cost=__c.withdrawal-fee.amount %}** withdrawal fee will be applied to your refund plus any prepaid nonrefundable expenses.</p></div>

As of {% include utilities/date.html date=__c.forfeit.as-of-date %}
{: class="dateline"}

<div><p markdown="1">Your {% if application-deposit %}**{% include utilities/format-cost.html cost=application-deposit %}**{% endif %} deposit will be forfeited plus any prepaid nonrefundable expenses{% if __c.forfeit.deductible %} up to **{% include utilities/format-cost.html cost=__c.forfeit.deductible %}**{% endif %}.</p></div>

{% capture __no-refund-date %}
{%- if __c.no-refund.after-date -%}
After {% include utilities/date.html date=__c.no-refund.after-date %}
{%- else -%}
As of {% include utilities/date.html date=__c.no-refund.as-of-date %}
{%- endif -%}
{% endcapture %}

{{ __no-refund-date }}
{: class="dateline"}

<div><p markdown="1">***No refunds will be made.*** Please note that due to the late date, the full amount of your tuition fees will be forfeited. No exceptions can be made.</p></div>
</div>
