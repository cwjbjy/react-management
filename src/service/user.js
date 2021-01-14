import HttpClient from './lib/httpClient.js'
import {
    auth_url
} from './lib/baseUrl.js'

let API = {};

//获取用户单条信息
API.getUser = (params) => {
    return HttpClient.get(`${auth_url}/getUser`, {
        data: params
    })
}

export default API