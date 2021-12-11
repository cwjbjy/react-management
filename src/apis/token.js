import { GET_DATA, GET_TOKEN } from "@/config/apiMap";
import instance from "@/service/axios/index.js";

export const getData = () => {
  return instance.get(GET_DATA);
};

export const getToken = () => {
  return instance.get(GET_TOKEN);
};
