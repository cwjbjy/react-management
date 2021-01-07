import { Component } from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      current: "login",
    };
  }
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="login">
          <Link to="/home" exact="true">
            login
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to="/home/signup" exact="true">
            signup
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
