import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { connect } from "react-redux";
import "./index.scss";
import * as imgAction from "@/redux/action/img";
import * as themeAction from "@/redux/action/theme";
import { bindActionCreators } from "redux";
import { readCookie } from "@/utils/cookie";
import { useEffect, useState } from "react/cjs/react.development";
const AppHome = (props) => {
  const [newMenus, setMenu] = useState([]);
  const {
    history,
    location,
    imgAction,
    routes,
    theme,
    themeAction,
    img,
  } = props;

  useEffect(() => {
    /* 页面刷新 */
    if (location.pathname !== "/firstItem") {
      history.push("/firstItem");
    }
    getMenu();
    getImage();
  }, []);

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

  const getImage = () => {
    let params = {
      user_name: localStorage.getItem("userName"),
    };
    imgAction.SET_IMAGE(params);
  };
  
  return (
    <div className={theme}>
      <Header
        imageUrl={img.imageUrl}
        themeAction={themeAction}
        themeColor={theme}
      />
      <main className="wrapper">
        <aside>
          <Menus newMenus={newMenus} />
        </aside>
        <article>{routes}</article>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    imgAction: bindActionCreators(imgAction, dispatch),
    themeAction: bindActionCreators(themeAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHome);
