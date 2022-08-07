const axios = require('axios')
import store from '@/store'
import { Message } from 'element-ui'
import { getAccessToken } from './utils/auth'

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
});

http.interceptors.request.use(
    config => {
        // do something before request is sent
        const accessToken = getAccessToken()

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${getAccessToken()}`
        }

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
http.interceptors.response.use(
    response => {
        const res = response.data

        return res
    },
    error => {
        console.log(error)

        
        if(error.response) {
            console.log(error.response)
            if (error.response.status === 401) {
                return store.dispatch('logout').then(() => {
                    window.location = "/"
                })
            }

            if (error.response.status < 200 || error.response.status >= 300) {
                Message({
                    message: 'Có lỗi xảy ra. Vui lòng tải lại trang và thử lại !',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
        }
        
        return Promise.reject(error)
    }
)

export default http