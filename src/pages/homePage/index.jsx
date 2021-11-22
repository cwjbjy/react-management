import { Row, Col, Card, Space } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from "./components/bar";
import BarLine from "./components/barLine";
import ThemeContext from "../../layout/themeContext";
import { useContext, useMemo, useState, useEffect } from "react";
import API from "@/service/fetch/index";
import "./index.scss";
import { useRequest } from "ahooks";
import ls from "local-storage";
import { useSelector } from "react-redux";
import React from "react";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        xAxis: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        series: [120, 200, 150, 80, 70, 110],
      });
    }, 0);
  });
}

const HomePage = () => {
  const { fileName } = useSelector((state) => state.file);

  const { theme } = useContext(ThemeContext);

  const userName = useMemo(() => ls.get("userInfo").userName, []);

  const time = useRequest(() =>
    API.getUser({
      user_name: userName,
    })
  );

  const [barModel, setBarModel] = useState();
  useEffect(() => {
    getData().then((res) => {
      setBarModel({ ...res });
    });
  }, []);

  return (
    <section style={{ paddingLeft: 20 }}>
      <div className="row1">
        <Space direction="vertical" size={20}>
          <UserCard
            fileName={fileName}
            userName={userName}
            registerTime={time.data && time.data.Data[0].createTime}
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
            <Bar theme={theme} model={barModel} />
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

export default React.memo(HomePage);
