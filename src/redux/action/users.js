import API from '../../service'
import {
    SETUSERS
} from '../../constant/store'

const SET_USERS = ()=>{
    return dispatch=>{
        return API.getUsers().then((res) => {
            let newArr = [];
            res.data.forEach((item, index) => {
              let newItem = Object.assign({}, item, { key: index });
              newArr.push(newItem);
            });
            dispatch({
                type:SETUSERS,
                value:newArr
            })
          })
    }
}

export {SET_USERS}