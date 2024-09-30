/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-05-06 16:34:10
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-29 16:38:59
 */
import { Button } from "antd";
import cn from "classnames";

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
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const myRef = useRef(null);

  const iniObserver = () => {
    if (!myRef.current) {
      return;
    }
    console.log(myRef.current); // 这是原生的DOM对象
    let options = {
      threshold: 1.0
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0;
        }
      });
    }, options);

    observer.observe(myRef.current);
  };
  const handleScroll = () => {
    console.log("scroll");
  };
  useEffect(() => {
    iniObserver();
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //     window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll);
  //         return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     };
  // });

  return (
    <div>
      测试css
      <div>
        <div className="fadeIn">
          <p className="test SingleLineTextOverflow bg-[black] text-[green]">
            这是一段很长很长的文本 这是一段很长很长的文本 这是一段很长很长的文本 这是一段很长很长的文本 这是一段很长很长的文本
            这是一段很长很长的文本 这是一段很长很长的文本
          </p>
        </div>
      </div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div className={`${pattern.fontOswald48}`}>测试字体</div>
      <div>
        <span>测试滚动高亮</span>
        <div />
      </div>
      <ButtonCommon
        onClick={async () => {
          const data = await waitTime(2000);
          console.log("我尼玛", data);
        }}
      >
        测试promise
      </ButtonCommon>
      <div
        className={cn(
          "w-0 h-0",
          // "absolute top-[-10px] left-[2px]",
          "border-r-[20px] border-r-solid border-r-[#0D2963]",
          "border-t-[20px] border-r-solid border-t-transparent",
          "border-l-[20px] border-r-solid border-l-transparent",
          "border-b-[20px] border-r-solid border-b-transparent"
        )}
      />
    </div>
  );
};

export default TestCss;
