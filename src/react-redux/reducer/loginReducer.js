import {
    SETUSER
} from "../constant";

const initState = {
    userName: '一叶扁舟',
    passWord: '123456zx',
    flag: true
}

export default (state = initState, action) => {
    switch (action.type) {
        case SETUSER:
            return {
                userName: action.value.userName,
                passWord: action.value.passWord,
                flag: action.value.flag
            }
            default:
                return state
    }
}