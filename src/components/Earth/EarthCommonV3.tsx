/*
 * @Description: github globe 模拟
 * @Author: didadida262
 * @Date: 2024-09-14 16:46:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-29 15:20:29
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
import earth_env2 from "@/assets/threejs/earth_bg_env2.png";

import City from "./Geometry/City";
import Earth from "./Geometry/Earth";
import LinkCommon from "./Geometry/LinkCommon";

const radius = 3;

export function EarthCommonV3() {
  let renderer = null as any;
  let camera = null as any;
  let scene = null as any;
  let earthGroup = null as any;
  let composer = null as any;
  let shanghai = null as any;
  const cities = [] as any;

  const [withAndHeight, setwithAndHeight] = useState({
    width: 0,
    height: 0
  });
  const createActivity = () => {
    const length = countries.length;
    const index = Math.floor(Math.random() * length);

    const fromCity = new City(countries[index].position);

    const link = new LinkCommon(fromCity, shanghai);

    earthGroup.add(fromCity.getMesh());
    earthGroup.add(link.getMesh());

    cities.push({ city: fromCity, link });
    if (cities.length > 35) {
      const drop = cities.shift();
      earthGroup.remove(drop.city.getMesh());
      earthGroup.remove(drop.link.getMesh());
      drop.city.destroy();
      drop.link.destroy();
    }
  };
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
    const textureLoaderEnv = new THREE.TextureLoader();
    // scene.background = textureLoaderEnv.load(earth_env2);

    // 相机
    camera = new THREE.PerspectiveCamera(
      45,
      containerWidth / containerHeight,
      1,
      1500
    );
    camera.position.set(-150, 100, -200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 灯光
    const pointLight = new THREE.PointLight(0xffffff, 50000, 100);
    pointLight.position.set(-110, 80, -100);
    pointLight.castShadow = true;
    scene.add(pointLight);
    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(
      pointLight,
      sphereSize,
      "white"
    );
    scene.add(pointLightHelper);
    // 环境光
    const envLight = new THREE.AmbientLight("white", 1);
    scene.add(envLight);

    // // 渲染器
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // 抗锯齿
    // renderer.setClearColor(0xffffff, 0);
    // renderer.autoClear = false;
    renderer.setSize(containerWidth, containerHeight);
    // renderer.toneMappingExposure = Math.pow(1, 4.0);
    container.appendChild(renderer.domElement);

    // 地球
    const theEarth = new Earth(100);
    const earth = theEarth.getMesh();
    const earthGlow = theEarth.getGlowMesh();
    const earthParticles = theEarth.getParticleMesh();
    earthGroup = new THREE.Group();
    earthGroup.add(earth);
    earthGroup.add(earthParticles);
    shanghai = new City(countries[0].position);
    // earthGroup.add(shanghai.getMesh());
    scene.add(earthGroup);

    window.setInterval(() => createActivity(), 4000);

    // const light = new THREE.AmbientLight(0xffffff, 0.25); // soft white light
    // scene.add(light);

    // 灯光配置
    // const pointLight = new THREE.PointLight(0xffffff, 100, 100);
    // pointLight.position.set(5, 5, 4);
    // pointLight.castShadow = true;
    // scene.add(pointLight);
    // const sphereSize = 1;
    // const pointLightHelper = new THREE.PointLightHelper(
    //   pointLight,
    //   sphereSize,
    //   "white"
    // );

    // scene.add(pointLightHelper);
  };
  // 渲染场景
  function animate() {
    requestAnimationFrame(animate);
    if (earthGroup) {
      earthGroup.rotation.y += 0.003;
    }
    renderer.render(scene, camera);

    // composer.render();
  }

  useEffect(() => {
    initCanvas();
    setOrbit(camera, renderer);
    // setAxes(scene);
    animate();
  }, []);
  return (
    <div className="earth-container h-full w-full ">
      <div id="screen" className="h-full w-full" />
    </div>
  );
}
