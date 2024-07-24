/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-23 09:09:40
 */

import { motion } from 'framer-motion';
import React from 'react';
import { useState, memo, useEffect, useContext } from 'react';

import { ButtonCommon, EButtonType } from '../../components/ButtonCommon';
import { TextContext } from '../Layout';
import ChildComponent from './ChildrenComponent';

// const MemoSon = memo(ChildComponent)

const HomeComponent = () => {
  console.log(useContext(TextContext));
  console.log('父组件渲染');
  let [name] = useState('hhvcg');
  useEffect(() => {
    console.log('父组件-effect');
    return () => {
      console.log('父组件-destroy');
    };
  }, []);

  return (
    <div>
      <div>我是HomeComponent...</div>
      {/* <MemoSon name={name}/> */}
      <ChildComponent name={name} />
      <ButtonCommon
        type={EButtonType.PRIMARY}
        onClick={(e) => {
          console.log('Click');
          e.stopPropagation();
        }}>
        <span>测试按钮</span>
      </ButtonCommon>
      <div className='markBorderR w-[300px] h-[200px]'>asdasd</div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default HomeComponent;
