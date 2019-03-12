<template>
    <div id="homeFooter">
      <div class="homeFooterUp">
        <div>下载APP</div>
        <div>电脑版</div>
      </div>
      <div class="homeFooterDown">
        <p>网易公司版权所有 © 1997-2009</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #homeFooter
    width 100%
    height 244px
    padding 30px 0
    background-color #414141
    margin-bottom 50px
    .homeFooterUp
      display flex
      flex-direction row
      justify-content center
      align-items center
      margin-top 30px
      div
        width 172px
        height 62px
        line-height 62px
        text-align center
        margin-right 30px
        color white
        border 2px solid grey
        border-radius 5px
    .homeFooterDown
      margin-top 40px
      text-align center
      p
        color #888888
        margin-bottom 10px
        text-align center
</style>
