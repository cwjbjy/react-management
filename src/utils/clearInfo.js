import ls from 'local-storage';

import { removeCookie } from './cookie';

const clearInfo = () => {
  removeCookie('token');
  ls.remove('menu');
};

export default clearInfo;
