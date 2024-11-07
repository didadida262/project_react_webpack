/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-11-08 01:07:53
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:17:34
 */
/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-11-08 01:07:53
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:15:40
 */
"use client";
import React, { ReactNode } from "react";

import { Arrow } from "@radix-ui/react-tooltip";
import { cn } from "@/utils/cn";
import { useSize } from "@/utils/hooks/useSize";
import * as RadixTooltipPrimitive from "@radix-ui/react-tooltip";

const RadixTooltipProvider = RadixTooltipPrimitive.Provider;

const RadixTooltip = RadixTooltipPrimitive.Root;

const RadixTooltipTrigger = RadixTooltipPrimitive.Trigger;

const RadixTooltipContent = React.forwardRef<
  React.ElementRef<typeof RadixTooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTooltipPrimitive.Content> & {
    className?: string;
    sideOffset?: number;
    color?: string;
  }
>(({ className, sideOffset = 4, color, ...props }, ref) =>
  <RadixTooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-lg border border-none !outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    style={{ backgroundColor: color || "#141726" }}
    {...props}
  />
);
RadixTooltipContent.displayName = RadixTooltipPrimitive.Content.displayName;

interface IToolTipProps {
  children: ReactNode;
  tipContent?: ReactNode;
  tipPosition?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  arrow?: boolean;
  className?: string;
  color?: string;
}
export function ToolTip(props: IToolTipProps) {
  const {
    tipContent,
    tipPosition = "bottom",
    align = "center",
    arrow,
    color,
    children,
    className
  } = props;
  const [open, setOpen] = React.useState(false);
  const { isMobile } = useSize();
  if (!tipContent) return children;
  return (
    <RadixTooltipProvider>
      <RadixTooltip open={open} onOpenChange={setOpen}>
        <RadixTooltipTrigger
          className="cursor-pointer transition-opacity duration-200 hover:opacity-75"
          tabIndex={-1}
          onClick={() => {
            if (isMobile) setOpen(!open);
          }}
        >
          {children}
        </RadixTooltipTrigger>
        <RadixTooltipContent
          side={tipPosition}
          align={align}
          arrowPadding={8}
          color={color}
        >
          {!!arrow &&
            <Arrow
              className="fill-current"
              style={{ color: color || "#141726" }}
            />}
          <div
            className={cn(
              "flex w-fit max-w-[254px] items-center justify-center px-4 py-2 font-Poppins text-xs font-light text-[#87868B]",
              className
            )}
          >
            {tipContent}
          </div>
        </RadixTooltipContent>
      </RadixTooltip>
    </RadixTooltipProvider>
  );
}
