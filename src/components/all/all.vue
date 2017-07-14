<template>
  <div>

    <div id="topbar" class="header" style="top: 0px;">
      <div class="header-content">
        <p class="header-title">全部产品</p>
      </div>

      <div id="wrap" class="search-panel">
        <div class="search-bar" v-show="isShow" @click="changeStyle">
          <form>
            <input type="search" placeholder="搜索商品" class="searchinput">
            <input type="button" value="取消" class="sch-cancel">
          </form>
        </div>
        <div class="search-bar" v-show="!isShow">
          <form>
            <input type="search" placeholder="搜索商品" class="searchinputchange">
            <input type="button" value="取消" class="sch-cancel" @click="changeStyle">
          </form>
        </div>
      </div>

    </div>

      <div class="content-wrap">
        <div class="life-module">

          <div class="life-goodsAll">
            <div class="life-goodsBox">
              <div class="life-goodsTip">
                <dl class="life-goodsMark">家务</dl>
              </div>
              <picture></picture>
            </div>
          </div>

          <div class="life-goodsAll">
            <div class="life-goodsBox">
              <div class="life-goodsTip">
                <dl class="life-goodsMark">家务</dl>
              </div>
              <picture></picture>
            </div>
          </div>

        </div>
      </div>

  </div>
</template>

<script>
  import picture from '../picture/picture.vue'
  export default {
    data () {
      return {
        isShow : true
      }
    },
    methods: {
      changeStyle () {
        this.isShow = !this.isShow
      }
    },
    components:{
      picture
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
    .search-panel
      background-color: #f2f2f2;
      padding: .5rem 0;
      .search-bar
        width: 94%;
        height: 3rem;
        overflow: hidden;
        border-radius: 6px;
        margin: 0 auto;
        padding: 0;
        position: relative;
        .searchinput
          width: 100%;
          height: 3rem;
          background-color: #fff;
          background-image: url('./search.png')
          background-repeat: no-repeat;
          background-position: 38% .5rem;
          background-size: auto 70%;
          border: 0;
          border-radius: 6px;
          text-align: center;
          font-size: 1.6em;
          color: #1f5350;
          font-family: Microsoft YaHei;
          margin: 0;
          padding-left: 3rem;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
        .sch-cancel
          width: 15%;
          height: 3rem;
          display: block;
          float: right;
          background: none;
          background-color: transparent;
          border: 0;
          text-align: right;
          font-size: 1.5rem;
          color: #83b842;
          line-height: 3rem;
  .content-wrap
    position: absolute;
    width: 100%;
    top: 96px;
    height: 516px;
    padding-bottom: 5rem;
    .life-module
      overflow: hidden;
      .life-goodsBox
        margin-top: 2rem;
        .life-goodsTip
          width: 10rem;
          line-height: 2.4rem;
          margin: auto;
          text-align: center;
          .life-goodsMark
            font-size: 1.8rem;
            letter-spacing: .2rem;
            position: relative;

  .searchinputchange
    width: 88%
    background-position: .4rem .5rem
    text-align: left
    height: 3rem;
    background-color: #fff;
    background-image: url('./search.png')
    background-repeat: no-repeat;
    background-size: auto 70%;
    border: 0;
    border-radius: 6px;
    font-size: 1.6em;
    color: #1f5350;
    font-family: Microsoft YaHei;
    margin: 0;
    padding-left: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
</style>
