<template>
  <div id="sortWrap">
    <nav class="sortNav">
      <span class="iconfont icon-sousuo1"></span>
      <input type="text" placeholder="搜索商品，共100000件好物">
    </nav>
    <section class="sortContent">
      <aside class="sortContentLeft" v-if="sortData">
        <ul>
          <li v-for="(item,index) in sortData" :key="index" @click="showIndexList(index)"
            :class="{on : obj === sortData[index]}">
            {{item.name}}
          </li>
        </ul>
      </aside>

      <article class="sortContentRight" v-if="obj">
        <div>
          <div class="sortContentRightTitleImg">
            <img :src="obj.imgUrl">
          </div>
          <ul class="sortContentRightList">
            <li v-for="(sub,index) in obj.subCateList" :key="index">
              <img :src="sub.wapBannerUrl">
              <span>{{sub.name}}</span>
            </li>
          </ul>
        </div>

      </article>

    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data(){
      return{
        obj:{}
      }
    },
    mounted() {

      this.$store.dispatch('getSortData',() =>{
        this.$nextTick(() =>{

          new BScroll('.sortContentLeft',{
              click:true,
            })

          new BScroll('.sortContentRight',{
            click:true,
          })
        })
      })

    },
    computed: {
      ...mapState({
        sortData: state => state.sort.sortData,
      }),
    },
    watch:{
      //初始显示列表
      sortData(){
          this.obj = this.sortData[0]
      }

    },
    methods:{
      showIndexList(index){
        let obj = this.obj
        let result =  this.sortData[index]
        this.obj = result

        return obj
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #sortWrap
    height 1334px
    padding-top 90px
    box-sizing border-box
    .sortNav
      padding 20px 30px
      position fixed
      top 0
      left 0
      font-size 28px
      border-bottom 1px solid #EDEDED
      background-color white
      span
        position absolute
        top 28px
        left 150px
        font-size 45px
      input
        width 370px
        height 56px
        padding 0 160px
        background-color #EDEDED
        border-radius 10px

    .sortContent
      /*margin-top 95px*/
      display flex
      flex-direction row
      padding-top 30px
      height:100%
      .sortContentLeft
        width 162px
        height 800px
        font-size 28px
        overflow hidden
        ul
          li
            width 150px
            height 50px
            line-height 50px
            padding 0 20px
            margin-top 30px
            &.on
              color #AB2B2B
              border-left 5px solid #AB2B2B

      .sortContentRight
        width 588px
        height 1000px
        padding 0 30px
        overflow: hidden
        .sortContentRightTitleImg
          width 528px
          height 192px
          img
            width 528px
            height 192px
        .sortContentRightList
          width 528px
          /*height 1000px*/
          margin 30px 0
          display flex
          flex-direction row
          flex-wrap wrap
          li
            display flex
            flex-direction column
            align-items center
            margin-right 30px
            height 216px
            img
              width 144px
              height 144px

</style>
