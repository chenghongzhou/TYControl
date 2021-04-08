import axios from 'axios';
import router from "../router/index"
import { BASEURL } from "../api/index"

//自动切换环境
axios.defaults.baseURL = process.env._BASEURL
//设置超时时间
// axios.defaults.timeout = 10000000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withcredentials = true

//请求拦截(请求发出前处理请求)
axios.interceptors.request.use((config) => {
    //在发送请求之前如果为post序列化请求参数
    if (config.method === 'post') {
        config.data = config.data;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 响应拦截器（处理响应数据）
axios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error)
    if (error.response.config.url == BASEURL + '/photo-proxy/oss/token') {
        return Promise.reject(error);
    }
    if (error.response.config.url.indexOf(BASEURL) != -1) {
        switch (error.response.status) {
            case 401:
                router.replace("/login")
                break
            case 402:
                router.replace("/login")
                break
            case 403:
                router.replace("/login")
                break
        }
    }
    return Promise.reject(error);
});

// 封装get方法
export function GET(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.response.data);
        })
    });
}

// 封装post方法
export function POST(url, params, headers, onUploadProgress) {
    let userData = localStorage.getItem("userData");
    if (userData) {
        if (!headers) {
            headers = {}
        }
        headers.Authorization = 'Bearer ' + JSON.parse(userData).access_token
    }
    return new Promise((resolve, reject) => {
        axios.post(
            url,
            params,
            {
                headers: headers,
                onUploadProgress: function (e) {
                    params.onUploadProgress && params.onUploadProgress(e) || onUploadProgress && onUploadProgress(e)
                }
            }).then(res => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.response ? err.response.data : {});
            })
    });
}
