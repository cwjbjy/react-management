import { Card, Modal, message } from "antd";
import PassChange from "./components/passChange";
import UserTable from "./components/userTable";
import { useState } from "react/cjs/react.development";
import API from "@/service/fetch/index";
import "./index.scss";
import { useRequest } from "ahooks";
import ls from "local-storage";
import { useCallback } from "react";

const setData = (data) => {
  let newArr = [];
  data.forEach((item, index) => {
    let newItem = Object.assign({}, item, { key: index });
    newArr.push(newItem);
  });
  return newArr;
};

const UserManage = () => {
  const [info, setInfo] = useState({});
  const [isModalVisible, setModal] = useState(false);
  const [password, setPassword] = useState("");

  const onModal = (params) => {
    let { isModalVisible, info } = params;
    setModal(isModalVisible);
    setInfo(info);
  };

  const { data, run } = useRequest(API.getUsers);

  const amend = useRequest(API.updateUser, {
    manual: true,
    onSuccess: (data, params) => {
      if (data.code === 200) {
        message.success({
          content: "密码修改成功",
        });
        ls.set("userInfo", {
          userName: params[0].user_name,
          passWord: params[0].password,
          flag: true,
        });
      }
    },
  });

  const deleteUser = useRequest(API.deleteUser, {
    manual: true,
    onSuccess: () => {
      message.success({
        content: "删除成功",
      });
      run();
    },
  });

  const onDelete = (value) => {
    let { id } = value;
    deleteUser.run({ id });
  };

  const handleOk = () => {
    let { id, user_name } = info;
    const params = {
      id,
      user_name,
      password,
    };
    amend.run(params);
    setModal(false);
  };

  const getPass = useCallback((val) => setPassword(val), []);

  return (
    <section>
      <Card hoverable>
        <strong>管理员可修改密码，普通用户可删除</strong>
        <UserTable
          tableData={data && setData(data.data)}
          onModal={onModal}
          onDelete={onDelete}
        />
      </Card>
      <Modal
        title="修改密码"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setModal(false)}
      >
        <PassChange getPass={getPass} />
      </Modal>
    </section>
  );
};

export default UserManage;
