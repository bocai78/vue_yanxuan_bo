<template>
    <div>
      <div class="personalContent">
        <div class="personalContentHeader">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
        <div class="personalContentMiddle">
          <div class="personalContentPhone" @click="goTo('/personal/loginphone')">
            <span class="iconfont icon-shouji">手机号码登录</span>
          </div>
          <div class="personalContentEmail" @click="goTo('/personal/loginemail')">
            <span class="iconfont icon-youxiang">邮箱账号登录</span>
          </div>
          <a href="javascript:;">手机号快捷注册 ＞</a>
        </div>
        <div class="personalContentFooter">
          <span class="iconfont icon-weixin">&nbsp;微信</span>
          <span class="iconfont icon-qq">&nbsp;QQ</span>
          <span class="iconfont icon-weibo">&nbsp;微博</span>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      methods: {
        goTo(path) {
          this.$router.replace(path)
        },
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .personalContent
    height 1256px
    background-color #F2F5F4
    .personalContentHeader
      height 408px
      line-height 408px
      text-align center
      img
        width 268px
        height 90px
        vertical-align middle
    .personalContentMiddle
      height 400px
      padding 0 40px
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

    .personalContentFooter
      height 400px
      line-height 600px
      text-align center
      color grey
      span
        display inline-block
        width 160px
        height 40px
        line-height 40px
        border-right 2px solid grey
        &:last-child
          border-right 0
</style>
