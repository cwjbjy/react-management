import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { connect } from "react-redux";
import "./index.scss";
import * as imgAction from "@/react-redux/action/img";
import * as themeAction from "@/react-redux/action/themeAction";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { readCookie } from "@/utils/cookie";
class AppHome extends Component {
  constructor() {
    super();
    this.state = {
      newMenus: [],
    };
  }
  componentDidMount() {
    if (!readCookie("auth")) {
      this.props.history.push("/login");
      return;
    }
    this.getMenu();
    this.getImage();
    /* 页面刷新 */
    if (this.props.location.pathname !== "/firstItem") {
      this.props.history.push("/firstItem");
    }
  }
  getMenu = () => {
    let arr = [];
    let authMenus = readCookie("auth");
    menus.forEach((item) => {
      if (item.key && authMenus.includes(item.key)) {
        arr.push(item);
      }
    });
    this.setState({
      newMenus: arr,
    });
  };
  getImage = () => {
    let params = {
      user_name: localStorage.getItem("userName"),
    };
    this.props.imgAction.SET_IMAGE(params);
  };
  render() {
    let { routes, theme, themeAction, img } = this.props;
    let { newMenus } = this.state;
    return (
      <div className={theme.themeColor}>
        <Header
          imageUrl={img.imageUrl}
          themeAction={themeAction}
          themeColor={theme.themeColor}
        />
        <main className="wrapper">
          <aside>
            <Menus newMenus={newMenus} />
          </aside>
          <article>{routes}</article>
        </main>
      </div>
    );
  }
}

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
