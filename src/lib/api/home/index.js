import bjFetch from '../fetch'
// 获取选手信息列表
export const GET_PLATER_INFO = '/v1/boxer/list' // page=1&limit=1

// 获取竞猜列表
export const GET_MATCH_LIST = '/v1/match/list' // page=1&limit=3&type=1  0预告，1竞猜中，2赛果  
// winner  0未结算；1、红方；2、蓝方；3、平局

// 获取赛程列表
export const GET_MATCH_ALL = '/v1/match/all' // page=1&limit=3 赛程

// 点赞
export const GET_LIKE_THIS = '/v1/like/this' // user_id=1&portal_id=3

// 点赞列表
export const GET_LIKE_LIST = '/v1/like/list' // portal_id=3

// 首页banner
export const GET_PORTAL_BANNER = '/v1/portal/banner' 

// 首页头条
export const GET_PORTAL_TOP = '/v1/portal/top' 

// 推荐
export const GET_PORTAL_POPULAR = '/v1/portal/popular' 

// 文章详情
export const GET_PORTAL_INFO = '/v1/portal/info' // portal_id=1

// 盈利排行榜
export const GET_RANK_WIN = '/v1/rank_list/win'

// 投注排行榜
export const GET_RANK_BET = '/v1/rank_list/bet' 

// 财富排行榜
export const GET_RANK_COIN = '/v1/rank_list/coin'

// 赛事投注排行榜
export const GET_RANK_MATCH = '/v1/rank_list/match' 
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

/**
 * [获取赛程列表]
 */
export const GetMatchAll = async (data, options) => {
  return await bjFetch({
    url: GET_MATCH_ALL,
    data,
    ...options
  })
}

/**
 * [点赞]
 */
export const GetLikeThis = async (data, options) => {
  return await bjFetch({
    url: GET_LIKE_THIS,
    data,
    ...options
  })
}
/**
 * [点赞列表]
 */
export const GetLikeList = async (data, options) => {
  return await bjFetch({
    url: GET_LIKE_LIST,
    data,
    ...options
  })
}
/**
 * [首页banner]
 */
export const GetPortalBanner = async (data, options) => {
  return await bjFetch({
    url: GET_PORTAL_BANNER,
    data,
    ...options
  })
}
/**
 * [首页头条]
 */
export const GetPortalTop = async (data, options) => {
  return await bjFetch({
    url: GET_PORTAL_TOP,
    data,
    ...options
  })
}
/**
 * [推荐]
 */
export const GetPortalPopular = async (data, options) => {
  return await bjFetch({
    url: GET_PORTAL_POPULAR,
    data,
    ...options
  })
}
/**
 * [文章详情]
 */
export const GetPortalInfo = async (data, options) => {
  return await bjFetch({
    url: GET_PORTAL_INFO,
    data,
    ...options
  })
}
/**
 * [盈利排行榜]
 */
export const GetRankWin = async (data, options) => {
  return await bjFetch({
    url: GET_RANK_WIN,
    data,
    ...options
  })
}
/**
 * [投注排行榜]
 */
export const GetRankBet = async (data, options) => {
  return await bjFetch({
    url: GET_RANK_BET,
    data,
    ...options
  })
}
/**
 * [财富排行榜]
 */
export const GetRankCoin = async (data, options) => {
  return await bjFetch({
    url: GET_RANK_COIN,
    data,
    ...options
  })
}
/**
 * [财富排行榜]
 */
export const GetRankMatch = async (data, options) => {
  return await bjFetch({
    url: GET_RANK_MATCH,
    data,
    ...options
  })
}
export default {
  GetPlayerInfo,
  GetMatchList,
  GetMatchAll,
  GetLikeThis,
  GetLikeList,
  GetPortalBanner,
  GetPortalTop,
  GetPortalPopular,
  GetPortalInfo,
  GetRankWin,
  GetRankBet,
  GetRankMatch,
  GetRankCoin
}
