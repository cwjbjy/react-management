import { combineReducers } from "redux";
import  login from "./login";
import img from "./img";
import theme from "./theme";
import user from './user'
const rootReducer = combineReducers({
    login,img,theme,user
})


export default rootReducer