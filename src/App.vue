<template>
  <div id="app">
    <router-view></router-view>
    <!--可以让导航可以常驻页面，避免路由切换时导航也切换同时其他页面就不用再引入公共底部了-->
    <!-- v-show="$route.meta.showFooter"-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide
    },


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
