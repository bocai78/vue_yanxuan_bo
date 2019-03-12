<template>
  <div class="homeNavLogo">
    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
         alt="logo" class="logo">
    <div>
      <span class="iconfont icon-sousuo"></span>
      <input type="text" placeholder="搜索好物">
    </div>
    <button>登录</button>
  </div>
</template>
<script>
    export default {


    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .homeNavLogo
    display flex
    flex-direction row
    justify-content space-around
    height 1rem
    padding .2rem
    .logo
      width: 1.84rem;
      height: .53333rem;
      margin-top .2rem
      margin-left .2rem
    div
      width 6rem
      height .5rem
      font-size .4rem
      position relative
      span
        position absolute
        left .5rem
        top .25rem
        font-size .2rem
      input
        width 5rem
        height .8rem
        padding-left .7rem
        border-radius .2rem
        margin-left .2rem
        background-color #EDEDED
    button
      width 1.2rem
      height .6rem
      margin-top .1rem
      border-radius .15rem
      border .05rem solid ($rem)
      font-size .2rem
      color ($red)
      background-color rgba(255,255,255,.6)


</style>
