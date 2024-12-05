/* eslint-disable @typescript-eslint/no-unsafe-call */
/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-11-05 14:55:06
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:16:37
 */

import { isNumber } from "lodash";

import progressIcon2 from "@/assets/images/squad/progressIcon2.svg";

interface IProps {
  value: number;
}

export default function RewardComponent(props: IProps) {
  const { value } = props;
  return (
    <div className="flex h-full w-full items-center justify-start">
      <span className=" ml-[16px]  text-[24px] font-medium text-[#ffffff]">
        {isNumber(value) ? value.toLocaleString() : "-"}
      </span>
    </div>
  );
}
