import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useUnmountedRef,useRequest } from "ahooks";
import ls from "local-storage";
import ThemeContext from "./themeContext";
import RouterView from "../routes/routerView";
import API from "@/service/fetch/index";
import "./index.scss";

const AppHome = (props) => {

  const { history, location } = props;

  const unmountRef = useUnmountedRef();

  const [newMenus, setMenu] = useState([]);

  const [theme, setTheme] = useState("theme-gray");

  const userName = useMemo(() =>ls.get("userInfo").userName, []);

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

  const { data } = useRequest(() => API.getImage({ user_name: userName }),{
    ready:!!userName
  });

  const fileName = useMemo(() => {
    return data && data.Data[0].photo;
  }, [data]);

  const getMenu = () => {
    let authMenus = ls.get("menu");
    let newMenus = menus.filter(item=>authMenus && authMenus.includes(item.key))
    !unmountRef.current && setMenu(newMenus);
  };

  useEffect(() => {
    /* 页面刷新 */
    if (location.pathname !== "/home/firstItem") {
      history.push("/home/firstItem");
    }
  }, []);

  useEffect(() => {
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
