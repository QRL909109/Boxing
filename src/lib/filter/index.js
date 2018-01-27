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
  str = str.substr(0, Math.min(num, str.length)) + '...'
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
// 判断加减号
const coinAddDes = function (state) {
  let type = '+'
  switch (state) {
    case 1:
      type = '+'
      break
    case 2:
      type = '-'
      break
    case 3:
      type = '-'
      break
    case 4:
      type = '+'
      break
    default: type = '+'
  }
  return type
}
// 充值提取
const coinType = function (state) {
  let type = '充值'
  switch (state) {
    case 1:
      type = '充值'
      break
    case 2:
      type = '提取'
      break
    case 3:
      type = '投注'
      break
    case 4:
      type = '赢取'
      break
    default: type = '充值'
  }
  return type
}
// 订单的状态
const orderType = function (state) {
  let type = '充值'
  switch (state) {
    case 1:
      type = '确认中'
      break
    case 2:
      type = '已确认，并结算'
      break
    case 3:
      type = '已取消'
      break
    default: type = '确认中'
  }
  return type
}
export {
  currency,
  dateFormat,
  timestampToDays,
  timeAgo,
  limitStrNum,
  turnName,
  coinAddDes,
  coinType,
  orderType
}
