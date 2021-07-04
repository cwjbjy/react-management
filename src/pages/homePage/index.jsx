import { Row, Col, Card, Space } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from "./components/bar";
import BarLine from "./components/barLine";
import ThemeContext from "../../layout/themeContext";
import { useSelector } from "react-redux";
import { useEffect, useContext, useState } from "react";
import API from "@/service";
import { img_url } from "@/service/lib/baseUrl.js";
import "./index.scss";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const userName = useSelector((state) => state.login.userName);

  const [time, setTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    API.getImage({ user_name: userName }).then((res) => {
      let fileName = res.Data[0]?.photo;
      let imgURL = `${img_url}${fileName}`;
      setImageUrl(imgURL);
    });
  }, [userName]);

  useEffect(() => {
    API.getUser({
      user_name: userName,
    }).then((res) => {
      setTime(res.Data[0].createTime);
    });
  }, [userName]);

  return (
    <section style={{ paddingLeft: 20 }}>
      <div className="row1">
        <Space direction="vertical" size={20}>
          <UserCard
            imageUrl={imageUrl}
            userName={userName}
            registerTime={time}
          />
          <ProgressCard />
        </Space>
        <div style={{ marginLeft: 20,flex:1 }}>
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
