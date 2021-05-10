import {
    SETUSERS
} from '../../constant/store'

const initState = []

export default (state = initState, action) => {
    switch (action.type) {
        case SETUSERS:
            return action.value
        default:
            return state
    }
}