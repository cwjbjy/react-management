import { Component } from "react";
import { Link } from "react-router-dom";

import { menus } from "@/constant/menu.js";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

export default class Menus extends Component {
  constructor() {
    super();
    this.state = {
      current: "firstItem",
    };
  }
  handleClick = (e) => {
    console.log(e.key);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        selectedKeys={current}
        mode="inline"
      >
        {menus.map((item, i) =>
          !item.children ? (
            <Menu.Item key={item.key} icon={<MailOutlined />}>
              <Link exact="true" to={item.path}>
                {item.name}
              </Link>
            </Menu.Item>
          ) : (
            <SubMenu
              key={item.key}
              icon={<AppstoreOutlined />}
              title={item.name}
            >
              {item.children.map((itemChild, i) => (
                <Menu.Item key={itemChild.key}>
                  <Link exact="true" to={itemChild.path}>
                    {itemChild.name}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          )
        )}
      </Menu>
    );
  }
}
