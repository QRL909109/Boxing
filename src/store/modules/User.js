import personal from '@/lib/api/personal'
const state = {
  coin: 0,
  username: 'XXX',
  account: '',
  sex: 1 // 1 男 0 女
}
const actions = {
  updateUser ({ commit }, cb) {
    personal.GetUserInfo({}).then(data => {
      cb && cb()
      commit('UPDATEUSER', data)
    })
  }
}
const mutations = {
  UPDATEUSER (state, payload) {
    state = Object.assign(state, payload)
  }
}
export default {
  state,
  mutations,
  actions
}
