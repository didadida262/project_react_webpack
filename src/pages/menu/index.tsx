/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-25 15:13:17
 * @LastEditors: didadida262
 * @LastEditTime: 2024-05-06 16:37:11
 */
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
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
  getItem('Paperjs', 'paperjs', null, [
    getItem('标注', 'label', <PieChartOutlined />),
    getItem('Tank', 'tank', <AppstoreOutlined />),
    getItem('Tadpoles', 'tadpoles', <ContainerOutlined/>)], 'group'),
  getItem('Threejs', 'threejs', null, [
    getItem('Test', 'threejs/threejstest')
  ], 'group'),
  getItem('', 'grp', null, [
    getItem('Test', 'about'),
    getItem('ChatGpt', 'ChatGpt'),
    getItem('TestCss', 'testcss')
  ], 'group'),
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
      defaultOpenKeys={['paperjs']}
      mode="inline"
      items={items}
    />
  );
};

export default App;