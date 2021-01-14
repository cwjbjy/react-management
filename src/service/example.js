/*
 * @description: 
 */
import HttpClient from './lib/httpClient.js'
// import {
//     auth_url
// } from './lib/baseUrl.js'
// import enumAuth from './lib/auth.js'

let API = {};

//获取所有用户信息
API.user = () => {
    return HttpClient.get('/user')
}

//删除普通用户 /Query String Parameters拼接在URL上 通常用于get与delete
API.deleteUser = (params) => {
    return HttpClient.delete('/deleteUser', {
        params: params
    })
}

//修改管理员账户信息
API.updateUser = (params) => {
    return HttpClient.put('/updateUser', params)
}



//获取用户单条信息
API.getUser = (params) => {
    return HttpClient.get('/getUser', {
        params: params
    })
}

export default API