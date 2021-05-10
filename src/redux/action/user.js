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

export {SET_USER}