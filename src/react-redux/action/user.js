import API from '../../service'
import { SETPASSWORD,SETTIME } from "../../constant/store";
const setPassword = (value)=>{
    return{
        type:SETPASSWORD,
        value
    }
}

const SET_USER = (params)=>{
    return dispatch=>{
        return API.getUser(params).then((res) => {
            dispatch({
                type:SETTIME,
                value:res.Data[0].createTime
            })
          })
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

export {setPassword,SET_USER,getUsers,deleteUser,updateUser}