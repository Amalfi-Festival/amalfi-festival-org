---
program-name: piano-cn
---
{%- include site/initialize-program-variables.md program=page.program-name -%}

<div class="highlight-box" markdown="1">
<div class="header">Contents</div>
- contents
{:toc}
</div>




## 钢琴艺术节简介

我们为每位参加阿马尔菲海岸音乐艺术节的学员提供一对一私教课、大师班、讲座、研讨会、以及演出机会。在这里，每位学生都会得到国际著名教授们的一对一指导；每天的教学安排中都会包括充满活力、知识、互动性及包容性极强的大师班课程；我们也会在研讨会上探讨诸多钢琴学习中的议题，如：背谱、克服紧张、技巧的突破、健康正确的练琴方法等等。我们每天都会举办教师音乐会令学员观摩；同时，我们鼓励学员们参加我们在阿马尔菲海岸历史悠久的教堂及音乐厅里举办的青年艺术家系列音乐会，使学员们充分利用艺术节的资源增长演奏经验。

艺术节坐落于国际著名、迷人的阿马尔菲海岸线上。在每一期的音乐节活动里，教师及学员们都会在这个充盈着风土人情的小镇中互相学习成长。所有的音乐会、大师班、私教课、以及琴房皆在走路十分钟可以抵达的距离。在白天专注紧张的工作学习后，夜幕降临后的小镇则带来另一番迷人的风情。

每位学生将会被分配到四堂一对一私教课以及一堂大师班表演。我们会尽最大的努力去满足每位学员对私教课及大师班教授的需求。除了每位学员本人的课程外，其他所有大师班和音乐会都供正式学员们聆听观摩！

## 录像/录音要求

每位欲报名阿马尔菲海岸音乐艺术节的钢琴学员需要上传两首作品（录像或录音均可）。我们强烈建议这两首作品为钢琴独奏曲，并选自不同的风格时期。奏鸣曲单乐章或者组曲的单乐章都可接受。
录像/录音的录制时间应不超过报名前6个月。
每首作品的录像/录音必须完整。
两首作品需分开上传。
曲目上传顺序请与报名表上填写的顺序一致。
上传的文件名请注明作曲家及作品名，但**请勿包括学员姓名**.

## 录像/录音上传须知

您可将录像/录音上传至 YouTube 后，将视频链接发送至此 [邮箱](mailto:music@amalfi-festival.org)（music@amalfi-festival.org）。也可直接发送mp3文件至上述[邮箱](mailto:music@amalfi-festival.org)。

请注意，我们只会在收到完整报名表之后（或同时）接受您的录像/录音。我们不会受理任何收到报名表之前上传的录像/录音。

## 费用一览表

注：学费为单期音乐节单人费用，包括一对一私教课、大师班、讲座、研讨会、音乐会等

* 酒店三人房 及 自助式早餐—— **{% include utilities/number-delimited.html number=reference-program.tuition.hotel-triple %}美元**\
    （三人间房型较少，请参考下方双人间及单人间费用）
* 青年旅馆 及 欧陆式早餐—— **{% include utilities/number-delimited.html number=reference-program.tuition.hostel-triple %}美元**

{% assign guests = site.programs | where: "slug", "guests" | first %}
For more information for guests, [click here]({{ guests.url | relative_url }})

## Program details and application

The Amalfi Festival's Piano Program offers 2 sessions, each of which includes:

* Four 1-hour private lessons, with multiple faculty
* An opportunity to participate in one masterclass
* An opportunity to perform in Young Artist Series
* Admission to all festival concerts

During the application process, you may request lessons with the faculty listed below. While there is no guarantee of faculty assignments, we will attempt to accommodate your requests.

{% include site/session-info.md show-localization=true %}

## Tuition & Accommodations

{% assign guests = site.programs | where: "slug", "guests" | first -%}

The cost for tuition and accommodations is listed as one total fee. For guests and auditors, [click here]({{ guests.url | relative_url }}) for more information.

<table>
    <tbody>
        <tr class="border-bottom">
            <td>
                <p class="name">Tuition with Hostel accommodations, triple occupancy</p>
                <p class="description">Triple rooms with shared bathroom.</p>
            </td><td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hostel-triple %}</strong></p></td>
        </tr>
        <tr>
            <td>
                <p class="name">Tuition with Hotel accommodations, triple occupancy</p>
                <p class="description">Triple rooms includes buffet breakfast. <strong>Limited number of triple rooms available.</strong></p>
            </td><td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=reference-program.tuition.hotel-triple %}</strong></p></td>
        </tr>
{%- if reference-program.tuition.hotel-double-upgrade -%}
        <tr class="upgrade">
            <td><p class="name">Hotel upgrade: Double Room</p></td>
            {%- assign price = reference-program.tuition.hotel-triple | plus: reference-program.tuition.double-room-upgrade -%}
            <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=price %}</strong></p></td>
        </tr>
{%- endif -%}
{%- if reference-program.tuition.hotel-single-upgrade -%}
        <tr class="upgrade">
            <td><p class="name">Hotel upgrade: Single Room</p></td>
            {%- assign price = reference-program.tuition.hotel-triple | plus: reference-program.tuition.single-room-upgrade -%}
            <td class="cost" align="center" valign="top"><p><strong>${% include utilities/number-delimited.html number=price %}</strong></p></td>
        </tr>
{%- endif -%}
    </tbody>
</table>

The meal plan provides daily dinners. We recommend this option as participants and faculty dine together, including when festival concerts are held in locations outside Maiori.

<table>
<tbody>
    <tr>
        <td>
            <p class="name">Meal plan dinners</p>
            <p class="description">Includes full three-course meal with wine & mineral water</p>
        </td><td class="cost" align="center" valign="top"><p><strong>${{ reference-program.tuition.meal-plan }}</strong></p></td>
    </tr>
</tbody>
</table>

{% include activity-fees-cn.md %}

{% include application-instructions-cn.md %}

### Recording guidelines

* Recordings (audio or video) should contain two works, preferably solo, which demonstrate a contrast of style and character. Individual movements of sonatas and suites are acceptable.
* Recordings must be recent, made no more than six months prior to application.
* Each excerpt or work must be played through without stopping.
* Each work should be uploaded as separate tracks.
* All excerpts and works must be uploaded in the order listed.
* Audition materials must be submitted together with (or after) an application is received in our office.  No audition recordings will be considered without a completed registration from the applicant.

### Submitting recordings

1. Audition recordings may be YouTube links or mp3 files.
1. Label each upload with the name of the excerpt or work. **Do not include your name.**
2. Email recordings to [music@amalfi-festival.org](mailto:music@amalfi-festival.org).



{% include fees-deposits-cancellations-cn.md %}

