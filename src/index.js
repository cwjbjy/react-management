import React from 'react';
import ReactDOM from 'react-dom';

import store from './react-redux/store'
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes/index";

import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
   ,
  document.getElementById('root')
);


