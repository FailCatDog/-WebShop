import http from './request'

/**
 * @description 登录
 * @param {*} data 
 * @returns Promise
 */
export function reqLogin(name, password) {
  return http.post(`/user/login?name=${name}&password=${password}`)
}

/**
 * @description 注册
 * @param {*} data 
 * @returns Promise
 */
export function reqRegister(name, password) {
  return http.post(`/user/register?name=${name}&password=${password}`)
}