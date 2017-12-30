// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// vuex state管理
import store from './store'
// 引入css
import 'normalize.css'
import 'lib-flexible'
import 'inobounce'
import FastClick from 'fastclick'
import {
  WechatPlugin,
  AlertPlugin,
  LoadingPlugin
} from 'vux'

Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)

Vue.config.productionTip = false

FastClick.attach(document.body)

// 使用ajax库
Vue.use(VueResource)
// 全局改变 loading
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
