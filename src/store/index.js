/**
 * state 状态树管理
 */
import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

import Loading from './modules/Loading'
import User from './modules/User'
import Weixin from './modules/Weixin'
Vue.use(Vuex)
// 开发环境开启 debug 模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Loading,
    User,
    Weixin
  },
  plugins,
  strict: debug
})
