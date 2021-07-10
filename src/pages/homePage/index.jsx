import { Row, Col, Card, Space } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from "./components/bar";
import BarLine from "./components/barLine";
import ThemeContext from "../../layout/themeContext";
import { useSelector } from "react-redux";
import { useContext, useMemo } from "react";
import API from "@/service";
import "./index.scss";
import { useRequest } from "ahooks";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const userName = useSelector((state) => state.login.userName);

  const imageUrl = useMemo(() => localStorage.getItem("imgUrl"), []);

  const { data } = useRequest(() =>
    API.getUser({
      user_name: userName,
    })
  );

  return (
    <section style={{ paddingLeft: 20 }}>
      <div className="row1">
        <Space direction="vertical" size={20}>
          <UserCard
            imageUrl={imageUrl}
            userName={userName}
            registerTime={data && data.Data[0].createTime}
          />
          <ProgressCard />
        </Space>
        <div style={{ marginLeft: 20, flex: 1 }}>
          <Message />
          <div className="Schedule">
            <Schedule />
          </div>
        </div>
      </div>
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

export default HomePage;
