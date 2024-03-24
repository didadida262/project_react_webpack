import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { Navigate, useNavigate } from 'react-router-dom';
>>>>>>> 481587ff3bbf71445e17a96d3b4ea9c5e887f977

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
<<<<<<< HEAD
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
=======
  getItem('Paperjs', 'paperjs', null, [getItem('标注', 'label'), getItem('Tadpoles', 'tadpoles')], 'group'),
  getItem('', 'grp', null, [getItem('Test', 'about')], 'group'),
];

const App: React.FC = () => {
  const navigat = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigat(`/${e.key}`)
>>>>>>> 481587ff3bbf71445e17a96d3b4ea9c5e887f977
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