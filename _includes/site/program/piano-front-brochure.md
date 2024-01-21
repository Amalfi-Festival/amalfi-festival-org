<section id="splash-piano">
<div class="standard-block" markdown="1">

## {% include utilities/markdownify-without-p.html text=experience %}

{% assign _piano-dir = site.program-assets-directory | append: "piano/" -%}
<div class="image-copy">
<div class="image">
<img src="{{ _piano-dir | append: "spooner.jpg" | relative_url }}" alt="Spooner teaching a student" />
</div>
<div class="copy">{% include utilities/markdownify-without-p.html text=lessons %}</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ _piano-dir | append: "IMG_1398_edited.jpg" | relative_url }}" alt="Nagai masterclass" />
</div>
<div class="copy">{% include utilities/markdownify-without-p.html text=masterclasses %}</div>
</div>

<div class="image-copy">
<div class="image">
<img src="{{ _piano-dir | append: "giles-san-domenico.jpg" | relative_url }}" alt="Giles performing in San Domenico" />
</div>
<div class="copy">{% include utilities/markdownify-without-p.html text=concerts %}</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ _piano-dir | append: "group-naples-piazza-2023.jpg" | relative_url }}" alt="Group in Naples piazza" />
</div>
<div class="image">
<img src="{{ _piano-dir | append: "lowenthal-oppens.jpg" | relative_url }}" alt="Lowenthal and Oppens duet" />
</div>
</div>

<div class="image-copy row">
<div class="image">
<img src="{{ _piano-dir | append: "amalfi-from-water.jpg" | relative_url }}" alt="View of Amalfi from the water" />
</div>
<div class="copy">{% include utilities/markdownify-without-p.html text=outings %}</div>
</div>

</div>
</section>

<section id="faculty" markdown="1">

## {% include utilities/markdownify-without-p.html text=faculty %}
{: class="standard-block"}

{% assign all-faculty = reference-program.sessions[0].faculty | concat: reference-program.sessions[1].faculty | uniq -%}
<div class="standard-block tiles front-of-brochure">
{%- include site/faculty-tiles.html faculty=all-faculty -%}
</div>
</section>

<section id="video">
    <iframe src="https://www.youtube.com/embed/dlnph4LxtrM?modestbranding=1" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
</section>

<section id="learn" class="background-image-container parallax">
<img src="{{ site.program-assets-directory | append: 'piano/collage.jpg' | relative_url }}" />
<h3><span class="label">{% include utilities/localize.html string="Application deadline" %}</span><br/>{% include site/program/application-deadline.html %}</h3>
<a class="apply button" href="{{ apply-url }}">{% if reference-program.applications-closed %}{% include utilities/localize.html string="Learn more" %}{% else %}{% include utilities/localize.html string="Learn more & apply" %}{% endif %}</a>
</section>

<script>(() => { parallaxify("learn", 1.3); })();</script>