import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./privareRoute";
import RouteContext from "./context";

const getRoute = (requireAuth) => {
  if (requireAuth || typeof requireAuth === "undefined") {
    return PrivateRoute;
  }
  return Route;
};

const renderRoutes = (routes) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        const ChoiceRoute = getRoute(route.requireAuth);
        return (
          <ChoiceRoute
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return (
                <>
                  {route.redirect && <Redirect to={route.redirect} />}
                  <RouteContext.Provider
                    value={!route.routes ? [] : route.routes}
                  >
                    {route.component ? <route.component {...props} /> : null}
                  </RouteContext.Provider>
                </>
              );
            }}
          />
        );
      })}
      <Redirect from="/" to="/login" exact></Redirect>
    </Switch>
  );
};

export default renderRoutes;
