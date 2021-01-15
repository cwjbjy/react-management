import { Row, Col, Card } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from './components/bar'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../react-redux/action/userAction";
import { useEffect, useState } from "react";
import "./index.scss";
const HomePage = (props) => {
  let {theme} = props;
  let imageUrl = props.img.imageUrl;
  let userName = localStorage.getItem("userName");
  let role = userName === "一叶扁舟" ? "管理员" : "普通用户";

  const [registerTime, getTime] = useState("");

  useEffect(() => {
    const params = {
      user_name: userName,
    };
    props.userAction.getUser(params).then((res) => {
      getTime(res.Data[0].createTime);
    });
  }, [userName, props.userAction]);

  return (
      <div className="homePage">
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
            <div className="Schedule">
              <Schedule />
            </div>
          </Col>
        </Row>
        <Row style={{marginBottom:20}}>
          <Col span={12} lg={12} xl={12} className="echarts-box">
            <Card hoverable>
              <Bar theme={theme}/>
            </Card>
          </Col>
          <Col span={12} lg={12} xl={12} className="echarts-box">
            <Card hoverable></Card>
          </Col>
        </Row>
      </div>
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
