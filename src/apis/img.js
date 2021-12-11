import HttpClient from '@/service/fetch'

let API = {};
//获取上传图片
API.getImage = (params) => {
    return HttpClient.get(`/getImage`, {
        data: params
    })
}

export default API