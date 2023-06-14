---
program-name: 第26届意大利阿马尔菲海岸钢琴艺术节
menu-title: 钢琴艺术节
reference-program: piano
---

## 钢琴艺术节简介

我们为每位参加阿马尔菲海岸音乐艺术节的学员提供一对一私教课、大师班、讲座、研讨会、以及演出机会。在这里，每位学生都会得到国际著名教授们的一对一指导；每天的教学安排中都会包括充满活力、知识、互动性及包容性极强的大师班课程；我们也会在研讨会上探讨诸多钢琴学习中的议题，如：背谱、克服紧张、技巧的突破、健康正确的练琴方法等等。我们每天都会举办教师音乐会令学员观摩；同时，我们鼓励学员们参加我们在阿马尔菲海岸历史悠久的教堂及音乐厅里举办的青年艺术家系列音乐会，使学员们充分利用艺术节的资源增长演奏经验。

艺术节坐落于国际著名、迷人的阿马尔菲海岸线上。在每一期的音乐节活动里，教师及学员们都会在这个充盈着风土人情的小镇中互相学习成长。所有的音乐会、大师班、私教课、以及琴房皆在走路十分钟可以抵达的距离。在白天专注紧张的工作学习后，夜幕降临后的小镇则带来另一番迷人的风情。

每位学生将会被分配到四堂一对一私教课以及一堂大师班表演。我们会尽最大的努力去满足每位学员对私教课及大师班教授的需求。除了每位学员本人的课程外，其他所有大师班和音乐会都供正式学员们聆听观摩！




{% assign piano = site.programs | where: "slug", "piano" | first %}
{% include site/session-info.md program=piano show-localization=true %}


{% include application-instructions-cn.md application=piano.application is-music=true %}

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

* 酒店三人房 及 自助式早餐—— **{% include utilities/number-delimited.html number=piano.tuition.hotel-triple %}美元**\
    （三人间房型较少，请参考下方双人间及单人间费用）
* 青年旅馆 及 欧陆式早餐—— **{% include utilities/number-delimited.html number=piano.tuition.hostel-triple %}美元**

{% assign guests = site.programs | where: "slug", "guests" | first %}
For more information for guests, [click here]({{ guests.url | relative_url }})

{% include optional-fees-cn.md tuition=piano.tuition %}

{% include fees-deposits-cancellations-cn.md %}
