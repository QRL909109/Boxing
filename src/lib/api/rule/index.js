import bjFetch from '../fetch'
//投注
export const GET_RULE = '/v1/bet/game' // game_id -- 比赛id  guess -- red/blue coin -- 金币  bet_type -- 投注类型，目前为1
/**
 * [投注]
 */
export const GetRule = async (data, options) => {
  return await bjFetch({
    url: GET_RULE,
    type: 'get',
    data,
    ...options
  })
}


export default {
  GetRule
}