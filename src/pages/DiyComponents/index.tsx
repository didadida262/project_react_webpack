/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:25:32
 */
import React from "react";
import { useState, memo, useEffect, useContext } from "react";
import { List } from "react-virtualized";

import { cn } from "@/lib/utils";
import { modelListBitCoinMock } from "@/mock/data";
import { Search } from "@/components/Search";
import { TableCommon } from "@/components/TableCommon";
import { LottieInView } from "@/components/LottieInView";
import { TypeWriterV2 } from "@/components/ui/TypeWriterV2";
import { TypeWriterV3 } from "@/components/ui/TypeWriterV3";
import { TypeWriterV4 } from "@/components/ui/TypeWriterV4";
import { TypeWriterV7 } from "@/components/ui/TypeWriterV7";
import { dotData, dotClass } from "@/server/circleData";
import { columns } from "@/mock/columns";
import { EarthCommonV3 } from "@/components/Earth/EarthCommonV3";
import { Graph } from "@/components/Graph";
import { Card3dComponent } from "@/components/ui/Card3dComponent";
import BlockChainLottie from "@/assets/lottie/Blockchains.json";
import Table from "@/components/Table";

import TypeWriter from "../../components/ui/TypeWriter";
import { ButtonCommon, EButtonType } from "../../components/ButtonCommon";
import { Card } from "../../components/Card";
import { SelectorCommon } from "../../components/SelectorCommon";
import { StickyScrollRevealDemo } from "../../components/StickyCompo";
import pattern from "../../styles/pattern";

import "react-virtualized/styles.css"; // 引入样式

export const pluginStatus = [
  { value: "all", label: "All Status" },
  { value: "installed", label: "Installed" },
  { value: "notInstalled", label: "Uninstalled" }
];
// const MemoSon = memo(ChildComponent)

const DiyComponents = () => {
  const [loading, setLoading] = useState(false);
  const [sortByStatus, setSortByStatus] = useState(pluginStatus[0]);
  const activeTab = "test";
  const [tableData, settableData] = useState({
    dataList: [
      {
        key: "key1",
        name: "key1",
        col1: "col1",
        col2: "col2",
        col3: "col3"
      }
    ],
    total: 1
  });
  const [currPage, setCurrPage] = useState(1);
  const [isTableLoading, setisTableLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
    <div className="h-full overflow-scroll ">
      <div className={`w-full ${pattern.flexCenter} h-[80px]`}>
        <span className="text-textFirstSize">公共组件库</span>
      </div>
      <div className={`pb-4 px-[16px] w-full  flex flex-wrap gap-x-5 gap-y-5`}>
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
          <div className=" w-[120px] ">
            <Search
              className=""
              onSearch={val => {
                console.log("seaerch>>>", val);
              }}
            />
          </div>
        </Card>
        <Card className="">
          <LottieInView animationData={BlockChainLottie} className="" />
        </Card>
        <Card className="flex flex-col gap-y-[10px]">
          <TypeWriterV4>
            <div className=" w-full h-full ">测试文本</div>
          </TypeWriterV4>
          <TypeWriterV7>
            <div className="">测试文本</div>
          </TypeWriterV7>
        </Card>
        <Card>
          <div className="w-full h-full overflow-auto">
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
        <Card>
          <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white to-transparent" />
        </Card>
        <Card className="">
          <div
            className={cn(`flex justify-center items-center w-full h-full"`)}
          >
            <TableCommon
              columns={columns}
              data={modelListBitCoinMock}
              className="w-full h-[150px]"
            />
          </div>
        </Card>
        <Card className="">
          <p className="test SingleLineTextOverflow bg-[black] text-[green]">
            这是一段很长很长的文本 这是一段很长很长的文本 这是一段很长很长的文本 这是一段很长很长的文本 这是一段很长很长的文本
            这是一段很长很长的文本 这是一段很长很长的文本
          </p>
        </Card>
        <Card>
          <span className="text-[36px] bg-gradient-to-b from-[#FFFFFF] to-[#97CDFF] bg-clip-text text-transparent">
            2024年3月22日
          </span>
        </Card>
        <Card className="earth">
          <EarthCommonV3 />
        </Card>
        <Card className="graph w-[500px] h-[600px]">
          <Graph />
        </Card>
        <Card className="w-[500px] h-[600px]">
          <Card3dComponent />
        </Card>
        <Card className="w-full h-[600px]">
          <Table
            type={activeTab}
            data={tableData}
            isLoading={isTableLoading}
            currPage={currPage}
            itemsPerPage={itemsPerPage}
            setCurrPage={setCurrPage}
            setItemsPerPage={setItemsPerPage}
            className="mt-4 w-full"
            headerRowClassName="bg-[#0f0713]"
            bodyRowClassName="bg-[#0f0713]"
          />
        </Card>
      </div>
    </div>
  );
};

export default DiyComponents;
