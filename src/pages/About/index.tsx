/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-08-21 14:00:07
 */

import { Button } from "antd";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { getRandomColor } from "miles_common_weapons";

import { ButtonCommon, EButtonType } from "@/components/ButtonCommon";

import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  memo,
  useContext,
  useEffect
} from "react";
import { Observable } from "rxjs";

import { Sparkles } from "../../components/Sparkles";
import { ThemeContext, ThemeMode } from "../../components/themeProvider";
import Child from "./Child";
import RenderComponents from "./RenderProps";
import { dotData, dotClass } from "@/server/circleData";
import { List } from "react-virtualized";
import "react-virtualized/styles.css"; // 引入样式
import "./index.scss";
import { useAsync, useAsyncFn } from "react-use";
import { resolve } from "path";

const MemoSon = memo(Child);
const HOC = ChildComponent => {
  const res = props => {
    return (
      <div>
        <ChildComponent {...props} />
        <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    );
  };
  return res;
};
const TT = HOC(Child);

const AboutComponent = function() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  let Ob1 = new Observable(observer => {
    observer.next("observable");
  });
  Ob1.subscribe(value => {
    console.log(value);
  });
  console.log("Ob1>>", Ob1);

  const [count, setcount] = useState({
    name: 1,
    old: 2
  });
  const [count2, setcount2] = useState(0);
  console.log("父组件渲染");
  useEffect(() => {
    console.log("dotData>>>", dotData);
  }, []);
  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {dotData[index].id}
      </div>
    );
  };
  // const [test] = useAsync(async () => {
  //   const p = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("1");
  //     }, 3000);
  //   });
  //   p.then(res => {
  //     console.log("res>>", res);
  //   });
  // }, []);
  const [loading, test] = useAsyncFn(async () => {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("1");
      }, 3000);
    });
    p.then(res => {
      console.log("res>>", res);
    });
  }, []);

  return (
    <div>
      {/* <Child count={count} /> */}
      <MemoSon count={count} />
      <span>
        count: {count.name}
      </span>
      <span>
        count2: {count2}
      </span>
      <Button
        onClick={() =>
          setcount({
            ...count,
            name: count.name + 1
          })}
      >
        改变子数据
      </Button>
      <Button onClick={() => setcount2(count2 + 1)}>改变其他数据</Button>
      <TT />
      <div className="w-full h-[300px] markBorderG mt-[20px] overflow-auto">
        <span>虚拟列表</span>
        {/* {dotData.map((item) => (
          <div className='w-full h-[40px] markBorderR'>{item.id}</div>
        ))} */}
        <List
          className="markBorderG"
          width={300}
          height={400}
          rowCount={dotData.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      </div>
      <ButtonCommon onClick={test} type={EButtonType.PRIMARY}>
        测试hook:
        <p>{loading.loading}</p>
      </ButtonCommon>
    </div>
  );
};

export default AboutComponent;
