import bjFetch from '../fetch'
//投注
export const POST_BET_GAME = '/v1/bet/game' // game_id -- 比赛id  guess -- red/blue coin -- 金币  bet_type -- 投注类型，目前为1

//投注记录
export const GET_BET_RECORD = '/v1/bet/my' // page=1&limit=5&flag=1

//获取选手详情
export const GET_BOXER_DETIAL = '/v1/boxer/info' // id=1

//获取竞猜详情
export const GET_MATCH_DETIAL = '/v1/match/info' // id=1

/**
 * [投注]
 */
export const PostBetGame = async (data, options) => {
  return await bjFetch({
    url: POST_BET_GAME,
    type: 'post',
    data,
    ...options
  })
}

/**
 * [投注记录]
 */
export const GetBetRecord = async (data, options) => {
  return await bjFetch({
    url: GET_BET_RECORD,
    data,
    ...options
  })
}

/**
 * [获取选手详情]
 */
export const GetBoxerDetail = async (data, options) => {
  return await bjFetch({
    url: GET_BOXER_DETIAL,
    data,
    ...options
  })
}

/**
 * [获取竞猜详情]
 */
export const GetMatchDetail = async (data, options) => {
  return await bjFetch({
    url: GET_MATCH_DETIAL,
    data,
    ...options
  })
}

export default {
  PostBetGame,
  GetBetRecord,
  GetBoxerDetail,
  GetMatchDetail
}