/*
* 统一异步处理
* 1) async await
*  const async function(){
*   const data = await bjFetch(opts)
*  }
*  2) promise
*  bjFetch(opts).then(data => { ... })
 */
import Vue from 'vue'
import resultCallback from './resultCallback'

const bjFetch = async function ({ vm, type = 'GET', url, data = {}, options = {}, target, loading = false, loadingText = 'Loading...' }, ...args) {
  // fetch 获取结果
  let result
  // Loading
  let LOADING
  // loading
  let vmLoading
  // http
  let HTTP
  // 异步类型
  const TYPE = type.toUpperCase()
   // 检测vm有没有设置
  vm = vm || args[0] || Vue
  if (!vm) {
    console.warn('fetch option vm: not defined')
    return
  }

  if (!url) {
    console.warn('fetch option url: not defined')
    return
  }

  // 判断不同环境
  HTTP = vm === Vue ? Vue.http : vm.$http
  LOADING = vm === Vue ? Vue.prototype.$loading : vm.$loading

  // 默认配置
  options = Object.assign({}, {
    before: function () {
      target = target || document.body
      vmLoading = loading ? LOADING({ target, fullscreen: false, text: loadingText }) : false
    }
  }, options)

  // http错误
  const reject = res => {
    return {
      code: res.status,
      msg: res.statusText,
      data: res.body
    }
  }

  // 成功返回的结构
  const resolve = res => {
    let result
    // 隐藏 loading
    vmLoading && vmLoading.close()
    if (typeof res.body === 'string') {
      try {
        result = JSON.parse(res.body)
      } catch (e) {
        result = reject({
          status: -110,
          message: e,
          body: res
        })
        console.error(res.body)
      }
      return result
    } else {
      return res.json()
    }
  }
  switch (TYPE) {
    case 'POST':
      result = await HTTP.post(url, data, options).then(resolve, reject)
      break
    case 'HEAD':
      result = await HTTP.head(url, options).then(resolve, reject)
      break
    case 'DELETE':
      result = await HTTP.delete(url, options).then(resolve, reject)
      break
    case 'JSONP':
      result = await HTTP.jsonp(url, options).then(resolve, reject)
      break
    case 'PUT':
      result = await HTTP.jsonp(url, data, options).then(resolve, reject)
      break
    case 'patch':
      result = await HTTP.patch(url, data, options).then(resolve, reject)
      break
    default:
      // get 拼接data部分参数
      const handleData = Object.keys(data).map(item => `${item}=${data[item]}`)
      const fetchUrl = handleData.length ? [url, url.indexOf('?') > -1 ? '&' : '?', handleData.join('&')].join('') : url
      result = await HTTP.get(fetchUrl, options).then(resolve, reject)
      break
  }
  return resultCallback(vm, result)
}

// GET 方法
bjFetch.$get = async (url, data = {}, options = {}) => {
  let result = await bjFetch({ url, data, ...options })
  return result
}

// POST
bjFetch.$post = async (url, data = {}, options = {}) => {
  let result = await bjFetch({
    type: 'POST',
    url,
    data,
    ...options
  })
  return result
}

export default bjFetch
