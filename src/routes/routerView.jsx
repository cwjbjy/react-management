import { Route, Switch, Redirect } from "react-router-dom";
import { readCookie } from "@/utils/cookie";
//根据条件生成相应的组件
const RouterView = (props) => {
  let { routes } = props;
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          path={route.path}
          key={route.key || i}
          exact={route.exact}
          render={(props) => {
            if (route.meta?.title) {
              document.title = route.meta.title;
            }
            return (!route.auth || readCookie("token")) && !route.redirect ? (
              <route.component {...props} routes={route.children} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
      ))}
    </Switch>
  );
};

export default RouterView;
