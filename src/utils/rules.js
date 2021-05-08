import {
    message
} from "antd";

export const rules = {
    isValidPass: (val) => {
        return new Promise((resolve, reject) => {
            const patt = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            if (!patt.test(val)) {
                message.error({
                    content: "密码错误",
                    className: "custom-message",
                })
                reject()
            } else {
                resolve()
            }
        })
    },
    equal: (pass, pass_again) => {
        return new Promise((resolve, reject) => {
            if (pass !== pass_again) {
                message.error({
                    content: "两次输入密码不一致",
                    className: "custom-message",
                });
                reject()
            }else{
                resolve()
            }
        })
    }
}