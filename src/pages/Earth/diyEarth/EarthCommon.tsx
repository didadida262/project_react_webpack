/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-14 16:46:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-15 13:55:18
 */
import cn from "classnames";
import { useEffect, useState } from "react";
import * as THREE from "three";

import EarthClass from "./EarthClass";

export function EarthCommon() {
  const [withAndHeight, setwithAndHeight] = useState({
    width: 0,
    height: 0
  });
  const initCanvas = () => {
    const container = document.getElementById("screen");
    if (!container) return;
    // // 长宽
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    setwithAndHeight({
      width: containerWidth,
      height: containerHeight
    });
    const RADIUS = Math.min(containerHeight, containerWidth) / 4 - 50;
    console.log(RADIUS);

    // // 舞台、相机
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      containerWidth / containerHeight,
      1,
      1500
    );
    // // 相机位置，右手坐标系，x,y,z
    camera.position.set(-150, 100, -200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    // // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // 抗锯齿
    renderer.setClearColor(0xffffff, 0);
    renderer.autoClear = false;
    renderer.setSize(containerWidth, containerHeight);
    renderer.toneMappingExposure = Math.pow(1, 4.0);
    container.appendChild(renderer.domElement);
    // window.addEventListener('resize', () => this.handleWindowResize())
    // 光源
    const spotLight = new THREE.SpotLight(0x404040, 2.5);
    scene.add(spotLight);
    const light = new THREE.AmbientLight(0xffffff, 0.25); // soft white light
    scene.add(light);
    // 地球
    const theEarth: any = new (EarthClass as any)(100);
    console.log("theEarth>>>", theEarth);
    const earth = theEarth.getMesh();
    spotLight.target = earth;

    const earthGroup = new THREE.Group();
    earthGroup.add(earth);
    scene.add(earthGroup);
    renderer.render(scene, camera);
  };
  useEffect(() => {
    initCanvas();
  }, []);
  return (
    <div className="earth-container h-full w-full">
      <div id="screen" className="h-full w-full" />
    </div>
  );
}
