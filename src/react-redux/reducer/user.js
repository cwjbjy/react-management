import {
    SETPASSWORD,SETTIME
} from "../../constant/store";

const initState = {
    password: '',
    isModalVisible: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case SETPASSWORD:
            return Object.assign(state, {
                password: action.value
            })
            case SETTIME:
                return Object.assign({},state,{
                    time:action.value
                })
        default:
            return state
    }
}