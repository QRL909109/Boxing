/**
 * ajax结果统一处理
 * by tommyshao <shaojinhong@kuaizi.co>
 */
import Vue from 'vue'
import { AlertPlugin } from 'vux'

Vue.use(AlertPlugin)
const resultCallback = (vm, data) => {
  return new Promise((resolve, reject) => {
    if (data.result === 'ok') {
      resolve(data['data'])
    } else {
      if (data.msg === '请重新登录') {
        sessionStorage.setItem('loginKey', window.location.hash)
        window.location.href = '#/login'
      } else {
        Vue.$vux.alert.show({
          title: '出错啦！！',
          content: `错误：${data.msg}`
        })
        reject(data)
      }
    }
  })
}

export default resultCallback
