import API from '@/service/index'
import {SETLOGIN} from "../constant";
/* 网络请求 */
const login = (params)=>{
    return dispatch=>{
        return API.login(params)
    }
}

const register = (params)=>{
    return dispatch=>{
        return API.register(params)
    }
}

/* 数据修改 */
const SET_LOGIN = (value)=>{
    return{
        type:SETLOGIN,
        value
    }
}

export {login,register,SET_LOGIN}
