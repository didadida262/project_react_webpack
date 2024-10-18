/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-16 14:51:56
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-18 09:44:21
 */
import cn from "classnames";
import paper from "paper";
import { useEffect, useRef, useState } from "react";

import { dotData } from "@/server/circleData";
import { showPoint, drawXY } from "@/utils/paperjsWeapon";

const waferInfo = {
  radius: 70,
  edge_exclusion: 20
};
export const ReviewWafer = () => {
  // const canvasRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef() as any;
  const [radius, setRadius] = useState(0);
  let initPoint = new paper.Point(0, 0);

  let tool = null as any;

  const [WH, setWH] = useState({
    width: "",
    height: ""
  });
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
    setRadius(radius);
    setWH({
      width: WIDTH,
      height: HEIGHT
    });
  };
  const drawCircle = () => {
    const layerCircleOut = new paper.Layer();
    layerCircleOut.name = "layerCircleOut";
    console.log("radius>>>2", radius);

    const o = new paper.Path.Circle({
      center: 0,
      radius: radius,
      strokeColor: "grey",
      name: "circleOut"
    });
    o.set({
      fillColor: {
        gradient: {
          stops: [["yellow", 0.1], ["red", 0.3], ["black", 1]],
          radial: true
        },
        origin: o.bounds.center,
        destination: o.view.bounds.rightCenter,
        highlight: o.view.bounds.center
      }
    });
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

  useEffect(
    () => {
      if (!canvasRef.current) return;
      window.devicePixelRatio = 1;
      init();
      initTool();
      showPoint(new paper.Point(0, 0), "green");
      drawXY(paper.project, "layer-xy");
      // drawCircle();
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
