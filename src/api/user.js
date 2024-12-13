import http from './request'

/**
 * @description 登录
 * @param {*} data 
 * @returns Promise
 */
export function reqLogin(name, password) {
  // 表单提交post，更安全
  const formData = new FormData();
  formData.append('name', name);
  formData.append('password', password);

  return http.post('/user/login', formData);
}

/**
 * @description 注册
 * @param {*} data 
 * @returns Promise
 */
export function reqRegister(name, password) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('password', password);

  return http.post('/user/register', formData);
}