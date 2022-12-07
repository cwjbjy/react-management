import { clearAuthAndRedirect } from './clear';
import instance from './index';

import { REFRESH_ACTION } from '@/config/apiMap.js';
import { ACCESS_TOKEN, REFRESH_TOKEN, PASS } from '@/config/constant';

let subscribers = [];
let pending = false; //同时请求多个过期链接，保证只请求一次获取短token

export const addSubscriber = (request) => {
  subscribers.push(request);
};

export const retryRequest = () => {
  subscribers.forEach((request) => request());
  subscribers = [];
};

export const refreshAccessToken = async () => {
  if (!pending) {
    try {
      pending = true;
      const l_tk = localStorage.getItem(REFRESH_TOKEN);
      if (l_tk) {
        /* 重新获取短token */
        const { accessToken } = await instance.get(REFRESH_ACTION, Object.assign({}, { headers: { [PASS]: l_tk } }));
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        retryRequest();
      }
      return;
    } catch (e) {
      clearAuthAndRedirect();
      return;
    } finally {
      pending = false;
    }
  }
};
