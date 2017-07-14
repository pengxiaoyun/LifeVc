<template>
  <div>
    <div class="header">
      <div class="header-content">
        <p class="header-title">账户中心</p>
        <a href="#">
          <label class="editcart">
            <router-link to="/setting">设置</router-link>
          </label>
        </a>
      </div>
    </div>

    <div class="helpthree"></div>
    <mt-loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <div class="uscenter-cont life-module">

        <div class="acct-user-wrap">
          <div class="acct-nolog">
            <span class="state">您还未登录</span>
            <div class="btn-entry">
              <router-link to="/login" class="font-large">登录</router-link>
              <span class="split"></span>
              <router-link to="/register" class="font-large">注册</router-link>
            </div>
          </div>
        </div>

        <div class="dashboard-order life-dashboard-order">
          <ul>
            <li>
              <a href="#">
                      <span class="item-ico">
                        <span class="ico" id="ico1"></span>
                      </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
            <li>
              <a href="#">
                      <span class="item-ico">
                        <span class="ico" id="ico2"></span>
                      </span>
                <span class="item-title">待发货</span>
              </a>
            </li>
            <li>
              <a href="#">
                      <span class="item-ico">
                        <span class="ico" id="ico3"></span>
                      </span>
                <span class="item-title">待收货</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                      <span class="item-ico">
                        <span class="ico" id="ico4"></span>
                      </span>
                <span class="item-title">待评论</span>
              </a>
            </li>
            <li>
              <a href="#">
                      <span class="item-ico">
                        <span class="ico" id="ico5"></span>
                      </span>
                <span class="item-title">回复</span>
              </a>
            </li>
            <li>
              <a href="#">
                      <span class="item-ico">
                        <span class="ico" id="ico6"></span>
                      </span>
                <span class="item-title">退换货</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="dashboard">
          <ul>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_list_cm.png" class="item-i">
                <span class="item-title">我的订单</span>
                <span class="arr-r"></span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_coupon_cm.png" class="item-i">
                <span class="item-title">我的优惠券</span>
                <span class="arr-r"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_pig_cm.png" class="item-i">
                <span class="item-title">现金积分</span>
                <span class="arr-r"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_invoice.png" class="item-i">
                <span class="item-title">关于发票</span>
                <span class="arr-r"></span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/i_gear_cm.png" class="item-i">
                <span class="item-title">密码和登录信息</span>
                <span class="arr-r"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/i_dialoguebubble3_cm.png" class="item-i">
                <span class="item-title">老会员建议</span>
                <span class="arr-r"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/i_customerservice_cm.png" class="item-i">
                <span class="item-title">客户服务</span>
                <span class="arr-r"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_currentnode_cm.png" class="item-i">
                <span class="item-title">地址管理</span>
                <span class="arr-r"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/sms_cm.png" class="item-i">
                <span class="item-title">手机验证</span>
                <span class="arr-r"></span>
              </a>
            </li>
          </ul>
        </div>

        <div class="acct-logout" style="display: none;">
          <input type="button" value="退出当前账号" class="btn btn-logout">
        </div>

      </div>
    </mt-loadmore>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);

  export default {
    data () {
      return {
        allLoaded: false
      }
    },
    methods: {
      loadTop() {
        // load more data
        setTimeout( () => {
          this.$refs.loadmore.onTopLoaded()
        },1500)
          this.allLoaded = true
//        this.$refs.loadmore.onTopLoaded()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .helpthree
    width 100%
    height 4rem
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
      .header-title
        margin: 0 auto;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      .editcart
        font-size: 1.8rem;
        color: #fff;
        line-height: 4rem;
        margin-right: 2%;
        position: absolute;
        right: 2%;
        top: 0;
        z-index: 9;
        a
          color: #fff;
  .uscenter-cont
    width: 100%;
    margin: 0 auto;
    color: #2e2e2e;
    overflow: hidden;
    padding-bottom 4.5rem
    .acct-user-wrap
      width: 100%;
      height: 9rem;
      background-image: url(http://i1.lifevccdn.com/images/h5/core/background.png);
      background-size: 100% 100%;
      .acct-nolog
        width: 100%;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        padding: .5rem 0 0;
        .state
          text-align: center;
          font-size: 1.6rem;
          line-height: 3rem;
          display: block;
          color: #222;
        .btn-entry
          display: inline-block;
          color: #009c42;
          padding: 0 10px;
          height: 3rem;
          background: hsla(0,0%,100%,.4);
          border: 1px solid #009c42;
          border-radius: 1.5rem;
          margin: .5rem auto 0;
          a
            display: inline-block;
            color: #009c42;
            padding: 0 10px;
            text-align: center;
            font-size: 1.6rem;
            line-height: 3rem;
          .split
            width: 1px;
            height: 1.2rem;
            display: inline-block;
            border-left: 1px solid #009c42;
    .dashboard-order
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border-top: 1px solid #eee;
      margin: 0 auto;
      ul
        width: 100%;
        height: 5rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        margin: 0;
        padding: 0;
        li
          width: 33%;
          height: 2.5rem;
          float: left;
          border-right: 1px solid #dedede;
          line-height: 2rem;
          margin: 1.5rem 0 0;
          padding: 0;
          a
            display: block;
            text-align: center;
            color: #585858;
            text-decoration: none;
            padding: 0;
            .item-ico
              display: inline-block;
              position: relative;
              .ico
                display: inline-block;
                height: 3rem;
                width: 3.5rem;
                background-repeat: no-repeat;
                background-size: 99% 120%;
              #ico1
                background-position: -5px -7px;
                background-image: url("./icon1.png")
              #ico2
                background-position: 2px -7px;
                background-image: url("./icon2.png")
              #ico3
                background-position: -2px -7px;
                background-image: url("./icon3.png")
              #ico4
                background-position: -6px -7px;
                background-image: url("./icon4.png")
              #ico5
                background-position: -6px -4px;
                background-image: url("./icon5.png")
              #ico6
                background-position: -6px -7px;
                background-image: url("./icon6.png")
            .item-title
              display: inline-block;
              vertical-align: 56%;
              font-size: 1.2rem;
              color: #585858;
              line-height: 2.5rem;
              text-decoration: none;
    .dashboard
      ul
        margin-bottom: 1rem;
        background-color: #fff;
      li
        a
          width: 100%;
          height: 5rem;
          display: block;
          .item-i
            width: 2.5rem;
            overflow: hidden;
            display: inline-block;
            float: left;
            margin: 1.3rem 1.1rem 0;
          .item-title
            display: inline-block;
            line-height: 5rem;
            text-decoration: none;
          .arr-r
            width: 10px;
            height: 10px;
            display: inline-block;
            float: right;
            border-right: 2px solid #bbb;
            border-top: 2px solid #bbb;
            margin: 25px 10px 0 0;
            transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -o-transform: rotate(45deg);
</style>
