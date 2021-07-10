import { Card, Modal, message } from "antd";
import PassChange from "./components/passChange";
import UserTable from "./components/userTable";
import { useState } from "react/cjs/react.development";
import API from "../../service";
import "./index.scss";
import { useRequest } from "ahooks";
import { SET_USER} from '@/redux/action/login'
import { useDispatch } from "react-redux";

const setData = (data) => {
  let newArr = [];
  data.forEach((item, index) => {
    let newItem = Object.assign({}, item, { key: index });
    newArr.push(newItem);
  });
  return newArr
};

const UserManage = () => {
  const [info, setInfo] = useState({});
  const [isModalVisible, setModal] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const onEdit = (params) => {
    let { isModalVisible, info } = params;
    setModal(isModalVisible);
    setInfo(info);
  };

  const { data, run } = useRequest(API.getUsers);

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
    let { key } = value;
    deleteUser.run({ id: key });
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
        dispatch(SET_USER({
          userName:user_name,
          passWord:password,
          flag: true,
      }))
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
          tableData={data && setData(data.data)}
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
