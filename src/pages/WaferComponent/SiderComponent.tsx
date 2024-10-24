/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-16 14:49:39
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 16:29:07
 */
import {
  fetchWaferInfoAsync,
  fetchWaferDotDataAsync
} from "@/store/wafer/waferSlice";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { ButtonCommon, EButtonType } from "@/components/ButtonCommon";

export const SiderComponent = () => {
  const dispatch = useDispatch();
  const { waferInfo, status } = useSelector((state: any) => state.wafer);
  return (
    <div className="w-full h-full ">
      <div className="w-full">
        {/* {waferInfo} */}
      </div>
      <div className="w-full">
        {status}
      </div>
      <ButtonCommon
        className="w-full"
        type={EButtonType.SIMPLE}
        onClick={() => {
          dispatch(fetchWaferInfoAsync());
          dispatch(fetchWaferDotDataAsync());
        }}
      >
        <span className="">获取数据</span>
      </ButtonCommon>
    </div>
  );
};
