import { Row, Col } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../react-redux/action/userAction";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: props.img.imageUrl,
      userName: localStorage.getItem("userName"),
      registerTime:''
    };
  }
  componentDidMount() {
    let { userName } = this.state;
    let params = {
      user_name: userName,
    };
    this.props.userAction.getUser(params).then((res) => {
        this.setState({
            registerTime:res.Data[0].createTime
        })
    });
  }
  render() {
      let {imageUrl,userName,registerTime} = this.state
      let role =  userName === "一叶扁舟" ? "管理员" : "普通用户";
    return (
      <section>
        <Row>
          <Col span={8} lg={8} xl={8}>
            <UserCard imageUrl={imageUrl} userName={userName} registerTime={registerTime} role={role}/>
            <ProgressCard/>
          </Col>
          <Col span={16} lg={16} xl={16}>
            <Message/>
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
