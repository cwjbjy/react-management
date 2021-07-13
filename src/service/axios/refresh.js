import instance from "./index";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/config/constant";
import {REFRESH_ACTION} from "@/config/apiMap"
import { clearAuthAndRedirect } from "./clear";
import {auth_url} from '@/config/urlMap.js'
const time = Date.now();

let subscribers = [];
let pending = false;

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
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (refreshToken) {
          /* 重新获取token */
        const {data} = await instance.get(
          `${auth_url}${REFRESH_ACTION}`,
          Object.assign(
            {},
            { params: { time }, headers: { authorization: refreshToken } }
          )
        );
        localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        /* 如果长token也想更新，可打开 */
        // localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
        retryRequest();
        return { accessToken: data.accessToken, refreshToken: data.refreshToken };
      }
      return {};
    } catch (e) {
    //   clearAuthAndRedirect();
      return;
    } finally {
      pending = false;
    }
  }
};
