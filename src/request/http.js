import axios from 'axios';

//测试环境
let rootUrl = 'http://59.110.25.34:8070';

//生产环境
// let rootUrl = 'http://39.105.93.31:18070';

//正式线上环境
// let rootUrl = 'http://10.230.11.194';

//获取接口地址
export function getRootUrl() {
    return rootUrl;
}

// get post请求封装
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(rootUrl + url, {params: param}).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(rootUrl + url, params).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}