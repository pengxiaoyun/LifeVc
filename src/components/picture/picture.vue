<template>
  <ul class="life-goodsUl clearFix onlyStyle">
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
      <dl>家务工具</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg">
      <dl>家庭清洁剂</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg">
      <dl>防霉除菌</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg">
      <dl>百纳箱</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg">
      <dl>衣物收纳</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg">
      <dl>酵素洗衣液</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg">
      <dl>魔力挂钩</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg">
      <dl>生活必备</dl>
    </li>
    <li>
      <img src="http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg">
      <dl>地毯地垫</dl>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue'
  import { Lazyload } from 'mint-ui';

  Vue.use(Lazyload);
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .life-goodsUl
    background: #fff;
    overflow: hidden;
    li
      float: left;
      width: 33%;
      text-align: center;
      border: 1px solid #f1f1f1;
      margin: 0 0 -1px -1px;
      img
        width: 60%!important;
        margin: auto;
        padding-top: 1rem;
      dl
        height: 2rem;
        line-height: 2rem;
        padding-bottom: 1rem;
        padding-top: .5rem;
        font-size: 1.3rem;
</style>
