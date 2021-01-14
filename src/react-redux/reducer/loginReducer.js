import {SETLOGIN} from "../constant";

const initState = {
    userName: '一叶扁舟',
    passWord: '123456zx',
    flag: true
}

const login = (state = initState, action) => {
    switch (action.type) {
        case SETLOGIN:
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