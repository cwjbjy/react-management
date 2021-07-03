import {
    SETUSER
} from "../../constant/store";

const initState = {
    userName: '一叶扁舟',
    passWord: '123456zx',
    flag: true
}

const login = (state = initState, action) => {
    switch (action.type) {
        case SETUSER:
            return Object.assign({}, state, action.value)
        default:
            return state
    }
}

export default login