import http from './request'

/**
 * @description 获取购物车列表
 * @param {*} userId 
 */
export function reqCartList(userId) {
    return http.get(`/cart/listByUser?userId=${userId}`) // 你这少了返回
}

/**
 * 
 * @description 加入购物车
 * @param {*} userId 
 * @param {*} goods 
 * @param {*} num 
 * @returns 
 */
export function reqAddCart(userId, goods, num) {
    return http.put(`/cart/add?userId=${userId}&goodsId=${goods.id}&num=${num}&price=${goods.price1}`) // put请求不要直接拼接url，用表单提交更安全
}

export function reqDeleteCart(userId,cartId) {
    return http.delete(`/cart/deleteById?userId=${userId}&cartId=${cartId}`)
}