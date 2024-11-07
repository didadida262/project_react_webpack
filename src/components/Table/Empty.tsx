/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-11-04 15:03:51
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:10:56
 */
import cn from "classnames";
import { ReactNode } from "react";

interface IEmptyProps {
  className?: string;
  title?: ReactNode;
}
export function Empty(props: IEmptyProps) {
  const { className, title = "No Data" } = props;
  return (
    <div
      className={cn(
        className,
        "mx-auto flex w-full max-w-[402px] flex-col items-center justify-center gap-y-6 sm:gap-y-[52px]"
      )}
    >
      空。。。
      {typeof title === "string"
        ? <div className="font-Poppins text-[#B3B3C0]">
            {title}
          </div>
        : title}
    </div>
  );
}
