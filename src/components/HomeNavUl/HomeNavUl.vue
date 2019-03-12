<template>
    <div class="homeNavUl">
      <ul class="homeNavList" v-if="kingKongModule">
        <!--<li class="on">-->
          <!--推荐-->
        <!--</li>-->
        <li v-for="(item,index) in kingKongModule.kingKongList" :key="index">
          {{item.text}}
        </li>

      </ul>
     <transition name="move">
       <p class="homeNavUlDown" @click="show=!show">
         <span class="iconfont icon-xiangxia"></span>
       </p>
     </transition>
      <div class="homeNavMask" v-show="show">
        <p class="allTitle">全部频道</p>
        <ul>
          <li>
            <a href="javascript:;">推荐</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:;">家用电器</a>
          </li>
          <li>
            <a href="javascript:;">美食酒水</a>
          </li>
          <li>
            <a href="javascript:;">孕婴护理</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">特色服务</a>
          </li>
          <li>
            <a href="javascript:;">本地生活</a>
          </li>
        </ul>
      </div>
      <div class="homeMask" v-show="show"></div>

    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      kingKongModule:Object
    },
    data(){
      return{
        show:false
      }
    },

    mounted(){

    },
    watch:{
      kingKongModule(){
        //注意创建滚动的时机   动态获取数据是异步的  要加监视 在获取完成后创建滚动
        this.$nextTick(() =>{
          new BScroll('.homeNavUl',{
            click:true,
            scrollX:true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .homeNavUl
    width 10rem
    .homeNavList
      font-size .35rem
      display flex
      flex-direction row
      width 18rem
      li
        margin 0 .2rem
        width 1.6rem
        text-align center
        height 0.6rem
        &.on
          color ($red)
          border-bottom .05rem solid ($red)
    .homeNavUlDown
      z-index 12
      width 1.6rem
      height .6rem
      line-height .5rem
      padding-left .2rem
      background-color white
      text-align center
      position fixed
      right 0
      top 1.4rem
      .iconfont icon-xiangxia
        &.move-enter-active, &.move-leave-active
          transition all .5s
        &.move-enter, &.move-leave-to
          transform rotate(180deg)
    .homeNavMask
      position absolute
      top 1.1rem
      left 0
      z-index 10
      border-top .05rem solid #fafafa
      height 5rem
      padding-top .2rem
      background-color white
      .allTitle
        height 1rem
        margin-left: .2rem
        font-size .4rem
      ul
        li
          float left
          width 2rem
          height .7rem
          line-height .7rem
          background-color #fafafa
          text-align center
          margin .3rem .2rem


    .homeMask
      position relative
      z-index 9
      width 100%
      height 1500px
      background-color rgba(0,0,0,.7)
</style>
