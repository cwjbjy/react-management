import { Component } from "react";
import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import * as imgAction from "../../react-redux/action/imgAction";
import * as themeAction from "../../react-redux/action/themeAction";
import "./index.scss";
import { bindActionCreators } from "redux";
import { img_url } from "@/service/lib/baseUrl.js";
import { removeCookie } from "@/utils/cookie.js";
class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      imageUrl:props.img.imageUrl,
      userName:localStorage.getItem("userName")
    }
  }
  componentDidMount(){
    let {userName} = this.state;
    let params = {
      user_name: userName,
    };
    this.props.imgAction.getImage(params).then((res) => {
      let fileName = res.Data[0].photo;
      let imgURL = `${img_url}${fileName}`;
      this.setState({
        imageUrl:imgURL
      })
      sessionStorage.setItem("imageUrl", imgURL);
    });
  }
  onClick = ({ key }) => {
    if (key === "1") {
      removeCookie("token");
    }
  };
  onColor = ({ key }) => {
    this.props.themeAction.SET_THEME(key);
  };
  render() {
    let {imageUrl,userName,} = this.state 
    let {theme} = this.props;
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/cwjbjy/react-management"
          >
            项目仓库
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    const colorMenu = (
      <Menu onClick={this.onColor}>
        <Menu.Item key="theme-gray" className={theme.themeColor === 'theme-gray'?'themeActive':''}>简约灰</Menu.Item>
        <Menu.Item key="theme-blue" className={theme.themeColor === 'theme-blue'?'themeActive':''}>胖次蓝</Menu.Item>
        <Menu.Item key="theme-black" className={theme.themeColor === 'theme-black'?'themeActive':''}>夜间模式</Menu.Item>
      </Menu>
    );
    return (
      <header className="header">
        <div className="header_left">
          <span style={{ marginLeft: 10 }}>PC端后台管理系统(React版)</span>
        </div>
        <div className="header_right">
          <Dropdown overlay={colorMenu} className="user-drop">
            <i className="iconfont icon-zhuti_tiaosepan_o"></i>
          </Dropdown>
          <Dropdown overlay={menu} className="user-drop">
            <div className="userImage">
              <img src={imageUrl} className="user-img" alt="加载失败" />
              <span style={{ marginRight: 5 }}>
                <span style={{ marginRight: 2 }}>{userName}</span>
                <CaretDownOutlined />
              </span>
            </div>
          </Dropdown>
        </div>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
