import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

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
  getItem('Home', 'home', <AppstoreOutlined />),
  getItem('About', 'about', <AppstoreOutlined />),
  getItem('Paperjs', 'paperjs', <MailOutlined />, [
    getItem('', 'g1', null, [
      getItem('Label', 'label'), 
      // getItem('Game', 'game')
    ], 'group'),
  ]),
];

const App: React.FC = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    const keyPath = e.keyPath
    handleRouter(keyPath)
  };

  const handleRouter = (keyPath: Array<string>) => {
    navigate(`/${keyPath[0]}`)
  }

  return (
    <Menu
      onClick={onClick}
      style={{ width: 250 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['paperjs']}
      mode="inline"
      items={items}
      theme={'dark'}
    />
  );
};

export default App;