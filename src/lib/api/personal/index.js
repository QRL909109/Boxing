import bjFetch from '../fetch'

//我的订单
export const GET_ORDER_MY = '/v1/order/my' // page=1&limit=1&opr_type=1

// 金币明细
export const GET_COIN_MY = '/v1/coin/my' // page=1&limit=5

//提取/充值
export const POST_ORDER_NEW = '/v1/order/new' // coin -- 金币/金额  opr_type -- 1充值 2提现  wx_num -- 微信号

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

export default {
  GetOrderMy,
  GetCoinMy,
  PostOrderNew
}