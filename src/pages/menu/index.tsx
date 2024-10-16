/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-25 15:13:17
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-16 14:45:04
 */
import {
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import cn from 'classnames';
import React, { useContext } from 'react';
import { BsNut, BsRocket, BsYinYang, BsRadioactive } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { ThemeContext, ThemeMode } from '../../components/themeProvider';

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
  getItem(
    'Paperjs',
    'paperjs',
    null,
    [
      getItem('标注', 'label', <PieChartOutlined />),
      getItem('Tank', 'tank', <AppstoreOutlined />),
      getItem('Tadpoles', 'tadpoles', <ContainerOutlined />),
    ],
    'group',
  ),
  getItem(
    'Threejs',
    'threejs',
    null,
    [getItem('Test', 'threejs/threejstest', <BsRocket />)],
    'group',
  ),
  getItem(
    'other',
    'grp',
    null,
    [
      getItem('Test', 'test', <BsNut />),
      getItem('ChatGpt', 'ChatGpt', <BsYinYang />),
      getItem('TestCss', 'testcss', <BsRadioactive />),
      getItem('Earth', 'earth', <BsRadioactive />),
      getItem('DiyComponents', 'diycomponent', <BsRadioactive />),
      getItem('Wafer', 'wafer', <BsRadioactive />),
    ],
    'group',
  ),
];
interface IPropsNav {
  className: string;
}

const Nav = (props: IPropsNav) => {
  const { currentTheme } = useContext(ThemeContext);
  const { className } = props;

  const navigat = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigat(`/${e.key}`);
  };
  return (
    <Menu
      onClick={onClick}
      className={cn(`w-[250px] bg-[--bg-color]`, className)}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['paperjs']}
      mode='inline'
      items={items}
      theme={currentTheme === ThemeMode.LIGHT_MODE ? 'light' : 'dark'}
    />
  );
};

export default Nav;
