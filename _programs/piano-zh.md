---
reference-program-slug: piano
title: 第26届意大利阿马尔菲海岸钢琴艺术节
lang: zh
webpage-data:
    menu-title: 钢琴艺术节
---
{%- include site/program/initialize-program-variables.fx -%}

<section id="splash" class="proto-2" markdown="1">
<div class="standard-block" markdown="1">

## 在阿马尔菲海岸的壮丽景色中体验强化钢琴教育

<div class="image-copy">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/Spooner & Student.JPG" | relative_url }}" />
</div>
<div class="copy">
    <div>每位学生都会得到国际著名教授们的一对一指导。</div>
</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/IMG_1398_edited.jpg" | relative_url }}" alt="Nagai teaching" />
</div>
<div class="copy">
每天的教学安排中都会包括充满活力、知识、互动性及包容性极强的大师班课程。
</div>
</div>

<div class="image-copy">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/giles-san-domenico.jpg" | relative_url }}" />
</div>
<div class="copy" style="bottom: -7rem;">
我们每天都会举办教师音乐会令学员观摩；同时，我们鼓励学员们参加我们在阿马尔菲海岸历史悠久的教堂及音乐厅里举办的青年艺术家系列音乐会，使学员们充分利用艺术节的资源增长演奏经验。
</div>
</div>

<div class="image-copy right">
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/1554040_orig.jpg" | relative_url }}" alt="Student performing" />
</div>
<div class="image">
<img src="{{ site.program-assets-directory | append: "piano/lowenthal-oppens.jpg" | relative_url }}" alt="Student performing" />
</div>
</div>

<div class="image-copy row">
<div class="image">
<img src="{{ site.image-directory | append: "ravello.JPG" | relative_url }}" />
</div>
<div class="copy">
有机会充分体验阿马尔菲海岸，游览世界著名景点，参加语言、陶艺和烹饪课程等文化活动。
</div>
</div>

</div>
</section>

<section id="faculty" markdown="1">

## 向世界一流的教师学习
{: class="standard-block"}

{% assign all-faculty = reference-program.sessions[0].faculty | concat: reference-program.sessions[1].faculty | uniq | sort -%}
<div class="standard-block tiles front-of-brochure">
{%- include site/faculty-tiles.html faculty=all-faculty -%}
</div>
</section>

<section id="video">
    <iframe src="https://www.youtube.com/embed/bP4LVZUGYYs?modestbranding=1" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
</section>

<section id="learn" class="background-image-container">
<img src="{{ site.program-assets-directory | append: 'piano/collage.jpg' | relative_url }}" />
<h3><span class="label">{% include utilities/localize.html string="Application deadline" %}</span><br/>{% include site/program/application-deadline.html %}</h3>
<a class="apply button" href="{{ apply-url }}">{% include utilities/localize.html string="Learn more and apply" %}</a>
</section>
