import { Row, Col, Card, Space } from "antd";
import UserCard from "./components/userCard";
import ProgressCard from "./components/progressCard";
import Message from "./components/message";
import Schedule from "./components/schedule";
import Bar from "./components/bar";
import BarLine from "./components/barLine";
import ThemeContext from "../../layout/themeContext";
import { useContext, useMemo } from "react";
import API from "@/service/fetch/index";
import "./index.scss";
import { useRequest } from "ahooks";
import ls from 'local-storage'


const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  const userName = useMemo(()=>{
    return ls.get('userInfo').userName
  },[]);

  const { data } = useRequest(() => API.getImage({ user_name: userName },{
    ready:!!userName,
  }));

  const fileName = useMemo(() => {
    return data && data.Data[0].photo;
  }, [data]);

  const time = useRequest(() =>
    API.getUser({
      user_name: userName,
    })
  );

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
