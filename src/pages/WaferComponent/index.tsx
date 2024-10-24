/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 10:52:16
 */
import { notification } from "antd";
import cn from "classnames";
import { useRef, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { getWaferInfo, getWaferDotInfo } from "@/server/waferAPI";

import { ReviewWafer } from "./ReviewWafer";
import { SiderComponent } from "./SiderComponent";

const WaferComponent = function() {
  const [waferInfo, setwaferInfo] = useState(null);
  const [dotData, setdotData] = useState(null);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    try {
      const r1 = await getWaferInfo();
      const r2 = await getWaferDotInfo();
      setwaferInfo(r1.data);
      setdotData(r2.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      notification.error({ message: "接口error..." });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return loading
    ? <div className="w-full h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className=" animate-spin w-[24px] " />
      </div>
    : <div className="container flex justify-between items-center w-full h-full">
        {waferInfo &&
          <div
            className={cn(
              "w-[200px] h-full border-borderFirstColor border-[1px] px-2 py-2"
            )}
          >
            <SiderComponent />
          </div>}
        {waferInfo &&
          <div
            className={cn(
              "w-[calc(100%_-_210px)] h-full border-borderFirstColor border-[1px] px-2 py-2"
            )}
          >
            <ReviewWafer waferInfo={waferInfo} dotData={dotData} />
          </div>}
      </div>;
};

export default WaferComponent;
