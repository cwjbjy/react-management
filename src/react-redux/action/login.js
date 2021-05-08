import API from '@/service/index'
import {
    message
} from "antd";
import {
    SETLOGIN
} from "../constant";
/* 网络请求 */
const login = (params) => {
    return dispatch => {
        return API.login(params)
    }
}

const ADD_USER = (params) => {
    let {userName,passWord} = params
    return dispatch => {
        return API.register(params).then((res) => {
                message.success({
                    content: res.message,
                    className: "custom-message",
                })
                dispatch(SET_LOGIN({
                    userName,
                    passWord,
                    flag: true,
                }))
            })
            .catch((err) => {
                if (err.status === 403) {
                    message.error({
                        content: "用户名已存在，请重新选择用户名",
                        className: "custom-message",
                    });
                }
            })
    }
}

/* 数据修改 */
const SET_LOGIN = (value) => {
    return {
        type: SETLOGIN,
        value
    }
}

export {
    login,
    ADD_USER,
    SET_LOGIN
}