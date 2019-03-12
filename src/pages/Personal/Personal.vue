<template>
  <div id="personalWrap">
    <nav class="personalNav">
      <span class="iconfont icon-icon_home" @click="goTo('/home')"></span>
      <img
        src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
        alt="logo" class="logo" @click="goTo('/home')">
      <p>
        <span class="iconfont icon-iconss" @click="goTo('/home')"></span>
        <span class="iconfont icon-gouwuche1" @click="goTo('/shopcart')"></span>
      </p>
    </nav>

    <keep-alive>
      <router-view />
    </keep-alive>




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

  #personalWrap
    .personalNav
      padding 20px
      display flex
      justify-content: space-between
      background-color #fafafa
      span
        font-size 54px
        color #888888
      img
        width 160px
        height 50px
        padding-left 100px
      p
        span
          margin-left 20px

</style>
