import bjFetch from '../fetch'
// 获取选手信息列表
export const GET_PLATER_INFO = '/v1/boxer/list' // page=1&limit=1

// 获取竞猜列表
export const GET_MATCH_LIST = '/v1/match/list' // page=1&limit=3&status=1

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
