<template>
  <div>
    <div id="lifevc" ref="introduce">
      <div class="mint-popup-right" style="z-index: 2001;">

        <div class="header">
          <div class="header-content">

            <span class="btn-back" @click="hidden">
              <label class="leftback-img"></label>
            </span>

            <p class="header-title">了解LifeVc</p>
          </div>
        </div>

        <div style="width: 100%; overflow: auto; height: 100%;">
          <iframe src="http://m.lifevc.com/home/help?c=service&amp;n=commitment" class="iframe-win" style="height: 592px; margin-top: 48px;"></iframe>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  export default {
    methods: {
      hidden () {
        this.$refs.introduce.style = 'display: none'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #lifevc
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate3d(0,-50%,0);
    z-index: 9999;
  .mint-popup-right
    position: fixed;
    top 0
    right 0
    bottom 0
    left 0
    background: #fff;
    webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
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

    .iframe-win
      border-top-width: 0;
      width: 100%;
      display: block;
      margin-bottom: 0;
</style>
