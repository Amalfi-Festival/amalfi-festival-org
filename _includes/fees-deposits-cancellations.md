## Fees & Deposits

A non-refundable registration fee of **${{ site.data.institute.application.registration-fee }}**
is required at the time of registration in addition to a deposit of
**${{ site.data.institute.application.deposit }}** towards your total fees. On-line
registrations area also assessed a service fee.
 
Deposits are accepted on a first-come basis as space is limited.
Formal participation in the program may not be considered confirmed until
deposits are accepted by Center for Musical Studies. For information on
refunds, see [Cancellation Policy](#cancellation-policy--refunds).
 
Price may be subject to change for currency, inflation, taxes, surcharges
imposed, and fare increases as the price of the program was established Dec.
30, 2022. Registrants will be notified by May 15, 2023 if price increases and
may withdraw without penalty if there is more than a 5% increase.

## Cancellation Policy & Refunds

All cancellations must be made in writing by email. Phone calls or phone messages are not accepted.

Deposit and tuition payment refunds are made according to the following schedule:

{% assign p = site.data.institute.cancellation-policy %}

<div id="cancellation-schedule" markdown="1">
Before {{ p.full-refund.date | date: "%B %e, %Y" }}
{: class="dateline"}

<div><p markdown="1">Your deposit and any tuition payments made will be fully refunded without penalty.</p></div>

As of {{ p.processing-fee.date | date: "%B %e, %Y" }}
{: class="dateline"}

<div><p markdown="1">A **{% include utilities/format-cost.html cost=p.processing-fee.amount %}** processing fee will be applied to your refund.</p></div>

After {{ p.withdrawal-fee.date | date: "%B %e, %Y" }}
{: class="dateline"}

<div><p markdown="1">A **{% include utilities/format-cost.html cost=p.withdrawal-fee.amount %}** withdrawal fee will be applied to your refund.</p></div>

As of {{ p.forfeit.date | date: "%B %e, %Y" }}
{: class="dateline"}

<div><p markdown="1">Your **{% include utilities/format-cost.html cost=site.data.institute.application.deposit %}** deposit will be forfeited plus any prepaid nonrefundable expenses up to **{% include utilities/format-cost.html cost=p.forfeit.deductible %}**.</p></div>

As of {{ p.no-refund.date | date: "%B %e, %Y" }}
{: class="dateline"}

<div><p markdown="1">***No refunds will be made after this date.*** Please note that due to the late date, the full amount of your tuition fees will be forfeited. No exception can be made.</p></div>
</div>

Trip insurance is strongly recommended for your protection in case of cancellation or trip interruption. No refunds are available for partial use of program.

**Reminder: No refunds for cancellations will be issued after June 1, 2023.**

**Please note:** *Fees are subject to revision in cases of significant currency fluctuation between the Euro and the dollar or if international political situations or natural disaster cause significant economic duress resulting in unexpected cost increases.*
