import bjFetch from '../fetch'

//我的订单
export const GET_ORDER_MY = '/v1/order/my' // page=1&limit=1&opr_type=1

// 金币明细
export const GET_COIN_MY = '/v1/coin/my' // page=1&limit=5

//提取/充值
export const POST_ORDER_NEW = '/v1/order/new' // coin -- 金币/金额  opr_type -- 1充值 2提现  wx_num -- 微信号

// 用户反馈
export const POST_FEEDBACK_INFO = '/v1/feedback/info' // content  contact

// 关于我们
export const GET_PORTAL_OWN = '/v1/portal/own' // type=2(2:帮助 3:联系客服 4:关于我们)

// 我的资料
export const GET_USER_INFO = '/v1/user/info'

/**
 * [我的订单]
 */
export const GetOrderMy = async (data, options) => {
  return await bjFetch({
    url: GET_ORDER_MY,
    data,
    ...options
  })
}

/**
 * [金币明细]
 */
export const GetCoinMy = async (data, options) => {
  return await bjFetch({
    url: GET_COIN_MY,
    data,
    ...options
  })
}
/**
 * [提取/充值]
 */
export const PostOrderNew = async (data, options) => {
  return await bjFetch({
    url: POST_ORDER_NEW,
    type: 'post',
    data,
    ...options
  })
}

/**
 * [用户反馈]
 */
export const PostFeedBack = async (data, options) => {
  return await bjFetch({
    url: POST_FEEDBACK_INFO,
    type: 'post',
    data,
    ...options
  })
}

/**
 * [关于我们]
 */
export const GetPortalOwn = async (data, options) => {
  return await bjFetch({
    url: GET_PORTAL_OWN,
    data,
    ...options
  })
}
/**
 * [获取用户信息]
 */
export const GetUserInfo = async (data, options) => {
  return await bjFetch({
    url: GET_USER_INFO,
    data,
    ...options
  })
}

export default {
  GetOrderMy,
  GetCoinMy,
  PostOrderNew,
  PostFeedBack,
  GetPortalOwn,
  GetUserInfo
}