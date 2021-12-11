import HttpClient from "@/service/fetch";

let API = {};

//获取用户单条信息
API.getUser = (params) => {
  return HttpClient.get(`/getUser`, {
    data: params,
  });
};

//获取所有用户信息
API.getUsers = () => {
  return HttpClient.get(`/user`);
};

//删除普通用户
API.deleteUser = (params) => {
  return HttpClient.delete(`/deleteUser`, {
    data: params,
  });
};

//修改管理员账户信息
API.updateUser = (params) => {
  return HttpClient.put(`/updateUser`, {
    data: params,
  });
};

//收集用户信息
API.getUserInfo = (params) => {
  return HttpClient.get(`/getUserInfo`, {
    data: params,
  });
};

export default API;
