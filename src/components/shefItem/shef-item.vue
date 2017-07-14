<template>
  <div class="shelf-item" style="position: relative;">
    <a class="item-pic-bx">
      <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg" lazy="loaded">
      <div class="item-status-empty" style="display: none;">
        热卖脱销
      </div>
    </a>
    <div class="item-panel">
      <div class="title clearFix">
        洗衣防染巾(30片)
      </div>
      <div class="item-price">
        <div class="price-cont">
          <span class="act-tag">限时体验价</span>
          <span >￥</span>
          <span>9</span>&nbsp;
          <span class="original-price">￥19</span>
          <span class="promo-lable">新</span>
        </div>
        <div class="item-comment">评论：0</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
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
    .item-status-empty
      width: 7rem;
      height: 7rem;
      background-color: rgba(0,0,0,.6);
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      font-size: 1.5em;
      color: #fff;
      line-height: 7rem;
      font-weight: 700;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -4rem;
      margin-left: -3.5rem;
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
        .act-tag
          background-color: #fff000;
          display: inline-block;
          padding: 1px 3px;
        .original-price
          color: #ccc;
          text-decoration: line-through;
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
