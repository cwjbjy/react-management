import { Row, Col, Card } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from './components/bar';
import BarLine from './components/barLine'
import { connect } from "react-redux";
import { SET_USER } from "../../react-redux/action/user";
import { useEffect } from "react";
import "./index.scss";
const HomePage = (props) => {
  let {theme,img,user,SET_USER} = props;
  let userName = localStorage.getItem("userName");
  

  useEffect(() => {
    let params = {
      user_name: userName,
    };
    SET_USER(params);
  }, []);

  return (
      <div className="homePage">
        <Row>
          <Col span={8} lg={8} xl={8}>
            <UserCard
              imageUrl={img.imageUrl}
              userName={userName}
              registerTime={user.time}
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
            <Card hoverable>
              <BarLine theme={theme}/>
            </Card>
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
    SET_USER: (params)=>{dispatch(SET_USER(params))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
