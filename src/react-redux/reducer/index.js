import { combineReducers } from "redux";
import  login from "./loginReducer";
import img from "./imgReducer";
import theme from "./themeReducer";
import user from './userReducer'
const rootReducer = combineReducers({
    login,img,theme,user
})


export default rootReducer