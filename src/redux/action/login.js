import API from '@/service/index'

import { message } from "antd";
import { SETUSER } from "../../constant/store";

const ADD_USER = (params) => {
    let {
        userName,
        passWord
    } = params
    return dispatch => {
        return API.register(params).then((res) => {
                message.success({
                    content: res.message,
                    className: "custom-message",
                })
                dispatch(SET_USER({
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

const SET_USER = (value) => {
    return {
        type: SETUSER,
        value
    }
}

export {
    ADD_USER,
    SET_USER
}