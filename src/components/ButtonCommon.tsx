/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 10:32:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 10:22:40
 */
import cn from "classnames";
import React, { MouseEvent, ReactNode, useMemo, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export enum EButtonType {
  PRIMARY = "PRIMARY",
  GHOST = "GHOST",
  BLANK = "BLANK",
  SIMPLE = "simple"
}
interface IButtonProps {
  className?: string;
  children: ReactNode;
  type?: EButtonType;
  title?: string;
  loading?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disable?: boolean;
  buttonType?: "submit" | "reset" | "button";
}
export function ButtonCommon(props: IButtonProps) {
  const {
    className,
    children,
    type = EButtonType.PRIMARY,
    loading = false,
    title,
    onClick,
    buttonType,
    disable = false
  } = props;
  const [cls, bpopbg] = useMemo(
    () => {
      const resultArray = [
        "rounded-[4px] flex items-center justify-center focus:outline-none px-[16px] py-[8px]"
      ];
      const popBg = ["border-t-[#333c4a]"];
      switch (type) {
        case EButtonType.PRIMARY:
          resultArray.push(
            "bg-bgFourthColor bg-btnPrimaryHover hover:opacity-75"
          );
          break;
        case EButtonType.GHOST:
          resultArray.push("bg-[#475062] hover:opacity-75");
          popBg.push("border-t-[#475062]");
          break;
        case EButtonType.BLANK:
          resultArray.push(
            "bg-[#21222D] border-[#3272C7] border-[1px] hover:opacity-75 text-[#3272C7]"
          );
          popBg.push("border-t-[#21222D]");
          break;
        case EButtonType.SIMPLE:
          resultArray.push(
            "bg-inherit border-borderSecondColor border-[1px] border-solid hover:opacity-75 text-textPrimaryColor"
          );
          popBg.push("border-t-[#21222D]");
          break;
        default:
          break;
      }
      return [resultArray.join(" "), popBg.join(" ")];
    },
    [type]
  );
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="relative ">
      <button
        type={buttonType}
        onClick={e => {
          if (!loading && onClick && !disable) {
            onClick(e as any);
          }
        }}
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={cn(
          cls,
          "fontBtn",
          " whitespace-nowrap",
          disable ? "cursor-not-allowed opacity-75" : "opacity-100",
          className
        )}
      >
        {children}
        {loading &&
          <AiOutlineLoading3Quarters className="ml-2 animate-spin w-[24px]" />}
      </button>
    </div>
  );
}
