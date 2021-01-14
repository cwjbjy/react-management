import API from '../../service'


const getUser = (params)=>{
    return dispatch=>{
        return API.getUser(params)
    }
}

export {getUser}