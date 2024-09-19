/*
 * @Description: 尝试使用threejs-earth
 * @Author: didadida262
 * @Date: 2024-09-18 15:36:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-18 16:52:25
 */
import { useEffect } from "react";
import * as THREE from "three";
import { Scene, WebGLRenderer } from "three";
import ThreeGlobe from "three-globe";

import earth_bg from "@/assets/earth_bg.png";

export function EarthCommonV5() {
  let renderer = null as any;
  let camera = null as any;
  let scene = null as any;
  const initCanvas = () => {
    const container = document.getElementById("screen");
    if (!container) return;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const myGlobe = new ThreeGlobe().globeImageUrl(earth_bg).pointsData([]);
    scene = new THREE.Scene();
    scene.add(myGlobe);
    renderer = new WebGLRenderer({ antialias: true });
    container.appendChild(renderer.domElement);
    // 相机
    camera = new THREE.PerspectiveCamera(
      75,
      containerWidth / containerHeight,
      1,
      100
    );
    camera.position.x = 5;
    camera.position.y = 3;
    camera.position.z = 0;

    // container.appendChild(renderer.domElement);
  };
  const animate = () => {
    renderer.render(scene, camera);
  };
  useEffect(() => {
    initCanvas();
    animate();
  }, []);
  return (
    <div className="w-full h-full markBorderG">
      <div id="screen" />
    </div>
  );
}
