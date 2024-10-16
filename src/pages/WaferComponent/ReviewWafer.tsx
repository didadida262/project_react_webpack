/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-16 14:51:56
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-16 15:12:08
 */
import cn from "classnames";
import paper from "paper";
import { useEffect, useRef, useState } from "react";

import { dotData } from "@/server/circleData";

const waferInfo = {
  radius: 70,
  edge_exclusion: 20
};
export const ReviewWafer = () => {
  // const canvasRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef() as any;
  const [radius, setRadius] = useState(0);
  const [WH, setWH] = useState({
    width: "",
    heigth: ""
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
    paper.view.center = new paper.Point(0, 0);
    setRadius(radius);
    console.log("radius>>>1", radius);
    // paper.project.name = "circle";
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
  useEffect(
    () => {
      if (!canvasRef.current) return;
      init();
      drawCircle();
    },
    [canvasRef.current]
  );
  useEffect(() => {
    console.log("dotData>>>", dotData);
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
