import personal from '@/lib/api/personal'
const state = {
  config: {
    app_id: '',
    nonce_str: '',
    signature: '',
    timestamp: ''
  },
  msg: {
    desc: '',
    img_url: '',
    title: ''
  }
}
const actions = {
  getWeixinShare ({ commit }, cb) {
    personal.GetWeixinShare({
      url: window.location.href.split('#')[0]
    }).then(data => {
      commit('UPDATESHARE', data)
    })
  }
}
const mutations = {
  UPDATESHARE (state, payload) {
    state = Object.assign(state, payload)
  }
}
export default {
  state,
  mutations,
  actions
}
