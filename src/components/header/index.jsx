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
      removeCookie("token");
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
  const colorMenu = (
    <Menu onClick={onClick}>
      <Menu.Item key="0">简约灰</Menu.Item>
      <Menu.Item key="1">胖次蓝</Menu.Item>
      <Menu.Item key="2">夜间模式</Menu.Item>
    </Menu>
  );
  return (
    <header className="header">
      <div className="header_left">
        <span style={{ marginLeft: 10 }}>PC端后台管理系统(React版)</span>
      </div>
      <div className="header_right">
        <Dropdown overlay={colorMenu} className="user-drop">
          <i className="iconfont icon-zhuti_tiaosepan_o"></i>
        </Dropdown>
        <Dropdown overlay={menu} className="user-drop">
          <div className="userImage">
            <img src={imageUrl} className="user-img" alt="加载失败" />
            <span style={{ marginRight: 5 }}>
              <span style={{ marginRight: 2 }}>{userName}</span>
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
