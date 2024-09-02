/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-02 11:22:26
 */

import { Button } from "antd";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { getRandomColor } from "miles_common_weapons";

import "./index.scss";

const fib = n => {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

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
import { List } from "react-virtualized";
import "react-virtualized/styles.css"; // 引入样式
import "./index.scss";
import { useAsync, useAsyncFn } from "react-use";
import { resolve } from "path";


const canvasWorker = new Worker(new URL("./worker.js", import.meta.url));
const AboutComponent = function() {
  const canvasOneRef = useRef() as any;
  const canvasTwoRef = useRef() as any;

  useEffect(() => {
    if (!canvasOneRef.current || !canvasTwoRef.current) return
    const canvas:HTMLCanvasElement = canvasOneRef.current
    const ctx = canvas.getContext('2d');
    if (!ctx) return
      let frameCount = 0;
      let animationFrameId;

      const render = () => {
          frameCount++;
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(150, 150, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
          ctx.fill();
          animationFrameId = window.requestAnimationFrame(render);
      }
      render();
      const transfercanvasWorker = canvasTwoRef.current.transferControlToOffscreen();
      canvasWorker.postMessage({ canvas: transfercanvasWorker }, [transfercanvasWorker]);

      return () => {
          window.cancelAnimationFrame(animationFrameId);
      }
  }, [])

  const alertFib = () => {
      alert(fib(40));
  }
  return (
    <div className="container flex justify-between items-center w-full h-full">
        <div>
            <canvas ref={canvasOneRef} width={300} height={200} />
            <span>正常渲染Canvas</span>
        </div>
        <div>
            <canvas ref={canvasTwoRef} width={300} height={200} />
            <span>离屏渲染Canvas</span>
      </div>
      {/* <ButtonCommon
        type={EButtonType.PRIMARY}
        onClick={
          () => {
            alertFib()

          }
        }>
        <span>求解斐波那契数列</span>
        
      </ButtonCommon> */}
    </div>
)

};

export default AboutComponent;
