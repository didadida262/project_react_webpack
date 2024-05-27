import React, {useContext} from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { BsNut,BsRocket, BsYinYang, BsRadioactive } from "react-icons/bs";
import {ThemeContext, ThemeMode} from '../../components/themeProvider'



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
    getItem('Test', 'threejs/threejstest',
    <BsRocket />
)
  ], 'group'),
  getItem('', 'grp', null, [
    getItem('Test', 'about', 
    <BsNut />
),
    getItem('ChatGpt', 'ChatGpt',
    <BsYinYang />
    ),
    getItem('TestCss', 'testcss',
    <BsRadioactive />
    )
  ], 'group'),
];

const App: React.FC = () => {
  const { currentTheme } = useContext(ThemeContext)

  const navigat = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigat(`/${e.key}`)
  };
  return (
    <Menu
      onClick={onClick}
      className={`w-[250px]`}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['paperjs']}
      mode="inline"
      items={items}
      theme={currentTheme === ThemeMode.LIGHT_MODE? 'light' : "dark"}
    />
  );
};

export default App;