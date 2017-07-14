<template>
  <div>

    <div class="item-banner">
      <mt-swipe class="swiper-wrapper" :auto="2000">
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper1.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper2.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper3.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper4.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper5.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper6.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper7.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-slide" >
          <a>
            <img src="./swiper8.jpg">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="item-combo">
      <div title="组合图活动">
        <div class="combo-title"></div>
        <div class="img-wrap" style="width: 100%; height: 90px;">
          <img src="./planetmap0.jpg" style="width: 100%; height: 90px;">
          <!--<map name="planetmap0" id="planetmap0">-->
          <!--<area shape="rect" coords="0,9,123,88">-->
          <!--<area shape="rect" coords="123,9,251,90">-->
          <!--<area shape="rect" coords="251,9,375,89">-->
          <!--</map>-->
        </div>
      </div>
    </div>

    <itemCombo></itemCombo>
    <itemCombo2></itemCombo2>
    <itemCombo3></itemCombo3>
    <itemCombo4></itemCombo4>
  </div>

</template>

<script>
  import Vue from 'vue';

  import itemCombo from '../itemCombo/itemcombo.vue'
  import itemCombo2 from '../itemCombo/itemcombo2.vue'
  import itemCombo3 from '../itemCombo/itemcombo3.vue'
  import itemCombo4 from '../itemCombo/itemcombo4.vue'

  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem,
      itemCombo,
      itemCombo2,
      itemCombo3,
      itemCombo4,
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
      .item-banner
        width 100%
        height 250px
        img
          width 100%
          height 250px

      .item-combo
        margin-bottom: 1rem;
</style>
