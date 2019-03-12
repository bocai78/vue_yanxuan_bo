<template>
    <div id="KnowledgeOneWrap">
      <!--识物发现 头部导航-->
      <nav class="KnowledgeOneNav">
        <ul>
          <li class="on">推荐</li>
          <li>收纳秘籍</li>
          <li>20元好物</li>
          <li>晒单</li>
          <li>达人</li>
          <li>HOME</li>
        </ul>
      </nav>
     <!--识物内容区-->
      <div class="KnowledgeOneContent">
        <div class="KnowledgeOneContentUp">
          略--------- 略--------- 略---------
          <!--<p class="KnowledgeOneContentTitleUser">-->
            <!--<img src="./list5.png">-->
            <!--<span>选妹</span>-->
          <!--</p>-->
          <!--<span>比运动裤还自由的严选牛仔裤，人手一条绝对不够！限时领130元券礼包~</span>-->
          <!--<img src="https://yanxuan.nosdn.127.net/yx-topic-1552273885657s9yaqd16.jpg?imageView&quality=65&thumbnail=690y376">-->
          <!--<p>-->
            <!--<span class="incofont icon-xiazai40"></span>-->
            <!--<span>33.6k人看过</span>-->
          <!--</p>-->
        </div>
        <div class="KnowledgeOneContentDown">
          略--------- 略--------- 略---------
        </div>
      </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #KnowledgeOneWrap
    margin-top 100px
    .KnowledgeOneNav
      width 100%
      height 62px
      background-color #fafafa
      ul
        width 130%

        li
          font-size 30px
          color grey
          float left
          margin 10px 20px
          padding 10px
          &.on
            color #B4282D
            border-bottom 2px solid #B4282D

    .KnowledgeOneContent
      margin-top 30px
      .KnowledgeOneContentUp
        font-size 50px
        height 600px
        background-color white
      .KnowledgeOneContentDown
        font-size 50px
        margin-top 30px
        height 500px
        background-color white
</style>
