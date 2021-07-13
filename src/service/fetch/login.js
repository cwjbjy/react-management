
import HttpClient from './lib/httpClient.js'
import {
    auth_url
} from './lib/baseUrl.js'
import enumAuth from './lib/auth.js'

let API = {};

API.login = (params) => {
    return HttpClient.post(`${auth_url}/login`, {
        data:params,
        auth:enumAuth.Level03
    })
}

API.register = (params) => {
    return HttpClient.post(`${auth_url}/register`, {
        data:params,
        auth:enumAuth.Level03
    })
}

export default API