import { GET_DATA, GET_TOKEN } from "@/config/apiMap";
import { auth_url } from "@/config/urlMap.js";
import instance from "@/service/axios/index.js";

export const getData = () => {
  return instance.get(`${auth_url}${GET_DATA}`);
};

export const getToken = () => {
  return instance.get(`${auth_url}${GET_TOKEN}`);
};
