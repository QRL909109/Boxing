const state = {
  isLoading: false
}
const actions = {
  updateLoadingStatus ({ commit }, payload) {
    commit('UPDATELOADING', payload)
  }
}
const mutations = {
  UPDATELOADING (state, payload) {
    state.isLoading = payload.isLoading
  }
}
export default {
  state,
  actions,
  mutations
}
