import API from '@/service/index'

const getImage = (params)=>{
    return dispatch=>{
        return API.getImage(params)
    }
}

export {getImage}