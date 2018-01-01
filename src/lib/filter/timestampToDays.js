/**
 * 时间戳转天数
 */
const timestampToDays = function (timestamp) {
  return Math.floor(timestamp / (24 * 60 * 60 * 1000))
}

export default timestampToDays
