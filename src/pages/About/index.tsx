/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-08-12 17:10:59
 */

import { Button } from 'antd';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { getRandomColor } from 'miles_common_weapons';

import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  memo,
  useContext,
} from 'react';
import { Observable } from 'rxjs';

import { Sparkles } from '../../components/Sparkles';
import { ThemeContext, ThemeMode } from '../../components/themeProvider';
import Child from './Child';
import RenderComponents from './RenderProps';
import {dotData, dotClass} from '@/server/circleData'

import './index.scss';

const MemoSon = memo(Child);
const HOC = (ChildComponent) => {
  const res = (props) => {
    return (
      <div>
        <ChildComponent {...props}></ChildComponent>
        <div className='h-[1px] w-64 bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
    );
  };
  return res;
};
const TT = HOC(Child);

const AboutComponent = function () {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  let Ob1 = new Observable((observer) => {
    observer.next('observable');
  });
  Ob1.subscribe((value) => {
    console.log(value);
  });
  console.log('Ob1>>', Ob1);

  const [count, setcount] = useState({
    name: 1,
    old: 2,
  });
  const [count2, setcount2] = useState(0);
  console.log('父组件渲染');

  return (
    <div>
      {/* <Child count={count} /> */}
      <MemoSon count={count} />
      <span>count: {count.name}</span>
      <span>count2: {count2}</span>
      <Button
        onClick={() =>
          setcount({
            ...count,
            name: count.name + 1,
          })
        }>
        改变子数据
      </Button>
      <Button onClick={() => setcount2(count2 + 1)}>改变其他数据</Button>
      <TT />
      <div className='w-full h-[300px] markBorderG mt-[20px]'>测试虚拟列表</div>
    </div>
  );
};

export default AboutComponent;
