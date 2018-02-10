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
      Vue.$vux.alert.show({
        title: '出错啦！！',
        content: `错误：${data.msg}`,
        onHide() {
          window.location.href = 'http://web.hfhboji.com/v1/weixin/oauth'
        }
      })
      reject(data)
    }
  })
}

export default resultCallback
