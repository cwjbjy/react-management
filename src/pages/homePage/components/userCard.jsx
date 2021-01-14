import { Card } from "antd";
import { Row, Col } from "antd";
import { register } from "@/filter";
import "./userCard.scss";
const UserCard = (props) => {
  let { imageUrl, userName, registerTime, role } = props;
  return (
    <Card hoverable style={{ width: 342 }} className="user">
      <Row className="user-top">
        <Col span="12">
          <img src={imageUrl} className="user-img" alt="加载失败" />
        </Col>
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

export default UserCard;
