import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import * as imgAction from "../../react-redux/action/imgAction";
import "./index.scss";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import { img_url } from "@/service/lib/baseUrl.js";
import { removeCookie } from "@/utils/cookie.js";
const Header = (props) => {
  let userName = localStorage.getItem("userName");
  const [imageUrl, setImageUrl] = useState(props.img.imageUrl);
  useEffect(() => {
    let params = {
      user_name: userName,
    };
    props.imgAction.getImage(params).then((res) => {
      let fileName = res.Data[0].photo;
      let imgURL = `${img_url}${fileName}`;
      setImageUrl(imgURL);
      sessionStorage.setItem("imageUrl", imgURL);
    });
  });
  const onClick = ({ key }) => {
    if (key === "1") {
        removeCookie('token')
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cwjbjy/react-management"
        >
          项目仓库
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <header className="header">
      <div className="header_left">PC端后台管理系统(React版)</div>
      <div className="header_right">
        <Dropdown overlay={menu} className="user-drop">
          <div className="userImage">
            <img src={imageUrl} className="user-img" alt="加载失败" />
            <span style={{ marginRight: 10 }}>
              <span style={{ marginRight: 2 }}>管理员</span>
              {/* {{user_name}} */}
              <CaretDownOutlined />
            </span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    imgAction: bindActionCreators(imgAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
