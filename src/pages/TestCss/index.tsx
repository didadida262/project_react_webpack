/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-05-06 16:34:10
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-23 15:31:34
 */
import { Button } from "antd";

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
    </div>
  );
};

export default TestCss;
