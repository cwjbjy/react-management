import axios from "axios";
import { refreshAccessToken, addSubscriber } from "./refresh";
import { clearAuthAndRedirect } from "./clear";
import {
  CODE_LOGGED_OTHER,
  CODE_RELOGIN,
  CODE_TOKEN_EXPIRED,
  CODE_SUCCESS,
} from "@/config/returnCodeMap";
import { REFRESH_ACTION } from "@/config/apiMap";
import { ACCESS_TOKEN, AUTH } from "@/config/constant";

const baseURL = process.env.REACT_APP_AUTH_URL

const instance = axios.create({
  baseURL,
  timeout: 30000,
});

instance.interceptors.request.use(
  (config) => {
    let { headers } = config;
    const s_tk = localStorage.getItem(ACCESS_TOKEN);
    s_tk &&
      Object.assign(headers, {
        [AUTH]: s_tk,
      });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    let { config, data } = response;
    //retry:第一次请求过期，接口调用refreshAccessToken，第二次重新请求，还是过期则reject出去
    let { retry } = config;
    /* 延续Promise链 */
    return new Promise((resolve, reject) => {
      if (data["returncode"] !== CODE_SUCCESS) {
        if ([CODE_LOGGED_OTHER, CODE_RELOGIN].includes(data.returncode)) {
          clearAuthAndRedirect();
        } else if (config.url !== REFRESH_ACTION && data["returncode"] === CODE_TOKEN_EXPIRED && !retry) {
          config.retry = true;
          addSubscriber(() => resolve(instance(config)));
          refreshAccessToken();
        } else {
          return reject(data);
        }
      } else {
        resolve(data);
      }
    });
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
