import { Card, Row, Col } from 'antd';
import React from 'react';

import { register } from '@/filter';
import './userCard.scss';
interface Props {
  userName: string;
  registerTime: string;
  fileName: string;
}

const img_url = process.env.REACT_APP_IMG_URL;

const UserCard: React.FC<Props> = ({ userName, registerTime, fileName }) => {
  let role = userName === '一叶扁舟' ? '管理员' : '普通用户';

  return (
    <Card hoverable className="user">
      <Row className="user-top">
        <Col span="12">{fileName && <img src={`${img_url}${fileName}`} className="user-img" alt="加载失败" />}</Col>
        <Col span="12" className="user-area">
          <div className="user-name">{userName}</div>
        </Col>
      </Row>
      <Row className="user-bottom">
        <div className="user-info-list">
          <span>注册时间：</span>
          <span>{register(registerTime)}</span>
        </div>
        <div className="user-info-list">
          <span>权限等级：</span>
          <span>{role}</span>
        </div>
      </Row>
    </Card>
  );
};

UserCard.defaultProps = {
  userName: '一叶扁舟',
  registerTime: '2021-03-21',
  fileName: '',
};

export default React.memo(UserCard);
