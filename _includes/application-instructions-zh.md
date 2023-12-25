## 网上报名

<ul class="highlight-box colored">
<li>
    <h5>{% include utilities/localize.html string="Application deadline" %}</h5>
    <div>{% include site/program/application-deadline.html %}</div>
</li>
<li>
    <h5>{% include utilities/localize.html string="Registration fee" %}</h5>
    <div>(non-refundable)</div>
    <div>{% include utilities/format-cost.html cost=application-registration-fee %}</div>
</li>
<li>
    <h5>{% include utilities/localize.html string="Deposit" %}</h5>
    <div>(refundable <a href="#cancellation-policy--refunds">in case of cancellation</a>)</div>
    <div>{% include utilities/format-cost.html cost=application-deposit %}</div>
</li>
{%- if application.form-url -%}
<li>
    <a class="button" href="{{ application.form-url }}">{% include utilities/localize.html string="Application form" %}</a>
</li>
{%- endif -%}
</ul>


1. Complete the online {% if application.form-url %}<a href="{{ application.form-url }}" target="_blank">application form</a>.{% else %}application form.{% endif %}

{% if application.allow-mail-registration %}
    * If you wish to register by mail, print and fill out the form.
{%- endif -%}
{%- unless application.form-url -%}
    {%- for _p in site.data.festival.programs -%}
        {%- assign program = site.programs | where: "slug", _p.program-slug | first -%}
        {%- assign program-guest = program.tuition-guests -%}
        {%- assign can-have-guests = false -%}
        {%- unless program-guest -%}
            {%- for session in program.sessions -%}
                {%- if session.guests -%}
                    {%- assign can-have-guests = true -%}
                    {%- break -%}
                {%- endif -%}
            {%- endfor -%}
        {%- endunless -%}
        {%- unless program-guest or can-have-guests -%}
            {%- continue -%}
        {%- endunless %}
    * [{{ program.title }}]({{ program.application.guest-form-url }})
    {%- endfor -%}
{%- endunless -%}

{%- capture paymentURL -%}
{{ site.baseurl }}{% link payment.html %}{% if reference-program %}?registration={{ reference-program.slug }}{% endif %}
{%- endcapture %}
1. Pay registration fee and deposit either <a href="{{ paymentURL }}">electronically via PayPal</a><sup>†</sup> or by mail.

    * If paying by mail, enclose a check made out to *Center for Musical Studies* and send to:

        <div class="address">Center for Musical Studies<br/>
        724 Chesapeake Ave.<br/>
        Silver Spring, MD 20910</div>

1. Applications are accepted until spaces are filled.

1. Balance of payment is due upon receipt of invoice, approximately 60 days before departure. Pay <a href="{{ site.baseurl }}{% link payment.html %}?balance=1">electronically via PayPal</a> or by mail using instructions above.

**†** **Please note:** *A 4% service fee will be added to your total balance to cover the processing charges for online payment (Fee is 4.8% for foreign transactions, i.e. outside of the U.S.)*