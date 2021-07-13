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

//获取所有用户信息
API.getUsers = () => {
    return HttpClient.get(`${auth_url}/user`)
}

//删除普通用户 
API.deleteUser = (params) => {
    return HttpClient.delete(`${auth_url}/deleteUser`, {
        data: params
    })
}

//修改管理员账户信息
API.updateUser = (params) => {
    return HttpClient.put(`${auth_url}/updateUser`, {
        data: params
    })
}

export default API