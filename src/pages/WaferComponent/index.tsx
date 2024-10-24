/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 16:24:27
 */
import { notification } from "antd";
import cn from "classnames";
import { useRef, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { getWaferInfo, getWaferDotInfo } from "@/server/waferAPI";
import store from "@/store";

import { ReviewWafer } from "./ReviewWafer";
import { SiderComponent } from "./SiderComponent";

const WaferComponent = function() {
  const { waferInfo, status } = useSelector((state: any) => state.wafer);

  const [dotData, setdotData] = useState(null);
  const [loading, setloading] = useState(true);
  // const getData = async () => {
  //   try {
  //     const r1 = await getWaferInfo();
  //     const r2 = await getWaferDotInfo();
  //     setdotData(r2.data);
  //     setloading(false);
  //   } catch (error) {
  //     setloading(false);
  //     notification.error({ message: "接口error..." });
  //   }
  // };
  useEffect(() => {
    // getData();
  }, []);
  return (
    <Provider store={store}>
      <div className="container flex justify-between items-center w-full h-full">
        <div
          className={cn(
            "w-[200px] h-full border-borderFirstColor border-[1px] px-2 py-2"
          )}
        >
          <SiderComponent />
        </div>
        {waferInfo &&
          <div
            className={cn(
              "w-[calc(100%_-_210px)] h-full border-borderFirstColor border-[1px] px-2 py-2"
            )}
          >
            <ReviewWafer />
          </div>}
      </div>
    </Provider>
  );

  // loading
  //   ? <div className="w-full h-full flex items-center justify-center">
  //       <AiOutlineLoading3Quarters className=" animate-spin w-[24px] " />
  //     </div>
  //   :
};

export default WaferComponent;
