<template>
  <div class="shelf-item" style="position: relative;">
    <a class="item-pic-bx" v-if="content">
      <img class="item-pic" :src="content.pic">
    </a>
    <div class="item-panel">
      <div class="title clearFix" v-if="content">
        {{content.title}}
      </div>
      <div class="item-price">
        <div class="price-cont" v-if="content">
          <span >￥</span>
          <span>{{content.price}}</span>&nbsp;
          <span class="promo-lable">{{content.lable}}</span>
        </div>
        <div class="item-comment" v-if="content">{{content.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shelf-item
  width: 96%;
  border: 1px solid #ddd;
  margin: 2rem auto 0;
  .item-pic-bx
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
    .item-pic
      width: 100%;
      display: block;
      vertical-align: top;
      margin: 0 auto;
      position: static;
  .item-panel
    width: 100%;
    background: #fff;
    color: #333;
    padding-bottom: .3rem;
    overflow: hidden;
    font-size: 1.35rem;
    line-height: 2.6rem;
    .title
      width: 94%;
      overflow: hidden;
      margin: 0 auto;
      text-align: left;
      font-size: 1.35rem;
      color: #333;
      line-height: 2.6rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-top: .5rem;
    .item-price
      width: 94%;
      overflow: hidden;
      margin: 0 auto;
      .price-cont
        min-width: 68%;
        overflow: hidden;
        float: left;
        line-height: 1.8rem;
        margin-top: .2rem;
        text-align: left
        .promo-lable
          background-color: #c00;
          color: #fff;
          display: inline-block;
          padding: 1px 3px;
      .item-comment
        float: right;
        text-align: right;
        color: #999;
</style>
