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
 // filters
import * as filters from '@/lib/filter'
import {
  AlertPlugin,
  LoadingPlugin
} from 'vux'

Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false

FastClick.attach(document.body)

// 使用ajax库
Vue.use(VueResource)
// 配置以application/x-www-form-urlencoded方式
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push(function (request, next) { // 拦截器
// 跨域携带cookie
  request.credentials = true
  next()
})

// 欢迎页面
console.log('查', JSON.parse(window.sessionStorage.getItem('welcomePage')))
if (!JSON.parse(window.sessionStorage.getItem('welcomePage'))) {
  let divElement = document.createElement('div')
  let spanElement = document.createElement('div')
  divElement.id = 'welcome-page'
  spanElement.className = 'daoshu'
  spanElement.innerText = '3'
  divElement.appendChild(spanElement)
  document.body.appendChild(divElement)
  window.sessionStorage.setItem('welcomePage', false)
}
// 全局改变 loading
router.beforeEach(function (to, from, next) {
  store.commit('UPDATELOADING', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('UPDATELOADING', {isLoading: false})
})

Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter])
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h('App'),
  template: '<App/>',
  components: {App}
  /* components: {
    App: resolve => {
      store.dispatch('updateUser', () => {
        resolve(App)
      })
    }
  } */
}).$mount('#app')
