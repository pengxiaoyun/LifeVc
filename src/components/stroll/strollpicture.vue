<template>
<div>

  <div class="stroll-item" v-if="strolls" ref="strolls">
    <div class="stroll-type-item" v-for="stroll in strolls">
      <div class="stroll-item-layer">
        <img class="stroll-item-img" :src="stroll.pic" v-lazy.strolls="stroll.pic">
        <span class="tag-new">New</span>
      </div>
      <h3 class="stroll-item-title">
        <a href="">{{stroll.title}}</a>
      </h3>
      <div class="stroll-price-bar">
        <span class="price">￥<em>{{stroll.price}}</em></span>
        <span class="comment">{{stroll.comment}}</span>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  import Vue from 'vue'
  import { Lazyload } from 'mint-ui';

  Vue.use(Lazyload);
  export default {
    props: {
      strolls: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .stroll-item
    margin: 3%;
    width: 94%;
    .stroll-type-item
      margin: 0 1%;
      .stroll-item-layer
        position: relative;
        border-radius: 8px;
        .stroll-item-img
          border-radius: 8px;
          width 100%
        .tag-new
          background-color: #79da87;
          max-width: 94%;
          overflow: hidden;
          display: inline-block;
          text-align: left;
          font-size: .8rem;
          color: #fff;
          line-height: 1.4rem;
          text-transform: uppercase;
          padding: 0 .5rem;
          position: absolute
          left: 0;
          top: .8rem;
          z-index: 6;
          white-space: nowrap;
          word-break: keep-all;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;


      .stroll-item-title
        font-size: .95rem;
        padding: .4rem 0 .2rem;
        overflow: hidden;
        white-space: nowrap;
        word-break: keep-all;
        text-overflow: ellipsis;
        a
          color: #333;
          text-decoration: none;
          font-size: 1.35rem;
      .stroll-price-bar
        text-align: left;
        width: 100%;
        font-size: .9rem;
        height: 1.5rem;
        overflow: hidden;
        .price
          font-size: 1.8rem;
          line-height: 1.5rem;
          display: inline-block;
          color: #ff475d;
          font-weight: 400;
          overflow: hidden;
          text-align: left;
          width: auto;
          padding-right: 1rem;
        .comment
          font-size: 1.4rem;
          line-height: 1.5rem;
          width: auto;
          max-width: none;
          overflow: hidden;
          float: right;
          display: inline-block;
          text-align: right;
          color: #999;
          white-space: nowrap;
          word-break: keep-all;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
</style>
