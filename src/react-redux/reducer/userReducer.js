import {
    SETPASSWORD,
} from "../constant/userConst";

const initState = {
    password: '',
    isModalVisible: false
}

const user = (state = initState, action) => {
    switch (action.type) {
        case SETPASSWORD:
            return Object.assign(state, {
                password: action.value
            })
        default:
            return state
    }
}

export default user