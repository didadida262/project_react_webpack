/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-16 14:52:40
 */
import cn from "classnames";
import { useRef, useEffect } from "react";

import { ReviewWafer } from "./ReviewWafer";
import { SiderComponent } from "./SiderComponent";

const WaferComponent = function() {
  useEffect(() => {}, []);
  return (
    <div className="container flex justify-between items-center w-full h-full">
      <div className={cn("w-[200px] h-full ")}>
        <SiderComponent />
      </div>
      <div className={cn("w-[calc(100%_-_210px)] h-full ")}>
        <ReviewWafer />
      </div>
    </div>
  );
};

export default WaferComponent;
