import { combineReducers } from "redux";
import  login from "./loginReducer";
import img from "./imgReducer";

const rootReducer = combineReducers({
    login,img
})


export default rootReducer