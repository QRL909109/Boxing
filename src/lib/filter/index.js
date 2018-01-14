import currency from './currency'
import dateFormat from './date-format'
import timestampToDays from './timestampToDays'

// 转换时间 距离多久
function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}
// 限制字数
function limitStrNum (txt, num) {
  let str = txt
  str = str.substr(0, num) + '...'
  return str
}
// 转化红蓝 名称
function turnName (type) {
  let str = ''
  if (type === 'red') {
    str = '红'
  } else {
    str = '蓝'
  }
  return str
}
export {
  currency,
  dateFormat,
  timestampToDays,
  timeAgo,
  limitStrNum,
  turnName
}
