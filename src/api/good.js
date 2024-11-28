import http from './request'

/**
 * @description 获取商品列表
 * @returns {Promise}
 */
export function reqGoodsList() {
  return http.get('/goods/list')
}