/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-16 14:51:56
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-18 15:25:50
 */
import cn from "classnames";
import paper from "paper";
import { useEffect, useRef, useState } from "react";

import { dotData, waferInfo, dotClass } from "@/server/circleData";
import { showPoint, drawXY } from "@/utils/paperjsWeapon";

const colorsMap = {};
dotClass.forEach((item: any) => {
  colorsMap[item.class_id] = item.color;
});

console.log("colorsMap>>", colorsMap);

export const ReviewWafer = () => {
  // const canvasRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef() as any;
  const [radius, setRadius] = useState(0);
  let initPoint = new paper.Point(0, 0);

  let tool = null as any;

  const [info, setInfo] = useState({
    ratio: "",
    radius: "",
    width: "",
    height: ""
  }) as any;
  const init = () => {
    const canvas = canvasRef.current;
    const WIDTH = canvas.clientWidth;
    const HEIGHT = canvas.clientHeight;
    const radius = Math.min(WIDTH, HEIGHT) / 2 - 10;
    const realRadius = Number(waferInfo.radius);
    const ratio = Number(radius / realRadius);
    const innerRadius = radius - waferInfo.edge_exclusion * ratio;
    paper.setup(canvas);
    console.log("paper>>>", paper);
    paper.view.center = new paper.Point(0, 0);
    setInfo({
      radius: radius,
      ratio: ratio,
      width: WIDTH,
      height: HEIGHT
    });
  };
  const drawCircle = () => {
    const layerCircleOut = new paper.Layer();
    layerCircleOut.name = "layerCircleOut";
    console.log("radius>>>2", info.radius);
    const o = new paper.Path.Circle({
      center: 0,
      radius: info.radius,
      strokeColor: "grey",
      name: "circleOut"
    });
    // o.set({
    //   fillColor: {
    //     gradient: {
    //       stops: [["yellow", 0.1], ["red", 0.3], ["black", 1]],
    //       radial: true
    //     },
    //     origin: o.bounds.center,
    //     destination: o.view.bounds.rightCenter,
    //     highlight: o.view.bounds.center
    //   }
    // });
  };
  const initTool = () => {
    tool = new paper.Tool();
    tool.name = name;
    tool.onMouseDown = e => {
      initPoint = e.point;
    };
    tool.onMouseDrag = e => {
      const delta = initPoint.subtract(e.point);
      const currentProject: paper.Project = paper.project;
      const currentCenter = currentProject.view.center;
      currentProject.view.center = currentCenter.add(delta);
      drawXY(paper.project, "layer-xy");
    };
    tool.onMouseUp = e => {};
  };
  // 先批量处理点数据坐标信息，再绘制数据点
  // 内圆同数据处于同一图层
  const drawDot = () => {
    // 基于当前晶圆大小，处理数据点信息
    const layerDot = new paper.Layer();
    layerDot.name = "layerDot";
    const data = dotData.map(item => {
      return {
        pos_x: Number((Number(item.pos_x) * info.ratio).toFixed(2)),
        pos_y: Number((Number(item.pos_y) * info.ratio).toFixed(2)),
        class_color: colorsMap[item.class_id],
        class_id: item.class_id,
        id: item.id,
        channel: item.channel
      };
    });
    console.log("dotData>>", dotData);
    console.log("data>>", data);
    data.forEach(item => {
      const p: any = new paper.Path.Circle({
        center: new paper.Point(item.pos_x, item.pos_y),
        radius: 3,
        // shadowColor: "white",
        // shadowOffset: new paper.Point(0.1, 0.1),
        // // 模糊距离
        // shadowBlur: new paper.Point(20, 20),
        fillColor: item.class_color
      });
      p.class_id = item.class_id;
      // p.data_id = item.id
      // p.channel = item.channel
      // p.onClick = (e) => {
      //   console.log('点击')
      // }
    });
  };

  useEffect(
    () => {
      if (!canvasRef.current) return;
      window.devicePixelRatio = 1;
      init();
      initTool();
      drawCircle();
      drawDot();
      drawXY(paper.project, "layer-xy");
    },
    [canvasRef.current]
  );
  useEffect(() => {
    console.log("dotData>>>", dotData);

    console.log(">>>", window.devicePixelRatio);
  }, []);

  return (
    <div className="w-full h-full ">
      <canvas
        id="canvas_wafer"
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
