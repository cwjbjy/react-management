import {
    combineReducers
} from "redux";
import login from "./login";
import img from "./img";
import users from './users'
const rootReducer = combineReducers({
    login,
    img,
    users
})


export default rootReducer