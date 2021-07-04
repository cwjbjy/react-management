import routes from "@/routes";
import { readCookie } from "@/utils/cookie";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const buildRouter = ({ path, Component, children, auth }, key) => {
  if (children && Component) {
    return (
      <Route
        path={path}
        key={key}
        render={(props) => (
          <Component
            {...props}
            routes={
              <Switch>
                {children.map((item, index) =>
                  buildRouter(item, `${key}_${index}`)
                )}
              </Switch>
            }
          ></Component>
        )}
      ></Route>
    );
  } else {
    return (
      <Route
        exact
        key={key}
        path={path}
        render={(props) => {
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

const RouterView = () => {
  return (
    <Router>
      <Switch>
        {routes.map((item, index) => buildRouter(item, index))}
        <Redirect from="/" to="/login"></Redirect>
      </Switch>
    </Router>
  );
};

export default RouterView;
