const betStatus = function (state) {
  let type = '正在竞猜'
  switch (state) {
    case 0:
      type = '竞猜结束'
      break
    case 1:
      type = '正在竞猜'
      break
    default: type = '正在竞猜'
  }
  return type
}

export {
  betStatus
}
