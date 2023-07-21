## How to Apply

<ul class="highlight-box colored">
<li>
    <h5>Application Deadline</h5>
    <div>{% include site/institute/application-deadline.html %}</div>
</li>
<li>
    <h5>Registration Fee</h5>
    <div>(non-refundable)</div>
    <div>${{ site.data.institute.application.registration-fee }}</div>
</li>
<li>
    <h5>Deposit</h5>
    <div>(refundable <a href="#cancellation-policy--refunds">in case of cancellation</a>)</div>
    <div>${{ site.data.institute.application.deposit }}</div>
</li>
{%- if reference-program.application.form-url -%}
<li>
    <a class="button" href="{{ reference-program.application.form-url }}">Application form</a>
</li>
{%- endif -%}
</ul>

{% assign application = reference-program.application -%}
1. Complete the online {% if application.form-url %}<a href="{{ application.form-url }}" target="_blank">application form</a>.{% else %}application form.{% endif %}

{% if application.allow-mail-registration %}
    * If you wish to register by mail, print and fill out the form.
{% endif %}

1. Pay registration fee and deposit<sup>†</sup> either electronically via PayPal (use the button below) or by mail.

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="V3ERVBU7KJCZL">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>

    * If paying by mail, enclose a check made out to *Center for Musical Studies* and send to:

        <div class="address">Center for Musical Studies<br/>
        724 Chesapeake Ave.<br/>
        Silver Spring, MD 20910</div>

1. Applications are accepted until spaces are filled.

1. Balance of payment is due upon receipt of invoice, approximately 60 days before departure. Pay electronically via PayPal or by mail using instructions above.

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="V3ERVBU7KJCZL">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>

**†** **Please note:** *A 4% service fee will be added to your total balance to cover the processing charges for on-line payment (Fee is 4.8% for foreign transactions, i.e. outside of the U.S.)*