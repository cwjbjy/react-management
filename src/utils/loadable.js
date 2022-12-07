import Loadable from 'react-loadable';

import { FullScreenLoading } from '@/components/layout/loading.jsx';

const loadable = (loader) => {
  return Loadable({
    loader,
    loading: FullScreenLoading,
  });
};

export default loadable;
