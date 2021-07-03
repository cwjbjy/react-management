import {
    SETUSERS
} from '../../constant/store'

const initState = []

const users = (state = initState, action) => {
    switch (action.type) {
        case SETUSERS:
            return action.value
        default:
            return state
    }
}

export default users