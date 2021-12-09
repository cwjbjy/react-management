import { Card, Modal, message } from "antd";
import PassChange from "./components/passChange";
import UserTable from "./components/userTable";
import { useState } from "react";
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

  const onModal = useCallback(({ isModalVisible, info }) => {
    setModal(isModalVisible);
    setInfo(info);
  }, []);

  const { data, run, loading } = useRequest(API.getUsers);

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

  const onDelete = useCallback(
    (value) => {
      let { id } = value;
      deleteUser.run({ id });
    },
    [deleteUser]
  );

  const handleOk = useCallback(() => {
    let { id, user_name } = info;
    const params = {
      id,
      user_name,
      password,
    };
    amend.run(params);
    setModal(false);
  }, [amend, info, password]);

  const getPass = useCallback((val) => setPassword(val), []);

  return (
    <section>
      {!loading && (
        <>
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
        </>
      )}
    </section>
  );
};

export default UserManage;
