import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('', 'grp', null, [getItem('Label', 'label'), getItem('About', 'about')], 'group'),
];

const App: React.FC = () => {
  const navigat = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigat(`/${e.key}`)
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 250 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;