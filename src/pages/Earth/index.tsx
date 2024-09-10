/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-10 00:59:43
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-10 18:04:29
 */

import earthFlyLine from "earth-flyline";
import { useEffect, useRef } from "react";

import geojson from "@/data/globe.json";

export default function Earth() {
  const containerRef = useRef<HTMLDivElement>();
  // useEffect(() => {
  //   if (!containerRef.current) return;
  //   earthFlyLine.registerMap("world", geojson);
  //   //获取dom节点作为容器 注：该节点请设置宽高
  //   const dom = document.getElementById("container");
  //   if (!dom) return;
  //   const chart = earthFlyLine.init({
  //     // containerRef.current,
  //     dom,
  //     map: "world"
  //   });
  // }, []);
  return (
    <div id="container" />
    // <div className="w-full h-full markBorderR">
    //   <span>Earth</span>
    //   <div ref={containerRef} />
    // </div>
  );
}
