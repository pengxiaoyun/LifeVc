<template>
  <div>
    <div class="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="footer">
        <ul class="footermenuNav">
          <li>
            <router-link to="/home">
              <div class="ico homeico"></div>
              <span class="lispan">首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/all" class="">
              <div class="ico typeico"></div>
              <span>全部产品</span>
            </router-link>
          </li>
          <li>
            <router-link to="/stroll" class="">
              <div class="ico strollico"></div>
              <span>闲逛</span>
            </router-link>
          </li>
          <li>
            <router-link to="/cart" class="">
              <div class="ico shoppingcartico"></div>
              <span>购物车</span>
            </router-link>
          </li>
          <li>
            <router-link to="/usercenter" class="">
              <div class="ico accountcenterico"></div>
              <span>账户中心</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="back-top" ref='goTop' @click='goTop' v-show = 'toTop'></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import { Loadmore } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  let timer = null
  let stop = false
  export default {
    data () {
      return {
        stop: false,
        toTop: false,
        dataTimer: null,
        dataStop: false
      }
    },

    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.needToTop);  //滚动事件监听
      });
    },
    methods: {
      goTop: function () {
        clearInterval(timer)
        timer = setInterval(function () {
          let curHeight = document.documentElement.scrollTop || document.body.scrollTop  // 得到当前高度
          let now = curHeight
          let speed = (0 - now) / 7
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
          if (curHeight === 0) {//当前高度为零,停止这次计时器
            clearInterval(timer)// C1
          }
          document.documentElement.scrollTop = curHeight + speed//直接给高度赋值,会调用needtotop方法
          document.body.scrollTop = curHeight + speed//谷歌的
          stop = false
        }, 30)
      },
      needToTop: function() {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
        let viewHeight = document.documentElement.clientHeight;
        if (curHeight > viewHeight + 100) {
          this.toTop = true;                         //赋值是为了按钮的v-show='toTop'
        }
        else {
          this.toTop = false;
        }
        if (stop) {//STOP
          clearInterval(timer)
        }
        stop = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    height: auto;
    overflow: visible;
    .footer
      padding 0
      position: fixed
      bottom: 0
      height 4.5rem
      z-index 900
      width 100%
      background #f8f8f8
      border-top .04rem solid #ddd
      .footermenuNav
        margin: 0;
        padding: 0;
        background: #f8f8f8;
        text-align: center;
        li
          width: 20%;
          float: left;
          margin: 0 auto;
          position: relative;
          .selected
            color: #009c42;
            .homeico
              background-image  url("./homegreen.png")
            .typeico
              background-image  url("./goodsgreen.png")
            .strollico
              background-image  url("./strollgreen.png")
            .shoppingcartico
              background-image  url("./cartgreen.png")
            .accountcenterico
              background-image  url("./usergreen.png")
          a
            margin-top: 0;
            display: block;
            line-height: .1rem;
            font-size: 1.1rem;
            vertical-align: bottom;
            text-align: center;
            text-decoration: none;

          .ico
            width: 100%;
            height: 3.3rem;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 28%;
            margin-bottom: .2rem;
          .homeico
            background-image  url("./homeico.png")
          .typeico
            background-image  url("./typeico.png")
          .strollico
            background-image  url("./strollico.png")
          .shoppingcartico
            background-image  url("./shoppingcartico.png")
          .accountcenterico
            background-image  url("./accountcenterico.png")
  .back-top
    position fixed
    bottom 8rem
    right 2rem
    width: 6rem;
    height: 5rem;
    background-image  url("./backtop.png")
    background-size 100%
    background-repeat no-repeat
</style>
