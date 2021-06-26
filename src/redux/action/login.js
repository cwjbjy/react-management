import API from '@/service/index'
import { saveCookie } from "@/utils/cookie.js";
import { message } from "antd";
import { SETUSER } from "../../constant/store";
import { img_url } from "@/service/lib/baseUrl.js";
const SET_LOGIN = (params, fn) => {
    return dispatch => {
        return API.login(params).then((res) => {
                dispatch(SET_USER({
                    userName: params.get('userName'),
                    passWord: params.get('passWord'),
                }))
                saveCookie("token", res.value);
                localStorage.setItem('menu',res.auth)
                API.getImage({ user_name: params.get('userName') }).then(res => {
                    let fileName = res.Data[0]?.photo;
                    let imgURL = `${img_url}${fileName}`;
                    localStorage.setItem('imgUrl',imgURL)
                })
                fn()
            })
            .catch((err) => {
                if (err.status === 400) {
                    message.error({
                        content: "密码错误",
                        className: "custom-message",
                    });
                } else if (err.status === 401) {
                    message.error({
                        content: "用户名错误",
                        className: "custom-message",
                    });
                }
            });
    }
}

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
    SET_LOGIN,
    ADD_USER,
    SET_USER
}