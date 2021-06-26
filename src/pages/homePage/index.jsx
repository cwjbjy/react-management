import { Row, Col, Card, Space } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from "./components/bar";
import BarLine from "./components/barLine";
import { connect } from "react-redux";
import { useEffect } from "react";
import "./index.scss";
import ThemeContext from "../../layout/themeContext";
import { useContext } from "react";
import API from "@/service";
import { useState } from "react/cjs/react.development";
const HomePage = (props) => {
  const { theme } = useContext(ThemeContext);
  const { login } = props;
  const imageUrl = localStorage.getItem('imgUrl');
  const { userName } = login;
  const [time, setTime] = useState("");

  useEffect(() => {
    API.getUser({
      user_name: userName,
    }).then((res) => {
      setTime(res.Data[0].createTime);
    });
  }, []);

  return (
    <section style={{ paddingLeft: 20 }}>
      <Row>
        <Space direction="vertical" size={20}>
          <UserCard
            imageUrl={imageUrl}
            userName={userName}
            registerTime={time}
          />
          <ProgressCard />
        </Space>
        <Col flex="auto" style={{ paddingLeft: 20 }}>
          <Message />
          <div className="Schedule">
            <Schedule />
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Col span={12} lg={12} xl={12} className="echarts-box">
          <Card hoverable>
            <Bar theme={theme} />
          </Card>
        </Col>
        <Col span={12} lg={12} xl={12} className="echarts-box">
          <Card hoverable>
            <BarLine theme={theme} />
          </Card>
        </Col>
      </Row>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HomePage);
