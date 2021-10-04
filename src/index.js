import "antd/dist/antd.css";
import "./assets/icon/iconfont.css";

import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import renderRoutes from "./routes/renderRoutes";
import routeConfig from "./config/routeConfig.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routeConfig)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}
