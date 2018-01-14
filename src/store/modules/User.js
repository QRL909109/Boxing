const state = {
  money: 560,
  nickName: '小李子',
  phone: 13545453278
}
const mutations = {
  updateUser (state, payload) {
    state = Object.assign(state, payload)
  }
}
export default {
  state,
  mutations
}
