import { Card } from "antd";
import { Row, Col } from "antd";
import { register } from "@/filter";
import PropTypes from "prop-types";
import "./userCard.scss";
import React from "react";
import { img_url } from "@/service/fetch/lib/baseUrl.js";

const UserCard = ({ userName, registerTime, fileName }) => {
  let role = userName === "一叶扁舟" ? "管理员" : "普通用户";

  return (
    <Card hoverable className="user">
      <Row className="user-top">
        <Col span="12">
          {fileName && (
            <img
              src={`${img_url}${fileName}`}
              className="user-img"
              alt="加载失败"
            />
          )}
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
  userName: PropTypes.string,
  registerTime: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  userName: "一叶扁舟",
  registerTime: "2021-03-21",
  fileName: "",
};

export default React.memo(UserCard);
