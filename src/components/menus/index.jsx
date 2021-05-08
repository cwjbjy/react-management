
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import "./index.scss";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["drag", "flowChart"];

const Menus = (props) => {

  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['firstItem']}
      openKeys={openKeys}
      mode="inline"
      className="Menu"
      onOpenChange={onOpenChange}
    >
      {props.newMenus.map((item) =>
        !item.children ? (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link exact="true" to={item.path}>
              {item.name}
            </Link>
          </Menu.Item>
        ) : (
          <SubMenu key={item.key} title={item.name} icon={item.icon}>
            {item.children.map((itemChild) => (
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

export default withRouter(Menus);
