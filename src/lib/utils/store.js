export default class SessionStore {
  constructor (props) {
    this.props = Object.assign({}, SessionStore.DEFAULTS, props)
    this.dataType = Array.isArray(this.props.type)
  }
  get (key) {
    let data = window.sessionStorage.getItem(this.props.key)
    // 储存的是 string
    if (!this.props.collection) return data
    // 储存的是json 或者数组
    data = JSON.parse(data || null)
    // 按 key 查找某项
    // key 没有传则返回所有列表
    return key ? Object.keys(data).find(item => item[key]).pop() : data
  }

  set (item, key) {
    if (!this.props.collection) return window.sessionStorage.setItem(this.props.key, item)

    if (!key) return window.sessionStorage.setItem(this.props.key, JSON.stringify(item))

    let result = this.get(key)
    if (!result) {
      result = this.dataType ? [{ name: key, value: item }] : {[key]: item}
    } else {
      this.dataType
      ? result.map(el => el || (el.name === key && (el.value = item)))
      : (result[key] = item)
    }
    window.sessionStorage.setItem(this.props.key, JSON.stringify(result))
  }
  clear (key) {
    if (!key) return window.sessionStorage.removeItem(this.props.key)
    let result = this.get(key)
    // 数组
    if (result && this.dataType) {
      result = result.filter(el => el.name !== key)
    } else {
      delete result[key]
    }
    window.sessionStorage.setItem(this.props.key, result)
  }
}

SessionStore.DEFAULTS = {
  key: '__store_temp',
  // 是否数组存储
  collection: false,
  type: []
}
