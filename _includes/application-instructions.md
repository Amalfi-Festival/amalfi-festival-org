{%- capture paymentRegistrationURL -%}
{{ site.baseurl }}{% link payment.html %}{% if reference-program %}?registration={{ reference-program.slug }}{% endif %}
{%- endcapture %}

## {% include utilities/localize.html string="How to Apply" %}
{: id="how-to-apply" }

{% include site/program/application-sidebar.html %}

{% if reference-program.applications-closed %}
**Note: Application deadline has passed. Applications are closed.**
{% endif %}

1. Complete the online {% if reference-program.applications-closed %}application form.{% elsif application.form-url %}<a href="{{ application.form-url }}" target="_blank">application form</a>.{% else %}application form.{% endif %}

{% if application.allow-mail-registration %}
    * If you wish to register by mail, print and fill out the form.
{%- elsif programs-with-guests -%}
    {%- for _p in programs-with-guests %}
    * {% if _p.applications-closed %}{{ _p.title }} (Applications closed){% else %}<a href="{{ _p.application.guest-form-url }}">{{ _p.title }}</a>{% endif %}
    {% endfor -%}
{%- endif %}

1. Pay registration fee and deposit either <a href="{{ paymentRegistrationURL }}">electronically via PayPal</a>**\*** or by mail.

    * If paying by mail, enclose a check made out to *Center for Musical Studies* and send to:

        <div class="address">Center for Musical Studies<br/>
        724 Chesapeake Ave.<br/>
        Silver Spring, MD 20910</div>

1. Applications are accepted until spaces are filled. Your participation in the program may not be considered confirmed until deposits are accepted by Center for Musical Studies and you have received a formal confirmation notification.

{% if reference-program.slug == "choral" %}
1. All trip participants are required to [purchase travel insurance]({{ site.baseurl }}{% link getting-here.md %}#travel-insurance) that covers the tour in case of emergency, unexpected health issues, other unforeseen change of plans or need for cancellation.
{% endif %}

1. Balance of payment is due upon receipt of invoice, approximately 60 days before departure. Pay <a href="{{ site.baseurl }}{% link payment.html %}?balance=1">electronically via PayPal</a>**\*** or by mail using instructions above.

**\* Please note:** *A 4% service fee will be added to your total balance to cover the processing charges for online payment (Fee is 4.8% for foreign transactions, i.e. outside of the U.S.)*