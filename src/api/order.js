import http from './request'

/**
 * @description 生成订单
 * @param {*} data 订单数据
 * @returns 
 */
export function reqSubmitOrder(userId, cartList) {
    return http.post(`/order/addCastOrder?userId=${userId}&cartList=${cartList}`)
}

/**
 * @description 获取订单列表
 * @param {*} userId 
 * @returns 
 */
export function reqGetOrderList(userId) {
    return http.get(`/order/listByUser?userId=${userId}`)
}

export function reqGetOrderDetail(orderDetail, userId) {
    return http.get(`/order/listByUser?userId=${userId}&orderDetail=${orderDetail}`)
}