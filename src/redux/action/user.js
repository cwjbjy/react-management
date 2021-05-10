import API from '../../service'
import { SETTIME } from "../../constant/store";

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

const DELETE_USER = (params)=>{
    return dispatch=>{
        return API.deleteUser(params)
    }
}

const UPDATE_USER = (params)=>{
    return dispatch=>{
        return API.updateUser(params)
    }
}

export {SET_USER,DELETE_USER,UPDATE_USER}