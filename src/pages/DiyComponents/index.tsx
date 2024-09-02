/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-02 10:49:31
 */

import React from "react";
import { useState, memo, useEffect, useContext } from "react";
import { List } from "react-virtualized";

import { Search } from "@/components/Search";
import { LottieInView } from "@/components/LottieInView";
import { TypeWriterV2 } from "@/components/ui/TypeWriterV2";
import { TypeWriterV3 } from "@/components/ui/TypeWriterV3";
import { TypeWriterV4 } from "@/components/ui/TypeWriterV4";
import { TypeWriterV7 } from "@/components/ui/TypeWriterV7";
import { dotData, dotClass } from "@/server/circleData";
import BlockChainLottie from "@/assets/lottie/Blockchains.json";

import TypeWriter from "../../components/ui/TypeWriter";
import { ButtonCommon, EButtonType } from "../../components/ButtonCommon";
import { Card } from "../../components/Card";
import { SelectorCommon } from "../../components/SelectorCommon";
import { StickyScrollRevealDemo } from "../../components/StickyCompo";
import pattern from "../../styles/pattern";

export const pluginStatus = [
  { value: "all", label: "All Status" },
  { value: "installed", label: "Installed" },
  { value: "notInstalled", label: "Uninstalled" }
];
// const MemoSon = memo(ChildComponent)

const DiyComponents = () => {
  const [loading, setLoading] = useState(false);
  const [sortByStatus, setSortByStatus] = useState(pluginStatus[0]);

  console.log("父组件渲染");
  let [name] = useState("hhvcg");
  useEffect(() => {
    console.log("父组件-effect");
    return () => {
      console.log("父组件-destroy");
    };
  }, []);
  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {dotData[index].id}
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className={`w-full ${pattern.flexCenter} h-[80px]`}>
        <span className="text-textFirstSize">公共组件库</span>
      </div>
      <div
        className={`px-[16px] w-full h-[calc(100%_-_80px)]  grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(270px,1fr))]`}
      >
        <Card>
          <ButtonCommon
            type={EButtonType.PRIMARY}
            loading={loading}
            onClick={e => {
              setLoading(true);
              console.log("Click");
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
        <Card className="flex flex-col gap-y-[5px]">
          <TypeWriter text="测试文本" className={" text-textFirstSize"} />
          <TypeWriterV2
            className="bg-gradient-to-r from-[#CBD5FB] to-[#1E70F5] bg-clip-text text-transparent"
            words="This is a test paragraph!!"
          />
          <TypeWriterV3 className="" words="This is a test paragraph!!" />
          <span className="bg-gradient-to-r  from-yellow-200 to-violet-500 bg-clip-text text-transparent">
            这是一段测试文本
          </span>
        </Card>
        <Card>
          <SelectorCommon
            value={sortByStatus}
            setValue={(val: any) => {
              setSortByStatus(val);
            }}
            options={pluginStatus}
            className=""
          />
        </Card>

        <Card className="">
          <div className="">
            <Search
              className=""
              onSearch={val => {
                console.log("seaerch>>>", val);
              }}
            />
          </div>
        </Card>
        <Card>
          <LottieInView animationData={BlockChainLottie} />
        </Card>
        <Card className="flex flex-col gap-y-[10px]">
          <TypeWriterV4>
            <div className=" w-full h-full markBorderR">测试文本</div>
          </TypeWriterV4>
          <TypeWriterV7>
            <div className="markBorderR">测试文本</div>
          </TypeWriterV7>
        </Card>
        <Card>
          <div className="w-full h-full   overflow-auto">
            <List
              className=""
              width={300}
              height={200}
              rowCount={dotData.length}
              rowHeight={50}
              rowRenderer={rowRenderer}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DiyComponents;
