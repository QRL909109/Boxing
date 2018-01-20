import bjFetch from '../fetch'
// 获取选手信息列表
export const GET_PLATER_INFO = '/v1/boxer/list' // page=1&limit=1

// 获取竞猜列表
export const GET_MATCH_LIST = '/v1/match/list' // page=1&limit=3&status=1  0预告，1竞猜中，3赛果 2赛程(比赛中)   
// winner  0未结算；1、红方；2、蓝方；3、平局

/**
 * [获取选手信息列表]
 */
export const GetPlayerInfo = async (data, options) => {
  return await bjFetch({
    url: GET_PLATER_INFO,
    data,
    ...options
  })
}

/**
 * [获取竞猜列表]
 */
export const GetMatchList = async (data, options) => {
  return await bjFetch({
    url: GET_MATCH_LIST,
    data,
    ...options
  })
}

export default {
  GetPlayerInfo,
  GetMatchList
}
