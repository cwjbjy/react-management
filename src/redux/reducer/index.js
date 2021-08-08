import {
    combineReducers
} from "redux";
import login from "./login";
import fileName from './img'
const rootReducer = combineReducers({
    login,fileName
})


export default rootReducer