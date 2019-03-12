<template>
    <div id="homeContentWrap">
      <!--顶部轮播-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./imgs/1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/2.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/3.jpg" alt="">
          </div>
          <div class="swiper-slide">
              <img src="./imgs/4.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/5.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="homeContentCategory">
        <div class="homeContentCategoryCommit">
          <a href="javascript:;">
            <i class="iconfont icon-ziying"></i>
            <span>网易自营品牌</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-anquan"></i>
            <span>30天无忧退货</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-icon"></i>
            <span>48小时快速退款</span>
          </a>
        </div>
        <ul class="homeContentCategoryList">
          <li>
            <a href="javascript:;">
              <img src="./imgs/list1.png">
              <span>居家生活</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list2.png">
              <span>服饰鞋包</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list3.png">
              <span>美食酒水</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list4.png">
              <span>母婴亲子</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list5.png">
              <span>运动旅行</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list6.png">
              <span>数码家电</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list7.png">
              <span>服饰鞋包</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list8.png">
              <span>美食酒水</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list9.png">
              <span>礼品特色</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./imgs/list10.png">
              <span>超级会员</span>
            </a>
          </li>
        </ul>
        <div class="homeContentBigImg">
          <img src="./imgs/one.gif">
          <div class="doubleImg">
            <img src="./imgs/two.jpg" >
            <img src="./imgs/three.jpg">
          </div>
          <img src="./imgs/four.png">
        </div>
      </div>
      <ul class="homeContentFourGrey">
        <li v-for="(item,index) in sceneLightShoppingGuideModule" :key="index">
          <p class="p1">{{item.styleItem.title}}</p>
          <p class="p2">{{item.styleItem.desc}}</p>
          <div class="doubleImg">
            <img :src="item.styleItem.picUrlList[0]" alt="小图片">
            <img :src="item.styleItem.picUrlList[1]" alt="小图片">
          </div>
        </li>

      </ul>
      <!--私人订制-->
      <div class="homeContentSmallSwiper">
        <p class="title">私人订制</p>
        <div class="swiper-container smallSwiperContainer">
          <div class="swiper-wrapper smallSwiperWrapper">
            <div class="swiper-slide smallSwiperSlide" v-for="(item,index) in personalShopArr" :key="index">
              <div v-for="(i,index) in item" :key="index">
                <img :src="i.primaryPicUrl">
                <span>{{i.name}} <b>￥{{i.counterPrice}}</b> </span>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination smallSwiperPagination"></div>
        </div>
      </div>
      <!--限时购-->
      <div class="homeLimitedTimeShop">
        <div class="homeLimitedTimeShopTitle">
          <span>限时购</span>
          <span>00:33:31</span>
          <span>更多＞</span>
        </div>
        <ul class="homeLimitedTimeShopList" v-if="flashSaleModule">
          <li v-for="(item,index) in flashSaleModule.itemList" :key="index">
            <img :src="item.picUrl">
            <span>￥{{item.activityPrice}}  <del>￥{{item.originPrice}}</del> </span>
          </li>
        </ul>
      </div>
      <!--新品首发-->
      <div class="homeLimitedTimeShop">
        <div class="homeLimitedTimeShopTitle">
          <span>新品首发</span>
          <span>更多＞</span>
        </div>
        <ul class="homeLimitedTimeShopList">
          <li v-for="(item,index) in newItemListFilter" :key="index">
            <img :src="item.primaryPicUrl">
            <b>{{item.name}}<span>￥{{item.retailPrice}}</span></b>

          </li>
        </ul>
      </div>
      <!--专题精选-->
      <div class="homeContentTopic">
        <div class="homeContentTopicTitle">
          <span>专题精选</span>
          <a href="javascript:;">更多＞</a>
        </div>
        <div class="swiper-container homeContentTopicSwiper">
          <div class="swiper-wrapper" >
            <div class="swiper-slide homeContentTopicSwiperLi" v-for="(item,index) in topicList" :key="index">
              <img :src="item.itemPicUrl">
              <p class="ellipsis">{{item.title}}</p>
              <a>{{item.subtitle}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import '../../../static/css/swiper.min.css'

    export default {
      props:{
        sceneLightShoppingGuideModule:Array,
        personalShop:Array,
        flashSaleModule:Object,
        newItemList:Array,
        topicList:Array
      },
      computed:{
        //创建一个二维数组
        personalShopArr(){
          const {personalShop} = this
          let arr = []
          let smallArr = []
          if (personalShop){
            personalShop.forEach(item =>{
              //当小数组为空时  添加进大数组
              if (smallArr.length === 0){
                arr.push(smallArr)
              }
              //逐个往小数组填数据
              smallArr.push(item)
              //每页的显示数量为三个   小数组内的数据不超过三个
              if (smallArr.length === 3){
                smallArr = []
              }
            })
          }

          return arr
        },

        //过滤 裁剪成一个新数组
        newItemListFilter(){
         if (this.newItemList){
           return this.newItemList.slice(0,6)
         }
        }
      },
      mounted(){
        //swiper 轮播图
        let mySwiper = new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  #homeContentWrap
    width 750px
    height 100%
    margin-top 154px
    position relative
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          img
            width 750px
            height 400px

      .swiper-pagination
        position absolute
        bottom 40px


    .homeContentCategory
      background-color white
      padding 20px 0
      .homeContentCategoryCommit
        display flex
        justify-content space-around
        padding 10px 15px
        a
          color ($red)
      .homeContentCategoryList
        height 341px
        display flex
        margin-top 10px
        flex-direction row
        flex-wrap wrap
        justify-content space-around
        li
          margin 0.13rem 0.26rem
          a
            width 110px
            height 156px
            display flex
            flex-direction column
            align-items center
            img
              width 110px
              height 110px
              margin-bottom  10px



      .homeContentBigImg
        margin-top 30px
        img
          width 100%
          height 197px
          &:last-child
            width 100%
            height 160px
            margin-top 15px
        .doubleImg
          img
            float left
            width 50%
            height 204px
            margin-top 5px

    .homeContentFourGrey
      width 100%
      height 576px
      display flex
      flex-wrap wrap
      flex-direction row
      justify-content center
      align-items center
      background-color white
      li
        width 343px
        height 264px
        background-image url("./imgs/beijing.png")
        border-right 5px solid #ffffff
        box-sizing border-box
        padding 30px
        .p1
          font-size 32px
          margin-bottom 20px
        .p2
          margin-bottom 20px
        .doubleImg
          margin-left -10px
          display flex
          flex-direction row
          img
            width 150px
            height 150px




    .homeContentSmallSwiper
      width 100%
      height 470px
      padding 20px
      margin-top 20px
      background-color white
      .title
        font-size 32px
        margin 30px 0

      .smallSwiperContainer
        width 100%
        height 370px
        position relative
        .smallSwiperWrapper
          width 100%
          height 310px
          .smallSwiperSlide
            display flex
            flex-direction row
            justify-content space-around
            div
              display flex
              flex-direction column
              img
                width 216px
                height 261px
                margin-bottom 10px
              span
                color #333333
                b
                  color ($red)
        .smallSwiperPagination
          width 100%
          position absolute
          bottom 5px


    .homeLimitedTimeShop
      width 100%
      height 700px
      padding 20px 25px
      margin-top 20px
      background-color white
      .homeLimitedTimeShopTitle
        margin 30px 0
        span
          font-size 32px
          &:last-child
            float right
            margin-right 45px
            font-size 28px
      .homeLimitedTimeShopList
        li
          float left
          margin-right 20px
          width 216px
          height 299px
          img
            width 216px
            height 216px
            background-image url("./imgs/beijing.png")
            margin-bottom 10px
          span
            color ($red)
            del
              color #888888
    .homeContentTopic
      width 100%
      height 510px
      padding 0 30px
      margin-top 30px
      background-color white
      .homeContentTopicTitle
        width 100%
        height 100px
        line-height 100px
        font-size 32px
        display flex
        justify-content space-between
        a
          font-size 28px
          margin-right 50px
      .homeContentTopicSwiper
        width 100%
        height 408px
        .homeContentTopicSwiperLi
          width 480px
          height 378px
          font-size 28px
          margin-right 30px
          img
            width 480px
            height 269px
            margin-bottom 20px
          a
            font-size 20px
</style>
