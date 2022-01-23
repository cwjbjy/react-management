import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "./index.scss";
import { removeCookie } from "@/utils/cookie";
import ThemeContext from "../../layout/themeContext";
import React, { useContext, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRequest } from "ahooks";
import API from "@/apis";
import { SETFILENAME } from "@/store/file.js";
import { useHistory } from "react-router-dom";

interface Props {
  userName: string;
}

const img_url = process.env.REACT_APP_IMG_URL;

const Header: React.FC<Props> = ({ userName }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { fileName } = useSelector((state: any) => state.file);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data } = useRequest(() => API.getImage({ user_name: userName }), {
    ready: !!userName,
  });

  useEffect(() => {
    if (data) {
      dispatch(SETFILENAME(data.Data[0].photo));
    }
  }, [data, dispatch]);

  const onList = useCallback(
    ({ key }) => {
      if (key === "1") {
        history.push("/login");
        removeCookie("token");
      }
    },
    [history]
  );

  const menu = useMemo(
    () => (
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
    ),
    [onList]
  );
  const colorMenu = useMemo(
    () => (
      <Menu onClick={({ key }) => changeTheme(key)}>
        <Menu.Item
          key="theme-gray"
          className={(theme === "theme-gray" && "themeActive") as string}
        >
          简约灰
        </Menu.Item>
        <Menu.Item
          key="theme-blue"
          className={(theme === "theme-blue" && "themeActive") as string}
        >
          胖次蓝
        </Menu.Item>
        <Menu.Item
          key="theme-black"
          className={(theme === "theme-black" && "themeActive") as string}
        >
          夜间模式
        </Menu.Item>
      </Menu>
    ),
    [changeTheme, theme]
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
            {fileName && (
              <img
                src={`${img_url}${fileName}`}
                className="user-img"
                alt="加载失败"
              />
            )}
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

export default React.memo(Header);
