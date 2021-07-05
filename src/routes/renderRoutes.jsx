import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./privareRoute";
import { RouteProvider } from "./context";

const renderRoutes = (routes) => {
  const getRoute = (requireAuth) => {
    if (requireAuth) {
      return PrivateRoute;
    }
    return Route;
  };
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
                  <RouteProvider value={!route.routes ? [] : route.routes}>
                    <route.component {...props} />
                  </RouteProvider>
                </>
              );
            }}
          />
        );
      })}
       <Redirect from="/" to="/login"></Redirect>
    </Switch>
  );
};

export default renderRoutes;