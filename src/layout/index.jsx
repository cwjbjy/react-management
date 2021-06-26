import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { connect } from "react-redux";
import "./index.scss";
import * as imgAction from "@/redux/action/img";
import { bindActionCreators } from "redux";
import { readCookie } from "@/utils/cookie";
import { useEffect, useState } from "react/cjs/react.development";
import ThemeContext from "./themeContext";
import { useCallback } from "react";
const AppHome = (props) => {

  const [newMenus, setMenu] = useState([]);

  const [theme,setThemeState] = useState('theme-gray')

  const changeTheme = useCallback((color)=>{
    setThemeState(color)
  },[])
  
  const { history, location, imgAction, routes, img } =
    props;

  useEffect(() => {
    /* 页面刷新 */
    if (location.pathname !== "/home/firstItem") {
      history.push("/home/firstItem");
    }
  }, []);

  useEffect(() => {
    const getMenu = () => {
      let arr = [];
      let authMenus = readCookie("auth");
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
    const getImage = () => {
      let params = {
        user_name: localStorage.getItem("userName"),
      };
      imgAction.SET_IMAGE(params);
    };
    getImage();
  }, []);

  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <div className={theme}>
        <Header
          imageUrl={img.imageUrl}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    imgAction: bindActionCreators(imgAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHome);
