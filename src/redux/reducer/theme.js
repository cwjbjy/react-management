import { SETTHEME } from "../../constant/store";

const initState = 'theme-gray'

export default (state = initState,action )=>{
    switch(action.type){
        case SETTHEME:
            return action.value
        default:
            return state
    }
}