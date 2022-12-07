import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenusTypes } from './config';
import './index.scss';

interface Props {
  menus: MenusTypes[];
}

const { SubMenu } = Menu;

const rootSubmenuKeys = ['drag', 'flowChart'];

const Menus: React.FC<Props> = ({ menus }) => {
  const location = useLocation();

  const [selectedKey, setselectedKeys] = useState(['']);

  useEffect(() => {
    let index = location.pathname.lastIndexOf('/');
    let key = location.pathname.substr(index + 1);
    setselectedKeys([key]);
  }, [location]);

  const [openKeys, setOpenKeys] = useState<any[]>([]);

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      style={{ width: 256 }}
      selectedKeys={selectedKey}
      openKeys={openKeys}
      mode="inline"
      className="Menu"
      onOpenChange={onOpenChange}
    >
      {menus.map((item) =>
        !item.children ? (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={{ pathname: item.path }}>{item.name}</Link>
          </Menu.Item>
        ) : (
          <SubMenu key={item.key} title={item.name} icon={item.icon}>
            {item.children.map((itemChild) => (
              <Menu.Item key={itemChild.key}>
                <Link to={{ pathname: itemChild.path }}>{itemChild.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ),
      )}
    </Menu>
  );
};

export default React.memo(Menus);
