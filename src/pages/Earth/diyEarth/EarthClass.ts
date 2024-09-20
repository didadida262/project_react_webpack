/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-09-14 14:42:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-19 18:30:01
 */
import * as THREE from "three";

import dotImg from "@/assets/threejs/dot.png";
import earthBg from "@/assets/threejs/earth_bg1.png";

const EARTH_COLOR = "#0053b7";
const EARTH_PARTICLE_COLOR = "#ffffff";
export default class EarthClass {
  private earth: THREE.Mesh;
  private earthParticles: any;
  private earthImg: any;
  private earthImgData: any;

  constructor(radius: number) {
    // 地球本体
    const earthGeometry = new THREE.SphereGeometry(radius);
    // 材质
    const meshBasic = new THREE.MeshLambertMaterial({ color: EARTH_COLOR });
    this.earth = new THREE.Mesh(earthGeometry, meshBasic);

    this.earthParticles = new THREE.Object3D()
    // 地球表面的点点
    this.earthImg = document.createElement('img')
    this.earthImg.src = earthBg
    this.earthImg.onload = () => {
      const earthCanvas = document.createElement('canvas')
      const earthCtx = earthCanvas.getContext('2d')
      earthCanvas.width = this.earthImg.width
      earthCanvas.height = this.earthImg.height
      earthCtx?.drawImage(this.earthImg, 0, 0, this.earthImg.width, this.earthImg.height)
      this.earthImgData = earthCtx?.getImageData(0, 0, this.earthImg.width, this.earthImg.height)
      this.createEarthParticles()
    }

  }

  getMesh() {
    return this.earth;
  }

  private createEarthParticles() {
    const positions: any = [];
    const sizes: any = [];
    for (let i = 0; i < 2; i++) {
      positions[i] = {
        positions: []
      };
      sizes[i] = {
        sizes: []
      };
    }
    const material = new THREE.PointsMaterial();
    material.size = 2.5;
    material.color = new THREE.Color(EARTH_PARTICLE_COLOR);
    material.map = new THREE.TextureLoader().load(dotImg);
    material.depthWrite = false;
    material.transparent = true;
    material.opacity = 0.3;
    material.side = THREE.FrontSide;
    material.blending = THREE.AdditiveBlending;
    const spherical = new THREE.Spherical();
    spherical.radius = 100;
    const step = 250;
    for (let i = 0; i < step; i++) {
      const vec = new THREE.Vector3();
      const radians = step * (1 - Math.sin(i / step * Math.PI)) / step + 0.5; // 每个纬线圈内的角度均分
      for (let j = 0; j < step; j += radians) {
        const c = j / step; // 底图上的横向百分比
        const f = i / step; // 底图上的纵向百分比
        const index = Math.floor(2 * Math.random());
        const pos = positions[index];
        const size = sizes[index];
        // if (isLandByUV(c, f, { earthImgData: this.earthImgData, width: this.earthImg.width, height: this.earthImg.height })) { // 根据横纵百分比判断在底图中的像素值
        //   spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
        //   spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
        //   vec.setFromSpherical(spherical) // 夹角转换为世界坐标
        //   pos.positions.push(vec.x)
        //   pos.positions.push(vec.y)
        //   pos.positions.push(vec.z)
        //   if (j % 3 === 0) {
        //     size.sizes.push(6.0)
        //   }
        // }
      }
    }
    for (let i = 0; i < positions.length; i++) {
      const pos = positions[i];
      const size = sizes[i];
      const bufferGeom = new THREE.BufferGeometry();
      const typedArr1 = new Float32Array(pos.positions.length);
      const typedArr2 = new Float32Array(size.sizes.length);
      for (let j = 0; j < pos.positions.length; j++) {
        typedArr1[j] = pos.positions[j];
      }
      for (let j = 0; j < size.sizes.length; j++) {
        typedArr2[j] = size.sizes[j];
      }
      bufferGeom.setAttribute(
        "position",
        new THREE.BufferAttribute(typedArr1, 3)
      );
      bufferGeom.setAttribute("size", new THREE.BufferAttribute(typedArr2, 1));
      bufferGeom.computeBoundingSphere();
      const particle = new THREE.Points(bufferGeom, material);
      this.earthParticles.add(particle);
    }
  }
}
