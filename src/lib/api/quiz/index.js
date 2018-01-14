import bjFetch from '../fetch'
//投注
export const POST_BET_GAME = '/v1/bet/game' // game_id -- 比赛id  guess -- red/blue coin -- 金币  bet_type -- 投注类型，目前为1

//投注记录
export const GET_BET_RECORD = '/v1/bet/my' // page=1&limit=5&flag=1

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

export default {
  PostBetGame,
  GetBetRecord
}