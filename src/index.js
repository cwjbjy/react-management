/*
 * @description: 
 */
import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';

import store from './react-redux/store'
import { Provider } from "react-redux";
import { Spin } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
import RouteView from './routes/routeView.jsx'
import routes from "./routes";
import 'antd/dist/antd.css';
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div className="loadBox"><Spin tip="Loading..." delay="1000" size="large"/></div>}>
          <RouteView routes={routes}/>
      </Suspense>
    </Router>
  </Provider>
   ,
  document.getElementById('root')
);


