/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-05-06 16:34:10
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-09 18:28:57
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
      <div className="w-[200px] h-[30px] markBorderR line-clamp-1 ">
        啥玩意儿啊啥玩意儿啊啥玩意儿啊啥玩意儿啊啥玩意儿啊
      </div>
      <div className="w-[200px] h-[30px] markBorderR truncate ">
        asdasdasdasdasdasdasdasdasdasdasdasd
      </div>
      <div className="w-full h-[30px] flex justify-between items-center markBorderR gap-x-3">
        <div className="w-[500px] h-full markBorderG flex-shrink-0">1</div>
        <div className="w-[500px] h-full markBorderG flex-shrink-0">2</div>
        <div className="flex-1 h-full markBorderG truncate">
          asdasdasdasdasdasdasdasdasdasdasdasd
        </div>
      </div>
      {/* <div>
        <span>测试交叉</span>
        <div className="w-[300px] h-[200px] markBorderG flex justify-center items-center">
          <div className="w-[100px] h-[100px] markBorderR" ref={myRef}>
            内容去
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TestCss;
