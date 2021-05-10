import { SETTHEME } from "../../constant/store";

const SET_THEME = (value)=>{
    return {
        type:SETTHEME,
        value
    }
}

export {SET_THEME}