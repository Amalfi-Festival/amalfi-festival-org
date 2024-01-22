---
layout: default
custom-css: home
body-class: home has-hero
lang: zh
permalink: /zh/
---
{%- assign festival-year = site.data.festival.application.deadline | date: "%Y" -%}
{%- assign festival-age = festival-year | minus: 1997 -%}

{%- capture years-title -%}
{{ festival-age }}年音乐与艺术的辉煌盛宴在阿马尔菲海岸绽放
{%- endcapture -%}

{%- capture years-body -%}
阿马尔菲海岸音乐与艺术节的总部坐落于意大利的马约里。每年夏季，我们都会带来一个月的音乐盛宴，将阿马尔菲海岸的壮丽之地点缀得如诗如画。这片区域蕴含着庞贝古城的神秘遗址、阿马尔菲和拉韦洛的壮美海滨小镇、还有令人陶醉的卡普里岛。
{%- endcapture -%}

{%- capture immersion-title -%}
地中海文化的沉浸之旅
{%- endcapture -%}

{%- capture immersion-body -%}
每日的音乐会和大师班为所有音乐节参与者敞开大门。我们杰出的教授团队届时将会带来精彩纷呈的研讨会和工作坊。全体人员共进的晚餐让您品味当地美食的精髓。此外，游览该地区卓越的旅游胜地更是让阿马尔菲之旅的体验锦上添花！
{%- endcapture -%}

{%- capture spirit-title -%}
音乐节的灵魂
{%- endcapture -%}

{%- capture spirit-body -%}
音乐节不仅仅是一连串音乐会，更是一个充满活力的国际社群，吸引着来自世界各地的音乐家、艺术家、作家和宾客。他们在创意的过程中相互交流、共同学习，从令人叹为观止的环境中汲取灵感。在这个紧密团结的社区中，音乐节参与者不仅收获个体的荣誉，还结下了持久的友谊和宝贵的专业联系。阿马尔菲的魅力将陪伴一生！
{%- endcapture -%}

{%- capture season-header -%}
{{ festival-year }}年度艺术节项目
{%- endcapture -%}

{%- capture guests-title -%}
热烈欢迎各位嘉宾！
{%- endcapture -%}

{%- capture guests-body -%}
阿马尔菲嘉宾计划为您提供一场独特的文化之旅。您将有机会参与大师班、聆听音乐会及前期讲座。通过音乐节提供的文化之旅，您还能领略该地区的名胜古迹，并参与丰富多彩的音乐盛宴。
{%- endcapture -%}

{%- capture support-title -%} 
感谢您的支持！
{%- endcapture -%}

{%- capture support-body -%}
您的慷慨捐赠不仅将助音乐节茁壮成长，更将为急需奖学金的学生提供关键支持。您的支持将继续书写这个独特音乐节的传奇，为那些在这个意大利历史名城中寻找灵感的艺术家和音乐家带来一生难忘的艺术和音乐体验。
{%- endcapture -%}

{%- capture donate-now -%}
捐赠
{%- endcapture -%}

{%- capture sponsors-title -%}
向我们慷慨的赞助方致以诚挚的感谢
{%- endcapture -%}

{%- capture sponsors-government -%}
政府赞助方
{%- endcapture -%}

{%- capture sponsors-corporate -%}
企业赞助方
{%- endcapture -%}

{%- include site/festival/home.md -%}