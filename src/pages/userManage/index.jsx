import { Card, Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_USERS } from "../../redux/action/users";
import PassChange from "./components/passChange";
import UserTable from "./components/userTable";
import { useEffect, useState } from "react/cjs/react.development";
import API from "../../service";
import "./index.scss";

const UserManage = (props) => {
  const [info, setInfo] = useState({});
  const [isModalVisible, setModal] = useState(false);
  const [password, setPassword] = useState("");
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SET_USERS());
  }, []);

  const onEdit = (params) => {
    let { isModalVisible, info } = params;
    setModal(isModalVisible);
    setInfo(info);
  };

  const onDelete = (value) => {
    let { id } = value;
    API.deleteUser({ id }).then(() => {
      message.success({
        content: "删除成功",
      });
      dispatch(SET_USERS());
    });
  };

  const handleOk = () => {
    let { id, user_name } = info;
    let params = {
      id,
      user_name,
      password,
    };
    API.updateUser(params).then((res) => {
      if (res.code === 200) {
        message.success({
          content: "密码修改成功",
        });
        dispatch(SET_USERS());
      }
    });
    setModal(false);
  };

  const getPass = (val) => {
    setPassword(val);
  };

  return (
    <section>
      <Card hoverable>
        <strong>管理员可修改密码，普通用户可删除</strong>
        <UserTable
          tableData={users}
          onModal={onEdit}
          onDelete={onDelete}
        />
      </Card>
      <Modal
        title="修改密码"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setModal(false)}
      >
        <PassChange fn={getPass} />
      </Modal>
    </section>
  );
};

export default UserManage;
