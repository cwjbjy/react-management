import routes from "@/routes";
import LayoutView from "@/layout/index.jsx";
import { readCookie } from "@/utils/cookie";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

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
      <Route path="/home" render={(props)=>(
        <LayoutView
        {...props}
        routes={
          <Switch>{layoutRoutes}</Switch>
        }
      />
      )}>
      </Route>
      <Redirect from="/" to="/login"></Redirect>
    </Switch>
  );
};

const RouterView = () => {
  return (
    <Router>
      <BuildRoutes />
    </Router>
  );
};

export default RouterView;
