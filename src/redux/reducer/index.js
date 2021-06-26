import { combineReducers } from "redux";
import  login from "./login";
import img from "./img";
import user from './user'
import users from './users'
const rootReducer = combineReducers({
    login,img,user,users
})


export default rootReducer