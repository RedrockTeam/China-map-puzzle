// 对第三方库进行封装
import axios from 'axios'

export default function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL:'https://wx.redrock.team',
        timeout: 5000,
    })

    // 2.axios的拦截器
    // 2.1请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config)
        // 处理config/每次请求时显示图标/某些网络请求如登陆必须携带特殊信息
        return config
    },err => {
        console.log(err)
    })
    // 2.2响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res)
        // res.data
        return res.data
    },err=>{
        console.log(err)
    })

    // 3.网络请求，返回的是Promise
    return instance(config)
}