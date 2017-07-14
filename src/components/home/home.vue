<template>
  <div>

    <div class="header">
      <div class="wrap-heard">
        <div class="header-Ico"></div>
        <router-link to="/all">
          <span class="head-typeimg"></span>
        </router-link>
      </div>

      <div title="分类导航条" class="wrap-menuNavNewProduct">
        <div id="navPanelDiv" ref="nav" class="menuNavNewProductPanel">
          <ul ref="navUL" class="menuNavNewProduct" style="width: 800px;" >
            <router-link to="/home/homobody">
              <li class="font-large">首页</li>
            </router-link>
            <router-link to="/home/new">
              <li class="font-large">新品</li>
            </router-link>
            <router-link to="/home/channel/2860">
              <li class="font-large">家务</li>
            </router-link>
            <router-link to="/home/channel/2859">
              <li class="font-large">下厨</li>
            </router-link>
            <router-link to="/home/channel/2865">
              <li class="font-large">家居服</li>
            </router-link>
            <router-link to="/home/channel/2861">
              <li class="font-large">生活</li>
            </router-link>
            <router-link to="/home/channel/3260">
              <li class="font-large">软装</li>
            </router-link>
            <router-link to="/home/channel/2862">
              <li class="font-large">床品</li>
            </router-link>
            <router-link to="/home/channel/2863">
              <li class="font-large">工作和旅行</li>
            </router-link>
            <li class="font-large" style="color: #333;" @click="changeShow">了解LifeVC</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="helpone"></div>

    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <div class="home-body">
        <router-view></router-view>
      </div>
    </mt-loadmore>

    <div class="helponet"></div>
    <LifeVc v-show="willShow"></LifeVc>

  </div>

</template>

<script>
  import Vue from 'vue';
  import BScroll from 'better-scroll'
  import { Loadmore } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  import LifeVc from '../lifevc/lifevc.vue'

  export default {
    data () {
      return {
        willShow: false,
        allLoaded: false
      }
    },
    created(){
      Vue.nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        new BScroll(this.$refs.nav, {
          scrollX: true,
          click: true
        })
      },
      changeShow () {
        this.willShow = !this.willShow
      },
      loadTop() {
        // load more data
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
        },1500)
//
      },
      loadBottom() {
        // load more data
        this.allLoaded = true;// if all data are loaded
//        this.$refs.loadmore.onBottomLoaded();
      }
    },
    components: {
      LifeVc
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .helpone
    width 100%
    height 8rem

  .helponet
    width 100%
    height 3rem

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
    a
      color: #333
    .header-content
      width: 100%;
      margin: 0 auto;
      position: relative;
    .wrap-heard
      width: auto;
      height: 4rem;
      background: #89be48;
      .header-Ico
        display: block;
        width: 100%;
        height: 4rem;
        background: url('./homeicon.png') no-repeat;
        background-size: 50%;
        background-position: 50%;
      .head-typeimg
        width: 3.666666rem;
        height: 3.666666rem;
        display: block;
        float: right;
        position: absolute;
        z-index: 1000;
        top: 0;
        right: 0;
        background-size: 45%;
        background-image: url('./head-typeimg.png');
        background-repeat: no-repeat;
        background-position: 50%;

    .wrap-menuNavNewProduct
      position: relative;
      z-index: 1100;
      background: #fff;
      .menuNavNewProductPanel
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 4rem;
        overflow: hidden;
        .menuNavNewProduct
          height: 4rem;
          box-sizing: border-box;
          position: relative;
          float: left;
          z-index: 1101;
          overflow: hidden;
          line-height: 4rem;
          li
            width: 80px;
            text-align: center;
            height: 4rem;
            float: left;
            border-bottom 2px solid #ababab;
            box-sizing: border-box;
          a
            height: 3.8rem;
            display: block;
            line-height: 3.8rem;
            padding: 0;
            position: relative;
            font-size: 1.35rem;
            float left
          .selected
            color: #80b532
            li
              border-bottom 2px solid #80b532

  .home-body
    width: 100%;
    color: #2e2e2e;

</style>
