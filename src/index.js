import 'antd/dist/antd.css';
import './assets/icon/iconfont.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import routeConfig from './config/routeConfig.js';
import renderRoutes from './routes/renderRoutes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routeConfig)}</BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
