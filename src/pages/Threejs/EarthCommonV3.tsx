/*
 * @Description: github globe 模拟
 * @Author: didadida262
 * @Date: 2024-09-14 16:46:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-20 11:56:24
 */
import cn from "classnames";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

import { setOrbit, setAxes } from "@/utils/threejsWeapon";
import { countries } from "@/assets/threejs/files/countries";
import earth_bg_1 from "@/assets/threejs/earth_bg1.png";
import earth_bg_2 from "@/assets/threejs/earth_bg2.png";
import earth_bg_3 from "@/assets/threejs/earth_bg3.jpg";
import earth_bg_4 from "@/assets/threejs/earth_bg4.png";
import earth_bg_5 from "@/assets/threejs/earth_bg5.jpg";
import earth_bg_6 from "@/assets/threejs/earth_bg6.jpg";
import earth_dot from "@/assets/threejs/earth_dot.png";
import earth_env from "@/assets/threejs/earth_bg_env.jpg";

import City from "./Geometry/City";
import Earth from "./Geometry/Earth";
import { UnrealBloomPass } from "./lib/bloomPass";

const radius = 3;

export function EarthCommonV3() {
  let renderer = null as any;
  let camera = null as any;
  let scene = null as any;
  let earth = null as any;
  let composer = null as any;

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
    // 舞台
    scene = new THREE.Scene();

    // 相机
    camera = new THREE.PerspectiveCamera(
      45,
      containerWidth / containerHeight,
      1,
      1500
    );
    camera.position.set(-150, 100, -200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // // 渲染器

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // 抗锯齿
    renderer.setClearColor(0xffffff, 0);
    renderer.autoClear = false;
    renderer.setSize(containerWidth, containerHeight);
    renderer.toneMappingExposure = Math.pow(1, 4.0);
    container.appendChild(renderer.domElement);

    // 地球
    const theEarth = new Earth(100);
    const earth = theEarth.getMesh();
    const earthGlow = theEarth.getGlowMesh();
    const earthParticles = theEarth.getParticleMesh();
    const earthGroup = new THREE.Group();
    earthGroup.add(earth);
    earthGroup.add(earthParticles);
    const shanghai = new City(countries[0].position);

    earthGroup.add(shanghai.getMesh());
    scene.add(earthGroup);

    // Set up an effect composer
    // composer = new EffectComposer(renderer);
    // composer.setSize(containerWidth, containerHeight);

    // const renderScene = new RenderPass(scene, camera);
    // const bloomPass = new UnrealBloomPass(
    //   new THREE.Vector2(containerWidth, containerHeight),
    //   1.5,
    //   -0.8,
    //   0.5
    // ); // strength, radius, threshold
    // renderScene.clear = false;
    // bloomPass.clear = false;
    // composer.addPass(renderScene);
    // composer.addPass(bloomPass);

    // Tells composer that second pass gets rendered to screen
    // bloomPass.renderToScreen = true;

    // 光源
    const spotLight = new THREE.SpotLight(0x404040, 2.5);
    spotLight.target = earth;
    scene.add(spotLight);

    const light = new THREE.AmbientLight(0xffffff, 0.25); // soft white light
    scene.add(light);
  };
  // 渲染场景
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // composer.render();
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
