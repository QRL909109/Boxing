// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// 引入css
import 'normalize.css'
import 'lib-flexible'
import 'inobounce'
import FastClick from 'fastclick'

Vue.config.productionTip = false

FastClick.attach(document.body)

// 使用ajax库
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
