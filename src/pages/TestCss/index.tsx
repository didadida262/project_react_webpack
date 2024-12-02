/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-05-06 16:34:10
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-29 13:58:53
 */
import { Button } from "antd";
import cn from "classnames";

import { Graph } from "@/components/Graph";
import dotImg from "@/assets/只狼.jpeg";
import img2 from "@/assets/test.webp";

import React, {
  useEffect,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  memo,
  useContext
} from "react";

import { StickyScrollRevealDemo } from "../../components/StickyCompo";
import { ThemeContext, ThemeMode } from "../../components/themeProvider";
import pattern from "../../styles/pattern";
import { waitTime } from "@/utils/common_weapons";
import { ButtonCommon } from "@/components/ButtonCommon";

const TestCss = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FlipCard />
    </div>
  );
};

export default TestCss;

const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  };
  return (
    <div className="relative markBorderR">
      <div
        className={` w-full h-full flex items-center justify-center cursor-pointer`}
        style={{
          transform: isFlipped ? " rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s",
          backfaceVisibility: "hidden"
        }}
        onClick={handleClick}
      >
        Front Content
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer`}
        style={{
          transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
          backfaceVisibility: "hidden",
          transition: "transform 0.5s"
        }}
        onClick={handleClick}
      >
        Back Content
      </div>
    </div>
  );
};
