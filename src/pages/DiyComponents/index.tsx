/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-08-02 11:02:58
 */

import React from 'react';
import { useState, memo, useEffect, useContext } from 'react';

import { Search } from '@/components/Search';
import { LottieInView } from '@/components/LottieInView';
import BlockChainLottie from '@/assets/lottie/Blockchains.json';

import { ButtonCommon, EButtonType } from '../../components/ButtonCommon';
import { Card } from '../../components/Card';
import { SelectorCommon } from '../../components/SelectorCommon';
import { StickyScrollRevealDemo } from '../../components/StickyCompo';
import TypeWriter from '../../components/TypeWriter';
import pattern from '../../styles/pattern';

export const pluginStatus = [
  { value: 'all', label: 'All Status' },
  { value: 'installed', label: 'Installed' },
  { value: 'notInstalled', label: 'Uninstalled' },
];
// const MemoSon = memo(ChildComponent)

const DiyComponents = () => {
  const [loading, setLoading] = useState(false);
  const [sortByStatus, setSortByStatus] = useState(pluginStatus[0]);

  console.log('父组件渲染');
  let [name] = useState('hhvcg');
  useEffect(() => {
    console.log('父组件-effect');
    return () => {
      console.log('父组件-destroy');
    };
  }, []);

  return (
    <div className='h-full'>
      <div className={`w-full ${pattern.flexCenter} h-[80px]`}>
        <span className='text-textFirstSize'>公共组件库</span>
      </div>
      <div
        className={`px-[16px] w-full h-[calc(100%_-_80px)]  grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(270px,1fr))]`}>
        {/* <MemoSon name={name}/> */}
        <Card>
          <ButtonCommon
            type={EButtonType.PRIMARY}
            loading={loading}
            onClick={(e) => {
              setLoading(true);
              console.log('Click');
              e.stopPropagation();
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            // className='markBorderG'
          >
            <span>测试按钮</span>
          </ButtonCommon>
        </Card>
        <Card>
          <TypeWriter text='测试文本' className={' text-textFirstSize'} />
        </Card>
        <Card>
          <SelectorCommon
            value={sortByStatus}
            setValue={(val: any) => {
              setSortByStatus(val);
            }}
            options={pluginStatus}
            className=''
          />
        </Card>
        <Card>
          <StickyScrollRevealDemo />
        </Card>
        <Card>
          <span className='bg-gradient-to-r  from-yellow-200 to-violet-500 bg-clip-text text-transparent'>
            这是一段测试文本
          </span>
        </Card>
        <Card className=''>
          <div className=''>
            <Search
              className=''
              onSearch={(val) => {
                console.log('seaerch>>>', val);
              }}
            />
          </div>
        </Card>
        <Card>
          <LottieInView animationData={BlockChainLottie} />
        </Card>
      </div>
    </div>
  );
};

export default DiyComponents;
