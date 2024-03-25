// 搭配threejs的武器库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as Three from 'three'

  // 设置轨道,实现鼠标拖动效果
export const setOrbit = (camera, renderer) => {
    const orbit = new OrbitControls(camera, renderer.domElement)
    // 搭配阻尼，效果更佳
    orbit.enableDamping = true
}

// 添加坐标轴
export const setAxes = (scene) => {
    const axesHelper = new Three.AxesHelper(500)
    axesHelper.setColors('red','green','orange')
    scene.add(axesHelper)
}
// grid
export const setGrid = (scene) => {
    const gridHelper = new Three.GridHelper(50,50)
    scene.add(gridHelper)
}

