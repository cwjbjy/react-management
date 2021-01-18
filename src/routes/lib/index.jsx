import routes from "@/routes";
import LayoutView from "@/layout/index.jsx";
import { readCookie } from "@/utils/cookie";
import { createBrowserHistory } from "history";
import { Suspense } from "react";
import { Spin } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.scss";

const buildRouter = ({ path, Component, children, auth, meta }, key) => {
  if (children) {
    return children.map((item, index) => {
      return buildRouter(item, `${key}_${index}`);
    });
  } else {
    return (
      <Route
        exact
        key={key}
        path={path}
        render={(props) => {
          if (meta?.title) {
            document.title = meta.title;
          }
          return !auth || readCookie("token") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      ></Route>
    );
  }
};

const BuildRoutes = () => {
  let layoutRoutes = [];
  let noLayoutRoutes = [];
  routes.forEach(({ layout = "DEFAULT", ...item }, index) => {
    if (layout === "DEFAULT") {
      layoutRoutes.push(buildRouter(item, index));
    } else {
      noLayoutRoutes.push(buildRouter(item, index));
    }
  });
  return (
    <Switch>
      {noLayoutRoutes}
      <Route
        path="/home"
        render={() => (
          <LayoutView
            routes={
              <Suspense
                fallback={
                  <div className="loadBox">
                    <Spin tip="Loading..." delay="1000" size="large" />
                  </div>
                }
              >
                <Switch>{layoutRoutes}</Switch>
              </Suspense>
            }
          />
        )}
      />
      <Route path="/" exact render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

const RouterView = () => {
  return (
    <Router key={createBrowserHistory().location.key}>
      <Suspense
        fallback={
          <div className="loadBox">
            <Spin tip="Loading..." delay="1000" size="large" />
          </div>
        }
      >
        <BuildRoutes />
      </Suspense>
    </Router>
  );
};

export default RouterView;
