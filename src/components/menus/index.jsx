import { Link } from "react-router-dom";
import { menus } from "./config.jsx";
import { Menu } from "antd";
import "./index.scss";
import { useState } from "react";
const { SubMenu } = Menu;

const Menus = () => {
  const [current, setCurrent] = useState("firstItem");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      selectedKeys={current}
      mode="inline"
      className="Menu"
    >
      {menus.map((item, i) =>
        !item.children ? (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link exact="true" to={item.path}>
              {item.name}
            </Link>
          </Menu.Item>
        ) : (
          <SubMenu key={item.key} title={item.name} icon={item.icon}>
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
};

export default Menus;
