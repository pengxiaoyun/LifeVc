<template>
  <div>
    <div class="wrap-shelf">
      <div class="subcat-title">最近一周新品</div>
      <shefItem></shefItem>
      <shefItem></shefItem>
      <shefItem></shefItem>
    </div>
  </div>
</template>

<script>
  import shefItem from '../shefItem/shef-item.vue'
  export default {
    components: {
      shefItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap-shelf
  width: 100%;
  margin: -7em auto 2em;
  padding: 7em 0 0;
  .subcat-title
    max-width: 96%;
    text-align: center;
    font-size: 1.9em;
    color: #000;
    line-height: 2em;
    margin: 0 auto -1.2em;
</style>
