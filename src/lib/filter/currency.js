/**
 * 格式化金额,千位符
 * @{num} Number 金额
 * @{decimal} 小数位数，默认两位
 * @return {string} 格式化字符串
 */
export const currency = function (num, decimal = 2) {
  var n = Number(num)
  var parts
  var hasDecimal = !1

  if (!isNaN(n)) {
    // 检测是否有小数点
    hasDecimal = /\./g.test(num)
    // 有限制位数
    if (/\.\d{4,}/g.test(num) && decimal) {
      n = Number(num).toFixed(decimal)
      hasDecimal = !0
    } else {
      n = String(n)
    }

    parts = n.split('.')

    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (hasDecimal ? '.' : '') + (parts[1] || '')
  }

  return num
}
