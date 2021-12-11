import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { useState, useCallback, useMemo, useRef } from "react";
import { Helmet } from "react-helmet";
import ls from "local-storage";
import ThemeContext from "./themeContext";
import RouterView from "../routes/routerView";
import "./index.scss";
import { BackTop } from "antd";
import Global from "../global/index";

const AppHome = () => {

  const overFlowRef = useRef();

  const [theme, setTheme] = useState("theme-gray");

  const userName = useMemo(() => ls.get("userInfo").userName, []);

  const newMenus = useMemo(() => {
    let authMenus = ls.get("menu");
    return menus.filter((item) => authMenus && authMenus.includes(item.key));
  }, []);

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

  return (
    <>
      <Helmet>
        <title>react管理系统</title>
      </Helmet>
      <BackTop visibilityHeight={100} target={() => overFlowRef.current} />
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className={theme}>
          <Header userName={userName} />
          <main className="wrapper">
            <aside>
              <Menus menus={newMenus} />
            </aside>
            <article ref={overFlowRef}>
              <RouterView />
            </article>
          </main>
        </div>
      </ThemeContext.Provider>
      <Global/>
    </>
  );
};

export default AppHome;
