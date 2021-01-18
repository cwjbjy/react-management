import { Card, Modal, message } from "antd";
import { connect } from "react-redux";
import * as userAction from "../../react-redux/action/userAction";
import { bindActionCreators } from "redux";
import { Component } from "react";
import PassChange from "./components/passChange";
import UserTable from "./components/userTable";
import "./index.scss";
class UserManage extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
      info: {},
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    this.props.userAction.getUsers().then((res) => {
      let newArr = [];
      res.data.forEach((item, index) => {
        let newItem = Object.assign({}, item, { key: index });
        newArr.push(newItem);
      });
      this.setState({
        tableData: newArr,
      });
    });
  };

  render() {
    let { tableData, isModalVisible } = this.state;
    let { userAction } = this.props;
    return (
      <section>
        <Card hoverable>
          <strong>管理员可修改密码，普通用户可删除</strong>
          <UserTable
            tableData={tableData}
            userAction={userAction}
            onModal={this.onEdit}
            onDelete={this.onDelete}
          />
        </Card>
        <Modal
          title="修改密码"
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <PassChange userAction={userAction} />
        </Modal>
      </section>
    );
  }
  
  onEdit = (params) => {
    this.setState({
      isModalVisible: params.isModalVisible,
      info: params.info,
    });
  };

  onDelete = (value) => {
    let { id } = value;
    let params = {
      id,
    };
    this.props.userAction.deleteUser(params).then(() => {
      message.success({
        content: "删除成功",
      });
      this.getUsers();
    });
  };

  handleOk = () => {
    let { id, user_name } = this.state.info;
    let { password } = this.props.user;
    let params = {
      id,
      user_name,
      password,
    };
    this.props.userAction.updateUser(params).then((res) => {
      if (res.code === 200) {
        message.success({
          content: "密码修改成功",
        });
        this.getUsers();
      }
    });
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
