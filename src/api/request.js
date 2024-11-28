import axios from 'axios';

// 创建axios实例
const http = axios.create({ 
    baseURL: '/api', 
    timeout: 5000 
});

export default http;