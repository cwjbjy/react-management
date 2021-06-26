import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { connect } from "react-redux";
import "./index.scss";
import { SET_IMAGE } from "@/redux/action/img";
import { useEffect, useState } from "react/cjs/react.development";
import ThemeContext from "./themeContext";
import { useCallback } from "react";
const AppHome = (props) => {
  const [newMenus, setMenu] = useState([]);

  const [theme, setTheme] = useState("theme-gray");

  const changeTheme = useCallback((color) => {
    setTheme(color);
  }, []);

  const { history, location, routes, img, dispatch } = props;

  console.log(props);

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

  useEffect(() => {
    dispatch(SET_IMAGE({ user_name: localStorage.getItem("userName") }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={theme}>
        <Header imageUrl={img.imageUrl} />
        <main className="wrapper">
          <aside>
            <Menus newMenus={newMenus} />
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
