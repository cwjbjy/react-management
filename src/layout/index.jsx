import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import "./index.scss";
import ThemeContext from "./themeContext";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet";
import RouterView from "../routes/routerView";
import { useUnmountedRef } from "ahooks";
import ls from "local-storage";
import { useRequest } from "ahooks";
import API from "@/service/index";

const AppHome = (props) => {
  const { history, location } = props;

  const unmountRef = useUnmountedRef();

  const [newMenus, setMenu] = useState([]);

  const [theme, setTheme] = useState("theme-gray");

  const userName = useMemo(() => {
    return ls.get("userInfo").userName;
  }, []);

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

  const { data } = useRequest(() => API.getImage({ user_name: userName }),{
    ready:!!userName
  });

  const fileName = useMemo(() => {
    return data && data.Data[0].photo;
  }, [data]);

  useEffect(() => {
    /* 页面刷新 */
    if (location.pathname !== "/home/firstItem") {
      history.push("/home/firstItem");
    }
  }, []);

  useEffect(() => {
    const getMenu = () => {
      let arr = [];
      let authMenus = localStorage.getItem("menu");
      menus.forEach((item) => {
        if (authMenus && authMenus.includes(item.key)) {
          arr.push(item);
        }
      });
      !unmountRef.current && setMenu(arr);
    };
    getMenu();
  }, []);

  return (
    <>
      <Helmet>
        <title>react管理系统</title>
      </Helmet>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className={theme}>
          <Header fileName={fileName} username={userName} />
          <main className="wrapper">
            <aside>
              <Menus menus={newMenus} />
            </aside>
            <article>
              <RouterView />
            </article>
          </main>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default AppHome;
