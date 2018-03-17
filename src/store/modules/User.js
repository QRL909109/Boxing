import personal from '@/lib/api/personal'
const state = {
  coin: 0,
  username: 'XXX',
  sex: 1, // 1 男 0 女
  isLogin: false,
  flowPath: ''
}
const actions = {
  updateUser ({ commit }, cb) {
    personal.GetUserInfo({}).then(data => {
      cb && cb()
      commit('UPDATEUSER', data)
    })
  },
  updateFlowPath ({ commit }, data) {
    commit('UPDATEFLOWPATH', data)
  }
}
const mutations = {
  UPDATEUSER (state, payload) {
    state = Object.assign(state, payload)
  },
  UPDATEFLOWPATH (state, data) {
    state = Object.assign(state, data)
  }
}
export default {
  state,
  mutations,
  actions
}
