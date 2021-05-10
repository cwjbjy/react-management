import {SETIMAGE} from '../../constant/store'

const initState = {
    imageUrl: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case SETIMAGE:
            return{
                imageUrl:action.value
            }
        default:
            return state
    }
}