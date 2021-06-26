import {
    combineReducers
} from "redux";
import login from "./login";
import users from './users'
const rootReducer = combineReducers({
    login,
    users
})


export default rootReducer