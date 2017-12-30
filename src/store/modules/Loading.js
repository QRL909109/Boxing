const state = {
  isLoading: false
}
const mutations = {
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading
  }
}
export default {
  state,
  mutations
}
