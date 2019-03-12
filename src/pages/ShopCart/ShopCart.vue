<template>
  <div class="cart-wrapper">
    <div class="cart-header">
      <span class="cart-title">购物车</span>
      <div class="getCoupon">领券</div>
    </div>
    <div class="cart-content">
      <div class="cart-slogan">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮费</span>
      </div>
      <div class="cart-img"></div>
      <div class="goLogin">
        <div class="hint">去添加点什么吧</div>
        <div class="loginBtn">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart-wrapper
    // 撑开高度
    position fixed
    top 0
    bottom 0
    width: 100%
    background-color: #f4f4f4
    .cart-header
      width: 100%
      height: 88px
      line-height: 1.2rem
      position fixed
      top: 0
      left: 0
      background-color #fff
      text-align center
      .cart-title
        font-size: .48rem
      .getCoupon
        position absolute
        right .8rem
        top 50%
        transform translateY(-50%)
        color: #B4282D;
        font-size .4rem


    .cart-content
      padding-top 88px
      width: 100%
      text-align center
      .cart-slogan
        margin-top .4rem
        width: 100%
        display flex
        justify-content: space-around
        span
          font-size: .32rem;
          color: #666;
      .cart-img
        display: inline-block;
        margin-top 5rem
        width: 3.30667rem;
        height: 3.30667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
      .goLogin
        .hint
          margin-bottom: .66667rem;
          line-height: 1;
          font-size: .37333rem;
          color: #999;
        .loginBtn
          margin: auto;
          width: 6.4rem;
          height: 1.22667rem;
          font-size: .4rem;
          line-height: 1.22667rem;
          color: #fff;
          background-color: #b4282d;
          border-radius: .04rem;
</style>
