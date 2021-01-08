import API from '@/service/index'

export const login = (params)=>{
    return dispatch=>{
        return API.login(params)
    }
}