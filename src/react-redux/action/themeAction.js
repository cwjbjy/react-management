import { SETTHEME } from "../constant";

const SET_THEME = (value)=>{
    return {
        type:SETTHEME,
        value
    }
}

export {SET_THEME}