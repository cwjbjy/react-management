import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useRequest } from "ahooks";
import ls from "local-storage";
import ThemeContext from "./themeContext";
import RouterView from "../routes/routerView";
import API from "@/service/fetch/index";
import "./index.scss";
import { BackTop } from "antd";
import { SET_FILENAME } from "@/redux/action/img";
import {connect} from 'react-redux'

const AppHome = (props) => {

  const {SETFILENAME} = props

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
    if (data) {
      SETFILENAME(data.Data[0].photo)
      return data.Data[0].photo;
    }
  }, [data,SETFILENAME]);

  return (
    <>
      <Helmet>
        <title>react管理系统</title>
      </Helmet>
      <BackTop visibilityHeight={100} target={() => overFlowRef.current} />
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

const mapDispatchToProps = (dispatch)=>{
  return {
    SETFILENAME:(params)=>dispatch(SET_FILENAME(params))
  }
}

export default connect(null,mapDispatchToProps)(AppHome);
