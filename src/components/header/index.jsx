import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "./index.scss";
import {removeCookie} from '@/utils/cookie'
import { withRouter } from "react-router-dom";
function Header(props) {

  let {imageUrl,themeColor,themeAction,history} = props

  const onList = ({ key }) => {
    if (key === "1") {
      history.push('/login')
      removeCookie("token");
    }
  };
  const onColor = ({ key }) => {
    themeAction.SET_THEME(key);
  };

  const menu = (
    <Menu onClick={onList}>
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
    <Menu onClick={onColor}>
      <Menu.Item
        key="theme-gray"
        className={themeColor === "theme-gray" ? "themeActive" : ""}
      >
        简约灰
      </Menu.Item>
      <Menu.Item
        key="theme-blue"
        className={themeColor === "theme-blue" ? "themeActive" : ""}
      >
        胖次蓝
      </Menu.Item>
      <Menu.Item
        key="theme-black"
        className={themeColor === "theme-black" ? "themeActive" : ""}
      >
        夜间模式
      </Menu.Item>
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
              <span style={{ marginRight: 2 }}>{localStorage.getItem("userName")}</span>
              <CaretDownOutlined />
            </span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
}

export default withRouter(Header);
