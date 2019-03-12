<template>
  <div id="LoginEmailWrap">
    <div class="LoginEmailContent">
      <div class="LoginEmailContentUp">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="LoginEmailContentMiddle">
        <input type="text" placeholder="邮箱账号">
        <br>
        <div class="LoginEmailContentMiddleOne">
          <input type="text" placeholder="密码">
        </div>
        <br>
        <div class="LoginEmailContentMiddleTwo">
          <a href="javascript:;">注册账号</a>
          <a href="javascript:;">忘记密码</a>
        </div>
      </div>
      <div class="LoginEmailContentDown">
        <div class="personalContentPhone">
          <span class="iconfont icon-shouji">登录</span>
        </div>
        <div class="personalContentEmail">
          <span class="iconfont icon-youxiang" @click="goTo('/personal')">其他登录方式</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    methods:{
      goTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #LoginEmailWrap
    .LoginEmailContent
      height 1256px
      background-color white
      .LoginEmailContentUp
        height 200px
        line-height 200px
        text-align center
        img
          width 180px
          height 60px
          vertical-align middle

      .LoginEmailContentMiddle
        padding 0 40px
        margin-top 100px
        font-size 28px
        input
          width 100%
          height 80px
          border-bottom 1px solid #eee
          margin-bottom 30px
          outline none

        .LoginEmailContentMiddleTwo
          display flex
          justify-content space-between


      .LoginEmailContentDown
        height 400px
        padding 0 40px
        margin-top 40px
        font-size 30px
        text-align center
        div
          width 670px
          height 94px
          line-height 94px
          border-radius 10px
          margin-bottom 30px
          &.personalContentPhone
            color white
            background-color #B4282D
          &.personalContentEmail
            color #B4282D
            border 2px solid #B4282D


</style>
