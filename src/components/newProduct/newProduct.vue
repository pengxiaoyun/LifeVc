<template>
  <div>
    <div class="wrap-shelf" v-if="news.weeknews">
      <div class="subcat-title">{{news.weeknews[0].name}}</div>
      <shefItem :content="news.weeknews[1].content[0]"></shefItem>
      <shefItem :content="news.weeknews[1].content[1]"></shefItem>
      <shefItem :content="news.weeknews[1].content[2]"></shefItem>
      <shefItem :content="news.weeknews[1].content[3]"></shefItem>
      <shefItem :content="news.weeknews[1].content[4]"></shefItem>
      <shefItem :content="news.weeknews[1].content[5]"></shefItem>
      <shefItem :content="news.weeknews[1].content[8]"></shefItem>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import shefItem from '../shefItem/shef-item.vue'
  export default {
    data () {
      return {
        news:{}
      }
    },
    created () {
      axios.get('/api/new')
        .then(response => {
          const result = response.data
          console.log(result.data)
          if (result.code==0) {
            this.news = result.data
          }
        })
    },
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
