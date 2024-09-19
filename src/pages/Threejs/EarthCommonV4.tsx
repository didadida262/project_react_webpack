/*
 * @Description: 尝试直接引入打包文件
 * @Author: didadida262
 * @Date: 2024-09-18 15:36:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-18 16:14:16
 */
import { useEffect } from "react";
import * as THREE from "three";
import { Scene, WebGLRenderer } from "three";
import ThreeGlobe from "three-globe";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControl.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import countries from "./files/globe-data-min.json";
import airportHistory from "./files/my-airports.json";
import travelHistory from "./files/my-flights.json";
import { createGlowMesh } from "./three-glow-mesh";

export function EarthCommonV4() {
  useEffect(() => {}, []);
  return <div className="w-full h-full markBorderG">diqiu</div>;
}
