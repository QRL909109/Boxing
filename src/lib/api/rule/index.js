import bjFetch from '../fetch'
// 游戏规则
export const GET_RULE = '/v1/portal/rule' 
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