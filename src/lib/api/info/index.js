import bjFetch from '../fetch'
// 获取消息接口
export const GET_MSG_LIST = '/v1/msg/list' // page=1&limit=1&msg_type=1 msg_type 消息类型（1.全局消息2.轮播消息3.个人中奖消息）

/**
 * [获取选手信息列表]
 */
export const GetMsgList = async (data, options) => {
  return await bjFetch({
    url: GET_MSG_LIST,
    data,
    ...options
  })
}

export default {
  GetMsgList
}
