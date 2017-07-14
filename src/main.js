// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'

import App from './components/app/app.vue'
import router from './router'
import './mock/mockServer'
import 'mint-ui/lib/style.css'

Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
