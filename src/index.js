import 'antd/dist/antd.css';
import "./assets/icon/iconfont.css";

import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from "react-redux";
// import RouterView from './routes/index.jsx'
import {BrowserRouter} from 'react-router-dom'
import renderRoutes from './routes/renderRoutes'
import routeConfig from './config/routeConfig.jsx'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routeConfig)}
    </BrowserRouter>
  </Provider>
   ,
  document.getElementById('root')
);


