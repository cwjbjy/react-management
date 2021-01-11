import { Route, Switch, Redirect } from "react-router-dom";
import { readCookie } from "@/utils/cookie";
//根据条件生成相应的组件
const RouteView = (props) => {
  let { routes } = props;
  let rdArr = routes.filter((item) => item.redirect);
  let rdCom = rdArr.map((item, key) => (
    <Redirect from={item.path} to={item.redirect} key={key} />
  ));
  return (
    <Switch>
      {routes
        .map(
          (item, key) =>
            !item.redirect && (
              <Route
                path={item.path}
                key={key}
                exact={item.exact}
                render={(props) => {
                  if (item.meta.title) {
                    document.title = item.meta.title;
                  }
                  return !item.auth ? (
                    <item.component {...props} routes={item.children} />
                  ) : readCookie("token") ? (
                    <item.component {...props} routes={item.children} />
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              />
            )
        )
        .concat(rdCom)}
    </Switch>
  );
};

export default RouteView;
