import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import "./index.scss";

const { SubMenu } = Menu;

const Menus = (props) => {

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['firstItem']}
      mode="inline"
      className="Menu"
    >
      {props.newMenus.map((item, i) =>
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

export default withRouter(Menus);
