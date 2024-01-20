{%- capture paymentRegistrationURL -%}
{{ site.baseurl }}{% link payment.html %}{% if reference-program %}?registration={{ reference-program.slug }}{% endif %}
{%- endcapture %}

## {% include utilities/localize.html string="How to Apply" %}
{: id="how-to-apply" }

{% include site/program/application-sidebar.html %}

1. Complete the online {% if application.form-url %}<a href="{{ application.form-url }}" target="_blank">application form</a>.{% else %}application form.{% endif %}

{% if application.allow-mail-registration %}
    * If you wish to register by mail, print and fill out the form.
{%- elsif programs-with-guests -%}
    {%- for _p in programs-with-guests %}
    * <a href="[{{ _p.application.guest-form-url }}">{{ _p.title }}</a>
    {% endfor -%}
{%- endif %}

1. Pay registration fee and deposit either <a href="{{ paymentRegistrationURL }}">electronically via PayPal</a><sup>†</sup> or by mail.

    * If paying by mail, enclose a check made out to *Center for Musical Studies* and send to:

        <div class="address">Center for Musical Studies<br/>
        724 Chesapeake Ave.<br/>
        Silver Spring, MD 20910</div>

1. Applications are accepted until spaces are filled.

1. Balance of payment is due upon receipt of invoice, approximately 60 days before departure. Pay <a href="{{ site.baseurl }}{% link payment.html %}?balance=1">electronically via PayPal</a> or by mail using instructions above.

**†** **Please note:** *A 4% service fee will be added to your total balance to cover the processing charges for online payment (Fee is 4.8% for foreign transactions, i.e. outside of the U.S.)*