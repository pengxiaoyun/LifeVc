<template>
  <div>
    <div class="header">
    <div class="header-content">
      <p class="header-title">闲逛</p>
    </div>
  </div>
    <div class="helptwo"></div>

    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <div class="home-body">

        <div class="clearFix">
          <div class="stroll-all-item">
            <strollPicture></strollPicture>
            <strollPicture></strollPicture>
          </div>
          <div class="stroll-all-item">

            <div class="stroll-item">
              <div class="strollmenu-a"><span>49元包1年</span></div>
              <div class="strollmenu-a"><span>今日新品</span></div>
              <div class="strollmenu-a"><span>送500元积分</span></div>
              <div class="strollmenu-a"><span>金币商城</span></div>
            </div>

            <strollPicture></strollPicture>
            <strollPicture></strollPicture>
          </div>
        </div>

      </div>
    </mt-loadmore>

    <div class="helptwot"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);

  import strollPicture from './strollpicture/strollpicture.vue'

  export default {
    data () {
      return {
        allLoaded: false
      }
    },
    components: {
      strollPicture
    },
    methods: {
      loadTop() {
      // load more data
//        this.$refs.loadmore.onTopLoaded()
        setTimeout(()=> {
          this.$refs.loadmore.onTopLoaded()
        },1500)
      },
      loadBottom() {
      // load more data
        this.allLoaded = true;// if all data are loaded
//        this.$refs.loadmore.onBottomLoaded();
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .helptwo
    width 100%
    height 4rem
  .helptwot
    width 100%
    height 4.5rem
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


  .scrollerwrap
    margin-bottom 4rem
  .home-body
    width: 100%;
    color: #2e2e2e;
    .clearFix
      background: white;
      display flex
      width 100%
    .stroll-all-item
      flex 1
      width 50%
      .stroll-item
        width 100%
        height: 10rem;
        .strollmenu-a
          width: 45%;
          min-height: 3rem;
          background-color: #eaeaea;
          border-radius: 8px;
          font-size: 1.35rem;
          color: #4a4a4a;
          padding: .95rem .5%;
          display: inline-block;
          margin: 1%;
          float: left;
          text-align: center;
          vertical-align: middle;
          span
            display: inline-block;
            margin-top: 1rem;
</style>
