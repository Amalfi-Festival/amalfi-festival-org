## How to Apply

* Application Deadline:
    <div>{{ site.data.institute.application.deadline | date: "%B %e, %Y"}}</div>
* Registration Fee (non-refundable):
    <div>${{ site.data.institute.application.registration-fee }}</div>
* Deposit (refundable [in case of cancellation](#cancellation-policy--refunds)):
    <div>${{ site.data.institute.application.deposit }}</div>

^
{: class="highlight-box colored" markdown="1"}

{% assign application = reference-program.application -%}
1. Complete the {% if application.form-url %}[online registration form]({{ application.form-url }}).{% else %}online registration form.{% endif %}

    * If you wish to register by mail, print and fill out the form.

1. Pay [registration fee and deposit]({{ application.payment-url }}) electronically.

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="V3ERVBU7KJCZL">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>

    * If paying by mail, enclose a check made out to *Center for Musical Studies* and send to:

        Center for Musical Studies\
        724 Chesapeake Ave.\
        Silver Spring, MD 20910
{% if application.include-audition %}
1. Submit [audition recording](mailto:music@amalfi-festival.org).
{% endif %}
1. Applications are accepted until spaces are filled. See [Balance of Payment](#balance-of-payment).