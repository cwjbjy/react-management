import { combineReducers } from "redux";
import  login from "./loginReducer";
import img from "./imgReducer";
import theme from "./themeReducer";

const rootReducer = combineReducers({
    login,img,theme
})


export default rootReducer