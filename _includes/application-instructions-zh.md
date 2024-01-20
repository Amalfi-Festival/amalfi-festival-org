{%- capture paymentRegistrationURL -%}
{{ site.baseurl }}{% link payment.html %}{% if reference-program %}?registration={{ reference-program.slug }}{% endif %}
{%- endcapture %}

## {% include utilities/localize.html string="How to Apply" %}
{: id="how-to-apply" }

{% include site/program/application-sidebar.html %}

报名流程

1. 网上填写并提交{% if application.form-url %}<a href="{{ application.form-url }}" target="_blank">报名表</a>。{% else %}application form.{% endif %}

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
{%- endunless %}

1. 通过 <a href="{{ paymentRegistrationURL }}">PayPal</a><sup>†</sup> 或邮寄支票缴纳注册费及押金。

    * 如邮寄支票，收款人请写 *Center for Musical Studies* 并邮寄至:

        <div class="address">Center for Musical Studies<br/>
        724 Chesapeake Ave.<br/>
        Silver Spring, MD 20910<br/>
        U.S.A.</div>

1. 我们将持续接受报名，直至名额填满为止。

1. 全部款项应在收到账单后、出行前60天内通过 <a href="{{ site.baseurl }}{% link payment.html %}?balance=1">PayPal</a> 或以上邮寄地址支付。

**†** **请注意：** *为覆盖在线支付的手续费，我们将向您的总余额添加4%的手续费费（对于国际交易，即美国以外的交易，费用为4.8%）。*