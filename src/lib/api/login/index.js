import bjFetch from '../fetch'
// 用户注册
export const POST_REGISTER = '/v1/user/register' 
// 用户登录
export const POST_LOGIN = '/v1/user/login' 
// 用户找回密码
export const POST_UPDATE_PASSWORD = '/v1/user/update/passw' 
// 用户修改密码
export const POST_EDIT_PASSWORD = '/v1/user/edit/passw' 
// 用户退出登录
export const POST_LOGINOUT = '/v1/user/logout'
/**
 * [用户注册]
 *  account string: 4-24长度，前端校验一遍
 *  passw string: 4-24长度，前端校验一遍
 *  phone string 4-24长度,前端校验一遍
 */
export const PostRegister = async (data, options) => {
  return await bjFetch({
    url: POST_REGISTER,
    type: 'post',
    data,
    ...options
  })
}
/**
 * [用户登录]
 *  account string: 4-24长度，前端校验一遍
 *  passw string: 4-24长度，前端校验一遍
 */
export const PostLogin = async (data, options) => {
  return await bjFetch({
    url: POST_LOGIN,
    type: 'post',
    data,
    ...options
  })
}
export const PostLoginOut = async (data, options) => {
  return await bjFetch({
    url: POST_LOGINOUT,
    type: 'get',
    data,
    ...options
  })
}
/**
 * [用户找回密码、修改密码]
 *  account string: 4-24长度，前端校验一遍
 *  new_passw string: 4-24长度，前端校验一遍
 *  phone string 4-24长度,前端校验一遍
 */
export const PostUpdatePass = async (data, options) => {
  return await bjFetch({
    url: POST_UPDATE_PASSWORD,
    type: 'post',
    data,
    ...options
  })
}
/**
 * [用户找回密码、修改密码]
 *  account string: 4-24长度，前端校验一遍
 *  new_passw string: 4-24长度，前端校验一遍
 *  phone string 4-24长度,前端校验一遍
 */
export const PostEditPass = async (data, options) => {
  return await bjFetch({
    url: POST_EDIT_PASSWORD,
    type: 'post',
    data,
    ...options
  })
}

export default {
  PostRegister,
  PostLogin,
  PostUpdatePass,
  PostEditPass,
  PostLoginOut
}