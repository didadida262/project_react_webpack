/*
 * @Description: 自研地球
 * @Author: didadida262
 * @Date: 2024-09-14 16:46:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-20 10:43:01
 */
import cn from "classnames";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { setOrbit, setAxes } from "@/utils/threejsWeapon";
import earth_bg_1 from "@/assets/threejs/earth_bg1.png";
import earth_bg_2 from "@/assets/threejs/earth_bg2.png";
import earth_bg_3 from "@/assets/threejs/earth_bg3.jpg";
import earth_bg_4 from "@/assets/threejs/earth_bg4.png";
import earth_bg_5 from "@/assets/threejs/earth_bg5.jpg";
import earth_bg_6 from "@/assets/threejs/earth_bg6.jpg";
import earth_dot from "@/assets/threejs/earth_dot.png";
import earth_env from "@/assets/threejs/earth_bg_env.jpg";

const radius = 3;
// 城市之间的连线，可以定义颜色（数据来自业务系统）
const bizLines = [
  {
    from: "北京",
    to: [
      "上海",
      "西安",
      "成都",
      "乌鲁木齐",
      "拉萨",
      "广州",
      "哈尔滨",
      "沈阳",
      "武汉",
      "海口",
      "纽约",
      "伦敦",
      "巴黎",
      "开普敦",
      "悉尼",
      "东京",
      "里约热内卢"
    ],
    color: `rgba(255, 147, 0, 1)`
  }
];

const fs = `
// 纹理
uniform sampler2D u_texture;
varying vec2 v_uv;

float snoise(vec3 v);
void main() {
    vec3 color = texture2D(u_texture,v_uv).xyz;
    color = normalize(color);
    if(color.x<=0.5) {
        color = vec3(0.6f, 0.22f, 0.71f);
    } else {
        color = vec3(0.93f, 0.72f, 0.98f);
    };

    gl_FragColor = vec4(color, 1.0);
}
`;
const vs = `
uniform mat4 modelViewMatrix; // 模型视图矩阵
uniform mat4 viewMatrix; // 投影矩阵
uniform mat4 projectionMatrix; // 投影矩阵

attribute vec3 position; // 顶点位置

void main() {
  gl_Position = projectionMatrix * viewMatrix * modelViewMatrix * vec4(position, 1.0); // 计算顶点在视图空间中的位置
}
`;

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
    // const textureLoaderEnv = new THREE.TextureLoader();
    // scene.background = textureLoaderEnv.load(earth_env);
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
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earth_bg_5);
    const material = new THREE.MeshPhongMaterial({
      map: texture
      // color: "#181d8c"
    });
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // 创建北京到东京的带弧度的线条
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(1, 1, 1), // 北京的坐标
      new THREE.Vector3(3, 3, 3), // 控制点坐标
      new THREE.Vector3(5, 1, 1) // 东京的坐标
    );
    const points = curve.getPoints(50);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    // 添加光源
    // const light = new THREE.DirectionalLight(0xffffff, 20);
    // light.position.set(5, 8, 8);
    // scene.add(light);
    // 环境光
    // const envLight = new THREE.AmbientLight("white", 20);
    // scene.add(envLight);
    // 灯光配置
    const pointLight = new THREE.PointLight(0xffffff, 100, 100);
    pointLight.position.set(5, 5, 4);
    pointLight.castShadow = true;
    scene.add(pointLight);
    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(
      pointLight,
      sphereSize,
      "white"
    );

    scene.add(pointLightHelper);
    // 添加光晕

    // 添加阴影效果
    // renderer.shadowMap.enabled = true;
    // earth.castShadow = true;
    // earth.receiveShadow = true;

    // 添加鼠标交互控制
    // const controls = new THREE.OrbitControls(camera, renderer.domElement);
  };
  // 渲染场景
  function animate() {
    requestAnimationFrame(animate);
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
