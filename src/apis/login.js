import HttpClient from '@/service/fetch';
import enumAuth from '@/service/fetch/auth.js';

let API = {};

API.login = (params) => {
  return HttpClient.post(`/login`, {
    data: params,
    auth: enumAuth.Level02,
  });
};

API.register = (params) => {
  return HttpClient.post(`/register`, {
    data: params,
    auth: enumAuth.Level02,
  });
};

export default API;
