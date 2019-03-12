<template>
  <div id="LoginPhoneWrap">
    <div class="LoginPhoneContent">
      <div class="LoginPhoneContentUp">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="LoginPhoneContentMiddle">
        <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone" >
        <br>
        <div class="LoginPhoneContentMiddleOne">
          <input type="text" placeholder="请输入短信验证码">
          <button :disabled="!isPhone" @click="">获取验证码</button>
        </div>
        <br>
        <div class="LoginPhoneContentMiddleTwo">
          <a href="javascript:;">遇到问题？</a>
          <a href="javascript:;">使用密码验证登录</a>
        </div>
      </div>
      <div class="LoginPhoneContentDown">
        <div class="personalContentPhone">
          <span class="iconfont icon-shouji">登录</span>
        </div>
        <div class="personalContentEmail">
          <span class="iconfont icon-youxiang" @click="goTo('/personal')">其他登录方式</span>
        </div>
        <a href="javascript:;">注册账号 ＞</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        phone:''
      }
    },
    methods:{
      goTo(path) {
        this.$router.replace(path)
      }
    },
    computed:{
      //验证手机号码格式
      isPhone(){
        return /^1[34578]\d{9}$/.test(this.phone)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #LoginPhoneWrap
    .LoginPhoneContent
      height 1256px
      background-color white
      .LoginPhoneContentUp
        height 200px
        line-height 200px
        text-align center
        img
          width 180px
          height 60px
          vertical-align middle

      .LoginPhoneContentMiddle
        padding 0 40px
        margin-top 100px
        font-size 28px
        input
          width 100%
          height 80px
          border-bottom 1px solid #eee
          margin-bottom 30px
          outline none
        .LoginPhoneContentMiddleOne
          position relative
          button
            position absolute
            right 10px
            top 0
            height 60px
            border-radius 10px
            background-color white
        .LoginPhoneContentMiddleTwo
          display flex
          justify-content space-between

      .LoginPhoneContentDown
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
