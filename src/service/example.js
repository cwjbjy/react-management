import FetchClient from './lib/httpClient.js'
import {
    auth_url
} from './lib/baseUrl.js'
// import enumAuth from './lib/auth.js'

let API = {};

API.getContactList = () => {
    return FetchClient.get(`${auth_url}/contactList`)
}

API.signup = (params) => {
    return FetchClient.post(`${auth_url}/register`,{
        data:params
    })
}

export default API