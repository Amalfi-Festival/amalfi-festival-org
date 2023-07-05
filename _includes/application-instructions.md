## How to Apply

<div class="highlight-box colored" markdown="1">

Application Deadline:<br/>
**{{ site.data.institute.application.deadline | date: "%B %e, %Y"}}**

Registration Fee (non-refundable):<br/>
**${{ site.data.institute.application.registration-fee }}**

Deposit (refundable [in case of cancellation](#cancellation-policy--refunds)):<br/>
**${{ site.data.institute.application.deposit }}**

</div>

{%- assign application = reference-program.application -%}
1. Complete the {% if application.form-url %}[online registration form]({{ application.form-url }}).{% else %}online registration form.{% endif %}

    * If you wish to register by mail, print and fill out the form.

1. Pay [registration fee and deposit]({{ application.payment-url }}) electronically.

    * If paying by mail, enclose a check made out to *Center for Musical Studies* and send to:

        Center for Musical Studies\
        724 Chesapeake Ave.\
        Silver Spring, MD 20910
{% if application.include-audition %}
1. Submit [audition recording](mailto:music@amalfi-festival.org).
{% endif %}
1. Applications are accepted until spaces are filled. See [Balance of Payment](#balance-of-payment).