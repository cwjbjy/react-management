import { Card, Modal, message } from "antd";
import { connect } from "react-redux";
import * as userAction from "../../redux/action/user";
import { SET_USERS } from '../../redux/action/users'
import { bindActionCreators } from "redux";
import PassChange from "./components/passChange";
import UserTable from "./components/userTable";
import "./index.scss";
import { useEffect, useState } from "react/cjs/react.development";

const UserManage = (props)=>{

  const [ info , setInfo] = useState({})
  const [ isModalVisible , setModal] = useState(false)
  const [ password , setPassword] = useState('')

  let { userAction,SET_USERS,users } = props;

  useEffect(()=>{
    SET_USERS()
  },[])

  const onEdit = (params) => {
    let {isModalVisible,info} = params
    setModal(isModalVisible)
    setInfo(info)
  };

  const onDelete = (value) => {
    let { id } = value;
    userAction.DELETE_USER({id}).then(() => {
      message.success({
        content: "删除成功",
      });
      SET_USERS();
    });
  };

  const handleOk = () => {
    let { id, user_name } = info;
    let params = {
      id,
      user_name,
      password,
    };
    userAction.UPDATE_USER(params).then((res) => {
      if (res.code === 200) {
        message.success({
          content: "密码修改成功",
        });
        SET_USERS();
      }
    });
    setModal(false)
  };

  const getPass = (val)=>{
    setPassword(val)
  }

  return (
    <section>
      <Card hoverable>
        <strong>管理员可修改密码，普通用户可删除</strong>
        <UserTable
          tableData={users}
          userAction={userAction}
          onModal={onEdit}
          onDelete={onDelete}
        />
      </Card>
      <Modal
        title="修改密码"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={()=>setModal(false)}
      >
        <PassChange fn={getPass} />
      </Modal>
    </section>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch),
    SET_USERS:()=>{dispatch(SET_USERS())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
