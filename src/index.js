import ReactDOM from 'react-dom';

import store from './redux/store'
import { Provider } from "react-redux";

import RouterView from './routes/lib/index.jsx'

import 'antd/dist/antd.css';
import "./assets/icon/iconfont.css";
ReactDOM.render(
  <Provider store={store}>
     <RouterView/>
  </Provider>
   ,
  document.getElementById('root')
);


