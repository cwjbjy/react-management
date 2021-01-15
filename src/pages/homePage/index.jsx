import { Row, Col } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../react-redux/action/userAction";
import { useEffect, useState } from "react";
const HomePage = (props) => {

  let imageUrl = props.img.imageUrl;
  let userName = localStorage.getItem("userName");
  let role = userName === "一叶扁舟" ? "管理员" : "普通用户";

  const [registerTime, getTime] = useState('');

  useEffect(() => {
    const params = {
      user_name: userName,
    };
    props.userAction.getUser(params).then((res) => {
      getTime(res.Data[0].createTime);
    });
  }, [userName,props.userAction]);

  
  return (
    <section>
      <Row>
        <Col span={8} lg={8} xl={8}>
          <UserCard
            imageUrl={imageUrl}
            userName={userName}
            registerTime={registerTime}
            role={role}
          />
          <ProgressCard />
        </Col>
        <Col span={16} lg={16} xl={16}>
          <Message />
        </Col>
      </Row>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
