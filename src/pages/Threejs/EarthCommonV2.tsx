/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-14 16:46:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-15 23:41:23
 */
import cn from "classnames";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { setOrbit, setAxes } from "@/utils/threejsWeapon";
import earth_bg from "@/assets/earth_bg.png";

const radius = 32;

export function EarthCommonV2() {
  let renderer = null as any;
  let camera = null as any;
  let scene = null as any;
  let earth = null as any;
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
    // // 舞台
    scene = new THREE.Scene();
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
    // // 渲染器
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // 抗锯齿
    renderer.setSize(containerWidth, containerHeight);
    // renderer.toneMappingExposure = Math.pow(1, 4.0);
    container.appendChild(renderer.domElement);
    // window.addEventListener('resize', () => this.handleWindowResize())
    // 地球
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earth_bg);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      color: "#181d8c"
    });
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);
    // 添加外边框光晕
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.BackSide
    });
    // const glowGeometry = new THREE.SphereGeometry(2.001, 32, 32);
    // const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    // scene.add(glow);
    // scene.add(new THREE.AmbientLight(0xbbbbbb, 0.3));
    // 添加光源
    const light = new THREE.DirectionalLight(0xffffff, 20);
    light.position.set(5, 8, 8);
    scene.add(light);

    // 添加阴影效果
    renderer.shadowMap.enabled = true;
    earth.castShadow = true;
    earth.receiveShadow = true;

    // 添加鼠标交互控制
    // const controls = new THREE.OrbitControls(camera, renderer.domElement);
  };
  // 渲染场景
  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  useEffect(() => {
    initCanvas();
    setOrbit(camera, renderer);
    setAxes(scene);
    animate();
  }, []);
  return (
    <div className="earth-container h-full w-full ">
      <div id="screen" className="h-full w-full" />
    </div>
  );
}
