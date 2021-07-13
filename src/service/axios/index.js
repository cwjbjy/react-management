import axios from "axios";
import { refreshAccessToken, addSubscriber } from "./refresh";
import { clearAuthAndRedirect } from "./clear";
import {
  CODE_TOKEN_STOLEN,
  CODE_LOGGED_BY_OTHER_CLIENT,
  CODE_TOKEN_MODIFIED,
  CODE_RELOGIN,
  CODE_TOKEN_EXPIRED,
} from "@/config/returnCodeMap";
import { REFRESH_ACTION } from "@/config/apiMap";
import { ACCESS_TOKEN, AUTH_TOKEN_KEY ,REFRESH_TOKEN} from "@/config/constant";

/* 模拟存储一个长token */
localStorage.setItem(REFRESH_TOKEN,'long_token')

const instance = axios.create({
  baseURL: "",
  timeout: 30000,
});

instance.interceptors.request.use(
  (config) => {
    let { headers } = config;
    const token = localStorage.getItem(ACCESS_TOKEN);
    token &&
      Object.assign(headers, {
        [AUTH_TOKEN_KEY]: token,
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
    let { retry } = config;
    /* 延续Promise链 */
    return new Promise((resolve, reject) => {
      if (data["returncode"] !== 0) {
        if (
          [
            CODE_TOKEN_MODIFIED,
            CODE_TOKEN_STOLEN,
            CODE_LOGGED_BY_OTHER_CLIENT,
            CODE_RELOGIN,
          ].includes(data.returncode)
        ) {
          clearAuthAndRedirect();
        } else if (
          config.url !== REFRESH_ACTION &&
          data["returncode"] === CODE_TOKEN_EXPIRED &&
          !retry
        ) {
          config.retry = true;
          refreshAccessToken();
          /* 保持Promise链 */
          addSubscriber(() => resolve(instance(config)));
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