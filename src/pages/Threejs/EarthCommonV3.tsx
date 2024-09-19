/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-18 15:36:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-18 16:51:15
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

export function EarthCommonV3() {
  let scene = null as any;
  let renderer = null as any;
  let controls = null as any;
  let camera = null as any;
  scene = new THREE.Scene();
  const init = () => {
    const container = document.getElementById("screen");
    if (!container) return;
    renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

    scene = new Scene();
    scene.add(new THREE.AmbientLight(0xbbbbbb, 0.3));
    scene.background = new THREE.Color(0x04d21);

    camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    var dLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    var dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    var dLight2 = new THREE.PointLight(0x8566cc, 0.5);
    dLight2.position.set(-200, 500, 200);
    camera.add(dLight2);

    camera.position.z = 400;
    camera.position.x = 0;
    camera.position.y = 0;

    scene.add(camera);

    scene.fog = new THREE.Fog(0x545ef3, 400, 2000);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dynamicDampingFactor = 0.01;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1;
    controls.autoRotate = false;

    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 3;

    // window.addEventListener("resize", onWindowResize, false);
    // window.addEventListener("mousemove", onMouseMove);
  };
  const initGlobe = () => {
    const Globe = new ThreeGlobe()
      .arcsData(travelHistory.flights)
      .arcColor(e => {
        return e.status ? "#9cff00" : "#ff4000";
      })
      .arcAltitude((e: any) => {
        return e.arcAlt;
      })
      .arcStroke((e: any) => {
        return e.status ? 0.5 : 0.3;
      })
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e: any) => e.order * 1)
      .labelsData(airportHistory.airports)
      .labelColor(() => "#ffcb21")
      .labelDotOrientation((e: any) => {
        return e.text === "ALA" ? "top" : "right";
      })
      .labelDotRadius(0.3)
      .labelSize((e: any) => e.size)
      .labelText("City")
      .labelResolution(6)
      .labelAltitude(0.01)
      .pointsData(airportHistory.airports)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05)
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(false)
      .hexPolygonColor((e: any) => {
        if (
          ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
            e.properties.ISO_A3
          )
        ) {
          return "rgba(255,255,255,1)";
        } else return "rgba(255,255,255,0.7)";
      });
    Globe.rotateY(-Math.PI * (5 / 9));
    Globe.rotateX(-Math.PI * 6);
    const globeMaterial: any = Globe.globeMaterial();
    globeMaterial.color = 0x3a228a;
    globeMaterial.emissive = 0x220038;
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;

    const options = {
      backside: true,
      color: "#3a228a",
      size: 100 * 0.25,
      power: 6,
      coefficient: 0.3
    };
    const glowMesh = createGlowMesh(
      new THREE.SphereGeometry(100, 75, 75),
      options
    );
    Globe.add(glowMesh);
    scene.add(Globe);
  };
  const animate = () => {
    // camera.position.x +=
    //   Math.abs(mouseX) <= windowHalfX / 2
    //     ? (mouseX / 2 - camera.position.x) * 0.005
    //     : 0;
    // camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
    // camera.lookAt(scene.position);
    // controls.update();
    renderer.render(scene, camera);
    // requestAnimationFrame(animate);
  };
  useEffect(() => {
    init();
    initGlobe();
    animate();
  }, []);
  return <div className="w-full h-full markBorderG">diqiu</div>;
}
