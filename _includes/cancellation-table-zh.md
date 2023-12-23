{% assign __c = reference-program.cancellation-policy | default: site.data.festival.cancellation-policy %}

<div id="cancellation-schedule" markdown="1">
{% include utilities/date.html date=__c.full-refund.before-date %}之前申请退款
{: class="dateline"}

<div><p markdown="1">已缴纳订金及学费将被全额退款。</p></div>

{% include utilities/date.html date=__c.processing-fee.as-of-date %}（含）之后申请退款
{: class="dateline"}

<div><p markdown="1">我们将收取**{% include utilities/format-cost.html cost=__c.processing-fee.amount %}**手续费。</p></div>

{% include utilities/date.html date=__c.withdrawal-fee.as-of-date %}（含）之后申请退款
{: class="dateline"}

<div><p markdown="1">我们将收取**{% include utilities/format-cost.html cost=__c.withdrawal-fee.amount %}**手续费。</p></div>

{% include utilities/date.html date=__c.forfeit.as-of-date %}（含）之后申请退款
{: class="dateline"}

<div><p markdown="1">{% if application-deposit %}**{% include utilities/format-cost.html cost=application-deposit %}**{% endif %}订金将不予退还。{% if __c.forfeit.deductible %} up to **{% include utilities/format-cost.html cost=__c.forfeit.deductible %}**{% endif %}. 其余已缴纳之不可退款项目皆不会被退回。</p></div>

{% capture __no-refund-date %}
{%- if __c.no-refund.after-date -%}
{% include utilities/date.html date=__c.no-refund.after-date %}（含）之后
{%- else -%}
{% include utilities/date.html date=__c.no-refund.as-of-date %}（含）之后申请退款
{%- endif -%}
{% endcapture %}

{{ __no-refund-date }}
{: class="dateline"}

<div><p markdown="1">我们不再受理取消行程的申请。**一切已缴费用将不予退还。**</p></div>
</div>

\* 详细费用及退费标准以阿马尔菲海岸音乐艺术节官网（英文）为准。解释权归阿马尔菲海岸音乐艺术节所有。
