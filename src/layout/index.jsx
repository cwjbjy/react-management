import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Helmet } from "react-helmet";
import { useRequest } from "ahooks";
import ls from "local-storage";
import ThemeContext from "./themeContext";
import RouterView from "../routes/routerView";
import API from "@/service/fetch/index";
import "./index.scss";
import { BackTop } from "antd";

const AppHome = (props) => {
  const { history, location } = props;

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

  const { data } = useRequest(() => API.getImage({ user_name: userName }), {
    ready: !!userName,
  });

  const fileName = useMemo(() => {
    return data && data.Data[0].photo;
  }, [data]);

  return (
    <>
      <Helmet>
        <title>react管理系统</title>
      </Helmet>
      <BackTop visibilityHeight={100} target={() => overFlowRef.current}/>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className={theme}>
          <Header fileName={fileName} username={userName} />
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
    </>
  );
};

export default AppHome;
