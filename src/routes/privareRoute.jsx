import * as ls from 'local-storage';
import { Redirect, Route, useLocation } from 'react-router-dom';

import { ACCESS_TOKEN } from '@/config/constant';

const PrivateRoute = (params) => {
  const location = useLocation();
  return (
    <Route
      path={params.path}
      exact={params.exact}
      render={(props) => {
        if (!ls.get(ACCESS_TOKEN)) {
          return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
        }
        return params.render(props);
      }}
    />
  );
};

export default PrivateRoute;
