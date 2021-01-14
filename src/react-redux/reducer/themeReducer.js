import { SETTHEME } from "../constant";

const initState = {
    themeColor:'theme-gray'
}

const theme = (state =initState,action )=>{
    switch(action.type){
        case SETTHEME:
            return{
                themeColor:action.value
            }
        default:
            return state
    }
}

export default theme