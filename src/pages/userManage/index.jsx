import "./index.scss";
import {
  Card,
  Table,
  Image,
  Button,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import * as userAction from "../../react-redux/action/userAction";
import { bindActionCreators } from "redux";
import { Component } from "react";
import { img_url } from "../../service/lib/baseUrl";

class UserManage extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
      isModalVisible: false,
      password: "",
      info: {},
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
    const columns = [
      {
        title: "用户名",
        dataIndex: "user_name",
        align: "center",
      },
      {
        title: "单击图像可以放大",
        dataIndex: "photo",
        align: "center",
        render: (text) => <Image width={40} src={`${img_url}${text}`} />,
      },
      {
        title: "角色描述",
        dataIndex: "authority",
        align: "center",
        render: (text) => (
          <span className={text === 1 ? "blue" : ""}>
            {text === 1 ? "管理员" : "普通用户"}
          </span>
        ),
      },
      {
        title: "注册时间",
        dataIndex: "createTime",
        align: "center",
      },
      {
        title: "操作",
        key: "action",
        align: "center",
        render: (text, record) => (
          <>
            {record.authority === 1 ? (
              <Button
                type="text"
                className="blue"
                icon={<EditOutlined />}
                onClick={this.onEdit.bind(this, record)}
              >
                编辑
              </Button>
            ) : (
              <Popconfirm
                title="确认删除?"
                onConfirm={this.onDelete.bind(this, record)}
                onCancel={this.cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="text" className="red" icon={<DeleteOutlined />}>
                  删除
                </Button>
              </Popconfirm>
            )}
          </>
        ),
      },
    ];
    let { tableData, isModalVisible, password } = this.state;
    return (
      <section>
        <Card hoverable>
          <Table bordered columns={columns} dataSource={tableData} />
        </Card>
        <Modal
          title="修改密码"
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form name="basic">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password value={password} onChange={this.onPassword} />
            </Form.Item>
          </Form>
        </Modal>
      </section>
    );
  }
  cancel = () => {};
  onEdit(params) {
    this.setState({
      isModalVisible: true,
      info: params,
    });
  }

  handleOk = () => {
    let { id, user_name } = this.state.info;
    let { password } = this.state;
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

  onDelete(value) {
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
  }

  onPassword = (e) => {
    this.setState({
      password: e.target.value,
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
