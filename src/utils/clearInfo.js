import ls from 'local-storage';

import { ACCESS_TOKEN, USER_MENU } from '@/config/constant';

const clearInfo = () => {
  ls.remove(ACCESS_TOKEN); //清除token
  ls.remove(USER_MENU); //清除菜单栏
};

export default clearInfo;
