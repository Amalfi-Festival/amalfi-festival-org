{% comment %}
Input variables:
    program: Optional. Either a slug of the program, or the program object itself. If not specified, assumed to be |page|.

Establishes local variables:
    - program: the program object
    - reference-program: this is for programs that are translations of other program. Assigned to |program| by default
    - application: the application object of |program|, or, if not available, |reference-program|
    - apply-url: URL to apply page (could be the program page itself, using URL hash)

    The following application data is set based on the following priority order:
        1. |reference-program|
        2. institute.yaml
    - application-deadline
    - application-extended-deadline: this is set by the same object used for |application-deadline|
    - application-registration-fee
    - application-deposit
{% endcomment %}

{%- assign program = include.program | default: page -%}
{%- unless program.title -%}
    {%- assign program = site.programs | where: "slug", include.program | first -%}
{%- endunless -%}
{%- assign reference-program = program -%}
{%- if program.reference-program -%}
    {%- assign reference-program = site.programs | where: "slug", program.reference-program | first -%}
{%- endif -%}

{%- include site/program/get-apply-url.fx program-name=program.slug -%}
{%- assign apply-url = __return -%}


{%- assign application-deadline = site.data.institute.application.deadline -%}
{%- assign application-extended-deadline = site.data.institute.application.extended-deadline -%}
{%- assign application-registration-fee = site.data.institute.application.registration-fee -%}
{%- assign application-deposit = site.data.institute.application.deposit -%}

{%- if program.application -%}
    {%- assign application = program.application -%}
{%- elsif reference-program.application -%}
    {%- assign application = reference-program.application -%}
{%- endif -%}

{%- if reference-program.application.deadline -%}
    {%- assign application-deadline = reference-program.application.deadline -%}
    {%- assign application-extended-deadline = reference-program.application.extended-deadline -%}
{%- endif -%}
{%- if reference-program.application.registration-fee -%}
    {%- assign application-registration-fee = reference-program.application.registration-fee -%}
{%- endif -%}
{%- if reference-program.application.deposit -%}
    {%- assign application-deposit = reference-program.application.deposit -%}
{%- endif -%}
