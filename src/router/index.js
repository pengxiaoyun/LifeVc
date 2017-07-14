import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import all from '../components/all/all.vue'
import stroll from '../components/stroll/stroll.vue'
import cart from '../components/cart/cart.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import channel from '../components/channel/channel.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import homeBody from '../components/homebody/homebody.vue'
import newProduct from '../components/newProduct/newProduct.vue'
import setting from '../components/setting/setting.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/', component: home},
    {
      path: '/home',
      component: home,
      children: [
        {path:'/',redirect:'homobody'},
        {path: 'homobody', component: homeBody},
        {path: 'new', component: newProduct},
        {path: 'channel/:id', component: channel}
      ]
    },
    {path: '/all', component: all},
    {path: '/stroll', component: stroll},
    {path: '/cart', component: cart},
    {path: '/usercenter', component: usercenter},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/setting', component: setting}
  ]
})
