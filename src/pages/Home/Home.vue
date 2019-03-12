<template>
  <div id="homeWrap">
    <nav class="homeNav">
      <HomeNavLogo/>
      <HomeNavUl :kingKongModule="kingKongModule"/>
    </nav>
    <HomeContent :sceneLightShoppingGuideModule="sceneLightShoppingGuideModule"
                  :personalShop="personalShop" :flashSaleModule="flashSaleModule"
                  :newItemList="newItemList" :topicList="topicList"/>
    <HomeFooter />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeNavLogo from '../../components/HomeNavLogo/HomeNavLogo'
  import HomeNavUl from '../../components/HomeNavUl/HomeNavUl'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'
  import HomeContent from '../HomeContent/HomeContent'

  export default {
    components:{
      HomeNavLogo,
      HomeNavUl,
      HomeContent,
      HomeFooter
    },
    mounted() {
      this.$store.dispatch('getHomeData')
    },
    computed:{

      ...mapState({
        kingKongModule : state => state.home.homeData.kingKongModule,
        sceneLightShoppingGuideModule : state => state.home.homeData.sceneLightShoppingGuideModule,
        personalShop : state => state.home.homeData.personalShop,
        flashSaleModule : state => state.home.homeData.flashSaleModule,
        newItemList : state => state.home.homeData.newItemList,
        topicList : state => state.home.homeData.topicList,

      }),

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  #homeWrap
    height 4650px
    background-color #F5F5F5
    .homeNav
      position fixed
      top 0
      left 0
      z-index 20
      width 100%
      height 2rem
      box-sizing border-box
      background-color white



</style>
