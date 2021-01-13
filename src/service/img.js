import HttpClient from './lib/httpClient.js'
import {
    auth_url
} from './lib/baseUrl.js'


let API = {};
//获取上传图片
API.getImage = (params) => {
    return HttpClient.get(`${auth_url}/getImage`, {
        data: params
    })
}

export default API