<template>
  <div>
    <picture></picture>
    <div class="category-banner">
      <img src="http://i.lifevccdn.com/upload/DesignerMessageImg/9203af2fbef145daa142dd97bb84fae3.jpg" class="item-pic">
    </div>
    <newProduct></newProduct>
  </div>

</template>

<script>
  import picture from '../picture/picture.vue'
  import newProduct from '../newProduct/newProduct.vue'
  export default {
    components: {
      picture,
      newProduct
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.category-banner
  width: 100%;
  margin: 1.5em auto 0;
  .item-pic
    position: relative;
    z-index: 5;
  img
    width: 100%;
    display: block;
    vertical-align: top;
</style>
