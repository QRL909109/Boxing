const betStatus = function (state) {
  let type = '正在竞猜'
  switch (state) {
    case 0:
      type = '未开始竞猜'
      break
    case 1:
      type = '正在竞猜'
      break
    case 2:
      type = '竞猜结束'
      break
    case 3:
      type = '结算中'
      break
    case 4:
      type = '结算完毕'
      break
    default: type = '正在竞猜'
  }
  return type
}
// 比赛结果
const gameResult = function (state) {
  let item = {
    type: '未结算',
    color: 'grey'
  }
  switch (+state) {
    case 0:
      item = {
        type: '未结算',
        color: 'grey'
      }
      break
    case 1:
      item = {
        type: '红方胜',
        color: 'red'
      }
      break
    case 2:
      item = {
        type: '蓝方胜',
        color: 'blue'
      }
      break
    case 3:
      item = {
        type: '平局',
        color: 'grey'
      }
      break
    default:
      item = {
        type: '平局',
        color: 'grey'
      }
  }
  return item
}
export {
  betStatus,
  gameResult
}
