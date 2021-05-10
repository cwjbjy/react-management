import { combineReducers } from "redux";
import  login from "./login";
import img from "./img";
import theme from "./theme";
import user from './user'
import users from './users'
const rootReducer = combineReducers({
    login,img,theme,user,users
})


export default rootReducer