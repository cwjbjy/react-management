import { SETTHEME } from "../../constant/store";

const initState = {
    themeColor:'theme-gray'
}

export default (state =initState,action )=>{
    switch(action.type){
        case SETTHEME:
            return{
                themeColor:action.value
            }
        default:
            return state
    }
}