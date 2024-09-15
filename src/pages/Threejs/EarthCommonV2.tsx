/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-14 16:46:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-16 00:55:29
 */
import cn from "classnames";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { setOrbit, setAxes } from "@/utils/threejsWeapon";
import earth_bg from "@/assets/earth_bg.png";
import earth_bg_2 from "@/assets/earth_bg2.jpg";
import earth_dot from "@/assets/earth_dot.png";

const radius = 3;

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
uniform sampler2D u_texture;
varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;
void main() {
    v_position = position;
    v_normal = normal;
    v_uv = uv;
    
    vec3 color = texture2D(u_texture, uv).xyz;

    vec3 new_position = position + (normal * color) * 0.2;
    
    vec4 modelViewPosition = modelViewMatrix * vec4(new_position, 1.0);
    vec4 projectPosition = projectionMatrix * modelViewPosition;
    gl_Position = projectPosition;
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
    // 方案一

    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(earth_bg_2);
    // const material = new THREE.MeshPhongMaterial({
    //   map: texture
    //   // color: "#181d8c"
    // });
    // earth = new THREE.Mesh(geometry, material);
    // scene.add(earth);
    // 方案2
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: {
          value: new THREE.TextureLoader().load(
            earth_bg // 图片路径
          )
        }
      },
      fragmentShader: fs,
      vertexShader: vs
    });
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);
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
