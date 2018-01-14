const state = {
  icon: 560,
  username: 'XXX',
  sex: 1, // 1 男 0 女
  avatar: ''
}
const actions = {
  updateUser ({ commit }, payload) {
    commit('UPDATEUSER', payload)
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
