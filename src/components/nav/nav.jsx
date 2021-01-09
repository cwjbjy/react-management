import { Component } from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      current: "homePage",
    };
  }
  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="homePage">
          <Link to="/home/homePage" exact="true">
            homePage
          </Link>
        </Menu.Item>
        <Menu.Item key="chart">
          <Link to="/home/chart" exact="true">
            chart
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
