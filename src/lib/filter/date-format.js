/**
 * 格式化日期
 */

/**
 * yyyyMMDD to yyyy-MM-DD
 */
export const strToDate = function (str) {
  str = `${str}`
  if (str && /\d{8}/.test(str) && str.length === 8) {
    return [str.substr(0, 4), str.substr(4, 2), str.substr(6, 2)].join('-')
  }
  return str
}
/*
* 返回格式化时间
* @param: data = new Date(time)
* @param: fmt = 格式 例如: yyyy-MM-dd hh:mm
* 用法 formaDate(new Date(time), 'yyyy-MM-dd hh:mm')
*/
export const formatDate = (date, fmtm) => {
  let fmt = fmtm || 'yyyy-MM-dd hh:mm'
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

export default function (time) {
  const d = new Date(+time)
  let fmt = 'yyyy-MM-dd'
  const o = {
    'M+': d.getMonth() + 1,
    'd+': d.getDate(),
    'h+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    'q+': Math.floor((d.getMonth() + 3) / 3),
    'S': d.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
