{% for session in reference-program.sessions %}

{%- capture session-name -%}{%- include site/session-name.html session=session -%}{%- endcapture -%}
{%- unless include.show-localization -%}
    <h2 class="session" id="{{ session-name | slugify }}">{{ session-name }}</h2>
{%- else -%}
## {% if session.session-name-cn %}{{ session.session-name-cn }}{% else %}{{ session.session-name }}{% endif %}: {% include utilities/date-range-cn.html dates=session.dates %}
{: class="session" id="{{ session-name | slugify }}"}
{% endunless %}

<div class="tiles">
<h3>Faculty</h3>
{%- assign faculty = session.faculty -%}
{%- for faculty-member-name in faculty %}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-member-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}

    {%- capture faculty-name -%}{{ faculty-member.first-name }} {{ faculty-member.last-name }}{%- if faculty-member.cn-name and include.show-localization -%}<br/>({{ faculty-member.cn-name }}){%- endif -%}{%- endcapture -%}
    {%- unless faculty-member.prefers-en-name -%}
        {%- if faculty-member.cn-name and include.show-localization -%}
            {%- capture faculty-name -%}{{ faculty-member.cn-name }}{%- endcapture -%}
        {%- endif -%}
    {%- endunless -%}
<div><a href="{{ faculty-member.url | relative_url }}"><div class="image"><img src="{{ site.faculty-image-directory | append: faculty-member.headshot-filename | relative_url }}" /></div><div class="name">{{ faculty-name }}</div><div class="school">{% if faculty-member.school-cn and include.show-localization %}{{ faculty-member.school-cn }}{% else %}{{ faculty-member.school }}{% endif %}</div>
</a></div>
{%- endfor -%}

{%- if session.associate-faculty -%}
<h3>Associate Staff</h3>
{%- assign faculty = session.associate-faculty -%}
{%- for faculty-member-name in faculty %}
    {%- for faculty-candidate in site.faculty -%}
        {%- if faculty-candidate.slug == faculty-member-name -%}
            {%- assign faculty-member = faculty-candidate -%}
            {%- break -%}
        {%- endif -%}
    {%- endfor -%}

    {%- capture faculty-name -%}{{ faculty-member.first-name }} {{ faculty-member.last-name }}{%- if faculty-member.cn-name and include.show-localization -%}<br/>({{ faculty-member.cn-name }}){%- endif -%}{%- endcapture -%}
    {%- unless faculty-member.prefers-en-name -%}
        {%- if faculty-member.cn-name and include.show-localization -%}
            {%- capture faculty-name -%}{{ faculty-member.cn-name }}{%- endcapture -%}
        {%- endif -%}
    {%- endunless -%}
<div><a href="{{ faculty-member.url | relative_url }}"><div class="image"><img src="{{ site.faculty-image-directory | append: faculty-member.headshot-filename | relative_url }}" /></div><div class="name">{{ faculty-name }}</div><div class="school">{% if faculty-member.school-cn and include.show-localization %}{{ faculty-member.school-cn }}{% else %}{{ faculty-member.school }}{% endif %}</div>
</a></div>
{%- endfor -%}
{%- endif -%}
</div>


{%- endfor -%}
