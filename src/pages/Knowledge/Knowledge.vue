<template>
    <div id="knowledgeWrap">
      <nav class="knowledgeNav">
        <span class="iconfont icon-icon_home" @click="goTo('/home')"></span>
        <div>
          <a href="javascript:;" @click="goTo('/knowledge/knowledgeone')" :class="{on:$route.path === '/knowledge/knowledgeone'}">发现</a>
          <a href="javascript:;" @click="goTo('/knowledge/knowledgetwo')" :class="{on:$route.path === '/knowledge/knowledgetwo'}">甄选家</a>
        </div>
        <p>
          <span class="iconfont icon-iconss" @click="goTo('/home')"></span>
          <span class="iconfont icon-gouwuche1" @click="goTo('/shopcart')"></span>
        </p>
      </nav>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import KnowledgeOne from './KnowledgeOne/KnowledgeOne'
  import KnowledgeTwo from './KnowledgeTwo/KnowledgeTwo'

    export default {
    components:{
      KnowledgeOne,
      KnowledgeTwo
    },
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #knowledgeWrap
    height 2000px
    background-color #888888
    .knowledgeNav
      position fixed
      top 0
      left 0
      width 95%
      padding 20px
      display flex
      justify-content:space-between
      background-color #fafafa
      span
        font-size 54px
        color #888888
      div
        font-size 32px
        padding-left 100px
        padding-top 10px
        a
          &.on
            font-size 40px
            font-weight bold
            color #B4282D
      p
        span
          margin-left 20px
</style>
