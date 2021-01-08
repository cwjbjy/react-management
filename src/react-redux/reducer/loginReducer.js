import {
    SETUSER,
    SETFLAG
} from "../constant/loginConstant";

const initState = {
    userName: '一叶扁舟',
    passWord: '123456zx',
    flag: true
}

const login = (state = initState, action) => {
    switch (action.type) {
        case SETUSER:
            return {
                userName: action.value.userName,
                passWord: action.value.passWord,
                flag: action.value.flag
            }
            case SETFLAG:
                return {
                    userName: action.value.userName,
                    passWord: action.value.passWord,
                    flag: action.value.flag
                }
                default:
                    return state
    }
}

export default login