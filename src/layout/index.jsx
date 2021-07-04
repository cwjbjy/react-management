import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { useSelector } from "react-redux";
import "./index.scss";
import { useEffect, useState } from "react/cjs/react.development";
import ThemeContext from "./themeContext";
import { useCallback } from "react";

import { Helmet } from "react-helmet";
import { useMemo } from "react";

let _isMounted = true;

const AppHome = (props) => {
  const { history, location, routes } = props;

  const [newMenus, setMenu] = useState([]);

  const [theme, setTheme] = useState("theme-gray");

  const userName = useSelector((state) => state.login.userName);

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

  const imageUrl = useMemo(()=>localStorage.getItem('imgUrl'),[])

  useEffect(() => {
    /* 页面刷新 */
    if (location.pathname !== "/home/firstItem") {
      history.push("/home/firstItem");
    }
  }, []);

  useEffect(() => {
    _isMounted = true
    const getMenu = () => {
      let arr = [];
      let authMenus = localStorage.getItem("menu");
      menus.forEach((item) => {
        if (authMenus && authMenus.includes(item.key)) {
          arr.push(item);
        }
      });
      if(!_isMounted) return
      setMenu(arr);
    };
    getMenu();
    return ()=>(_isMounted = false)
  }, []);

  return (
    <>
      <Helmet>
        <title>react管理系统</title>
      </Helmet>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className={theme}>
          <Header imageUrl={imageUrl} username={userName} />
          <main className="wrapper">
            <aside>
              <Menus menus={newMenus} />
            </aside>
            <article>{routes}</article>
          </main>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default AppHome;
