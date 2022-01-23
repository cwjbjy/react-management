import { Row, Col } from "antd";
import { Card } from "antd";
import {
    UserOutlined,NotificationOutlined,FileDoneOutlined
  } from '@ant-design/icons';
import './message.scss'
import React from 'react'
const Message = () => {
  return (
    <Row className="icon-area" style={{ marginBottom: 20 }}>
      <Col span="8" className="icon-box">
        <Card hoverable bodyStyle={{padding:0}}>
          <div className="icon-content">
          <UserOutlined className="grid-con-icon grid-con-1"/>
            <div className="icon-info">
              <div className="grid-num number1">1234</div>
              <div className="describe">用户访问量</div>
            </div>
          </div>
        </Card>
      </Col>
      <Col span="8" className="icon-box">
        <Card hoverable bodyStyle={{padding:0}}>
          <div className="icon-content">
          <NotificationOutlined className="grid-con-icon grid-con-2"/>
            <div className="icon-info">
              <div className="grid-num number1">234</div>
              <div className="describe">系统消息</div>
            </div>
          </div>
        </Card>
      </Col>
      <Col span="8" className="icon-box">
        <Card hoverable bodyStyle={{padding:0}}>
          <div className="icon-content">
          <FileDoneOutlined className="grid-con-icon grid-con-3"/>
            <div className="icon-info">
              <div className="grid-num number3">20</div>
              <div className="describe">订单</div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(Message);
