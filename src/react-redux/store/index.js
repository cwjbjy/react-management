import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(rootReducer,{},applyMiddleware(thunk,logger))

export default store