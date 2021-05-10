import { Card } from "antd";
import { Row, Col } from "antd";
import { register } from "@/filter";
import PropTypes from 'prop-types'
import "./userCard.scss";

const UserCard = (props) => {

  const { userName, registerTime,imageUrl } = props;
  
  let role = userName === "一叶扁舟" ? "管理员" : "普通用户";

  return (
    <Card hoverable  className="user">
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

UserCard.propTypes = {
  userName:PropTypes.string.isRequired,
  registerTime:PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired
}

export default UserCard;
