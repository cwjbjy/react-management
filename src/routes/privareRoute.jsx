import { Redirect, Route, useLocation } from 'react-router-dom';

import { readCookie } from '@/utils/cookie';

const PrivateRoute = (params) => {
  const location = useLocation();
  return (
    <Route
      path={params.path}
      exact={params.exact}
      render={(props) => {
        if (!readCookie('token')) {
          return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
        }
        return params.render(props);
      }}
    />
  );
};

export default PrivateRoute;
