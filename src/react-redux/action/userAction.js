import API from '../../service'
import { SETPASSWORD } from "../constant";
const setPassword = (value)=>{
    return{
        type:SETPASSWORD,
        value
    }
}

const getUser = (params)=>{
    return dispatch=>{
        return API.getUser(params)
    }
}

const getUsers = ()=>{
    return dispatch=>{
        return API.getUsers()
    }
}

const deleteUser = (params)=>{
    return dispatch=>{
        return API.deleteUser(params)
    }
}

const updateUser = (params)=>{
    return dispatch=>{
        return API.updateUser(params)
    }
}

export {setPassword,getUser,getUsers,deleteUser,updateUser}