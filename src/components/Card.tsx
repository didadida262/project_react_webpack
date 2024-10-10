/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-07-16 19:30:39
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-10 15:11:37
 */
import cn from "classnames";
import React, { ReactNode } from "react";

import pattern from "../styles/pattern";

interface ICardLayoutProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card(props: ICardLayoutProps) {
  const { children, className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={cn(
        ` h-[196px] w-[270px] cursor-pointer rounded-[4px] border-[1px] border-solid border-borderSecondColor ${pattern.flexCenter} overflow-scroll `,
        className
      )}
    >
      {children}
    </div>
  );
}
