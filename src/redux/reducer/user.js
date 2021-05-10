import { SETTIME } from "../../constant/store";

const initState = {
    time: ""
}

export default (state = initState, action) => {
    switch (action.type) {
        case SETTIME:
            return Object.assign({}, state, {
                time: action.value
            })
        default:
            return state
    }
}