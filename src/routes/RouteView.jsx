import { Route, Switch, Redirect } from "react-router-dom";

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
                render={() => {
                  if (item.meta.title) {
                    document.title = item.meta.title;
                  }
                  return <item.component routes={item.children} />;
                }}
              />
            )
        )
        .concat(rdCom)}
    </Switch>
  );
};

export default RouteView;
