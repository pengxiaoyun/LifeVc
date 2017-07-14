<template>
  <div>

    <div class="header">
      <div class="header-content">

        <span class="btn-back" @click="historyBack">
          <label class="leftback-img"></label>
        </span>

        <p class="header-title">购物车</p>
      </div>
    </div>

    <div class="header-login-wrap">
      <div class="header-login">
        <router-link to="/login" class="btn-login">登录</router-link>
        <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
      </div>
    </div>

    <div class="header-exchange-wrap">
      <div class="header-exchange">
        <a href="javascript:;" id="hideAclick" style="display: none;"></a>
        <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
        <input type="button" value="兑换" class="exch-btn">
      </div>
    </div>

    <div class="wrap-cart">
      <div id="carts-img">
        <img src="./cart.png" alt="购物车" style="vertical-align: middle; max-width: 160px;">
      </div>
      <div id="carts-text">
        <p>您的购物车还是空荡荡的</p>
      </div>
      <div id="carts-link" style="text-align: center;">
        <a href="#" style="border: 1px solid rgb(137, 190, 72); padding: 0.5rem 1.5rem; display: inline-block; border-radius: 6px; font-size: 1.5rem; letter-spacing: 1px; margin-top: 6px; color: rgb(137, 190, 72);">赶紧去逛逛</a></div>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      historyBack () {
        history.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="true">
  .header
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 640px;
    margin: auto;
    .header-content
      width: 100%;
      margin: 0 auto;
      position: relative;
      .btn-back
        width: 10%;
        height: 3.8rem;
        position: absolute;
        left: 0;
        top: 0;
        .leftback-img
          left: 30%;
          width: 1rem;
          height: 2.6rem;
          display: block;
          float: left;
          background: url('./back.png') no-repeat;
          position: absolute;
          top: .6rem;

  .header-login-wrap
    width: 100%;
    height: 3rem;
    background-color: #f0fae6;
    padding: .8rem 0 .5rem;
    margin-top 4rem
    .header-login
      width: 74%;
      min-height: 2.8rem;
      display: table;
      overflow: hidden;
      margin: 0 auto;
      padding: 0 0 0 21%;
      position: relative;
      .btn-login
        width: 18%;
        height: 2.6rem;
        display: block;
        background: #fff;
        border: 1px solid #8bc146;
        text-align: center;
        font-size: 1.5rem;
        color: #88c13e;
        line-height: 2.5rem;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
      .login-tip
        width: 100%;
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        font-size: 1.4rem;
        color: #333;
        line-height: 1.5rem;

  .header-exchange-wrap
    width: 100%;
    height: 3.2rem;
    background-color: #fff;
    margin: 0;
    padding: .6rem 0 .5rem;
    border-bottom: 1px solid #f2f2f2;
    .header-exchange
      width: 93%;
      height: 3rem;
      overflow: hidden;
      margin: .1rem auto 0;
      padding: 0;
      position: relative;
      .exch-ipt
        padding-left: 10px;
        width: 80%;
        height: 2.8rem;
        line-height: 2.8rem;
        display: inline-block;
        border-radius: 0;
        border: 1px solid #e7e7e7;
        background: #fff;
        text-align: left;
        font-size: 1.4rem;
      .exch-btn
        width: 20%;
        height: 3rem;
        line-height: 3rem;
        display: inline-block;
        border-radius: 0;
        background: #fff;
        text-align: center;
        font-size: 1.6rem;
        color: #6fbd00;
        letter-spacing: .1rem;
        text-indent: .2rem;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        border: 1px solid #6fbd00;
  .wrap-cart
    width: 100%;
    overflow: hidden;
    margin-top: 4rem;
    margin-bottom: 10rem;
    #carts-img
      margin 0 auto
      padding-left: 2rem;
      padding-top: 10px;
      box-sizing: border-box;
      text-align: center;
    #carts-text
      text-align: center;
      font-size: 1.8rem;
      color: rgb(102, 102, 102);
      line-height: 3rem;
    #carts-link
      a
        border: 1px solid rgb(137, 190, 72);
        padding: 0.5rem 1.5rem;
        display: inline-block;
        border-radius: 6px;
        font-size: 1.5rem;
        letter-spacing: 1px;
        margin-top: 6px;
        color: rgb(137, 190, 72);
</style>
