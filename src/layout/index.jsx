import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { menus } from "../components/menus/config.jsx";
import { connect } from "react-redux";
import "./index.scss";
import * as imgAction from "@/react-redux/action/imgAction";
import * as themeAction from "@/react-redux/action/themeAction";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { img_url } from "@/service/lib/baseUrl.js";
import {readCookie} from '@/utils/cookie'
class AppHome extends Component {
  constructor(){
    super()
    this.state={
      imageUrl:'',
      newMenus:[] 
    }
  }
  componentDidMount(){
    /* 动态加载菜单栏 */
    let authMenus = readCookie("auth");
    let arr = [];
    menus.forEach((item) => {
      if (item.key && authMenus.includes(item.key)) {
        arr.push(item);
      }
    });
    this.setState({
      newMenus:arr
    })
    /* 获取头像 */
    let params = {
      user_name: localStorage.getItem("userName"),
    };
    this.props.imgAction.getImage(params).then((res) => {
      let fileName = res.Data[0].photo;
      let imgURL = `${img_url}${fileName}`;
      this.setState({
        imageUrl:imgURL
      })
      sessionStorage.setItem("imageUrl", imgURL);
    });
    /* 页面刷新 */
    if(this.props.location.pathname !== '/firstItem'){
      this.props.history.push('/firstItem')
    }
  }
  render(){
    let {routes,theme,themeAction} = this.props
    let {imageUrl,newMenus} = this.state
    return (
      <div className={theme.themeColor}>
        <Header imageUrl={imageUrl} themeAction={themeAction} theme={theme}/>
        <main className="wrapper">
          <aside>
            <Menus newMenus={newMenus}/>
          </aside>
          <article>{routes}</article>
        </main>
      </div>
    );
  }
};

const mapStateToProps = (state)=>{
  return state
}

const mapDispatchToProps = (dispatch)=>{
  return{
    imgAction: bindActionCreators(imgAction, dispatch),
    themeAction: bindActionCreators(themeAction, dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppHome);
