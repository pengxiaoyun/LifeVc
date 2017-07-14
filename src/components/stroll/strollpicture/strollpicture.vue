<template>
<div>

  <div class="stroll-item">
    <div class="stroll-type-item">
      <div class="stroll-item-layer">
        <img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/e726ff1fb1d44685a91cf76ff56d5018.jpg" lazy="loaded">
        <span class="tag-new">New</span>
      </div>
      <h3 class="stroll-item-title">
        <a href="">分类整理收纳箱</a>
      </h3>
      <div class="stroll-price-bar">
        <span class="price">￥<em>49</em></span>
        <span class="comment">月销 4082</span>
      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
