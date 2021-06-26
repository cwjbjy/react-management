import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { connect } from "react-redux";
import "./index.scss";
import { useEffect, useState } from "react/cjs/react.development";
import ThemeContext from "./themeContext";
import { useCallback } from "react";
const AppHome = (props) => {

  const { history, location, routes, login } = props;

  const [newMenus, setMenu] = useState([]);

  const [theme, setTheme] = useState("theme-gray");

  const imageUrl = localStorage.getItem('imgUrl');

  const { userName } = login;

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

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
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AppHome);
