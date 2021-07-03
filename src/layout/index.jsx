import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { useSelector } from "react-redux";
import "./index.scss";
import { useEffect, useState } from "react/cjs/react.development";
import ThemeContext from "./themeContext";
import { useCallback } from "react";
import API from "@/service/index";
import { img_url } from "@/service/lib/baseUrl.js";
import {Helmet} from "react-helmet";

const AppHome = (props) => {
  const { history, location, routes } = props;

  const [newMenus, setMenu] = useState([]);

  const [imageUrl, setImageUrl] = useState("");

  const [theme, setTheme] = useState("theme-gray");

  const userName = useSelector((state) => state.login.userName);

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

  useEffect(() => {
    API.getImage({ user_name: userName }).then((res) => {
      let fileName = res.Data[0]?.photo;
      let imgURL = `${img_url}${fileName}`;
      setImageUrl(imgURL);
    });
  }, [userName]);

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
      setMenu(arr);
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
