<template>
    <footer>
      <ul>
        <li>
          <a href="javascript:;" @click="goTo('/home')" :class="{on:$route.path === '/home'}">
            <span class="iconfont icon-icon_home"></span>
            <b>首页</b>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="goTo('/sort')" :class="{on:$route.path === '/sort'}">
            <span class="iconfont icon-fenlei"></span>
            <b>分类</b>
          </a>
        </li>
        <li>
          <!--<a href="javascript:;"  @click="goTo('/knowledge')" :class="{on:$route.path === '/knowledge'}">-->
            <!--<span class="iconfont icon-xiazai40"></span>-->
            <!--<b>识物</b>-->
          <!--</a>-->
          <a href="javascript:;"  @click="goTo('/knowledge/knowledgeone')" :class="{on:$route.path === '/knowledge/knowledgeone'}">
            <span class="iconfont icon-xiazai40"></span>
            <b>识物</b>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="goTo('/shopcart')" :class="{on:$route.path === '/shopcart'}">
            <span class="iconfont icon-gouwuche"></span>
            <b>购物车</b>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="goTo('/personal')" :class="{on:$route.path === '/personal'}">
            <span class="iconfont icon-wode"></span>
            <b>我的</b>
          </a>
        </li>
      </ul>
    </footer>
</template>
<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  footer
    top-border-1px(#e4e4e4)
    position fixed
    bottom 0
    left 0
    z-index 99
    width 100%
    height 1.3rem
    background-color white
    ul
      display flex
      flex-direction row
      justify-content space-around
      li
        margin-top 0.1rem
        a
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          padding 0.1rem
          font-size .3rem
          color black
          span
            font-size .5rem
            margin-bottom .1rem
          &.on
           color #B4282D

</style>
