/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useEffect, useRef } from 'react'
import './index.scss'
import * as Three from 'three'
import { setOrbit, setAxes, setGrid, setGui} from '../../utils/threejsWeapon'

const threejsComponent = (props) => {
  const canvasRef = useRef(null) as any
  let container = null as any
  let renderer = null as any
  let camera = null as any
  let scene = null as any
  let cube = null as any
  let width = null as any
  let height = null as any

  const initWorld = () => {
    container = canvasRef.current
    width = container.clientWidth; //窗口宽度
    height = container.clientHeight; //窗口高度
    scene = new Three.Scene()

    // 物体
    const geometry = new Three.BoxGeometry( 1, 1, 1 ); 
    const mesh = new Three.MeshPhongMaterial(
    {
        color: 'black',
        shininess: 1000
    } ); 
    cube = new Three.Mesh(geometry, mesh)
    cube.position.set(0, 0.5, 0)
    cube.receiveShadow = true
    cube.castShadow = true
    scene.add(cube)

    // 地面面图形
    const floor = new Three.Mesh(
    new Three.PlaneGeometry( 100, 100 ),
    new Three.MeshPhongMaterial( {color: 0x1b5120, side: Three.DoubleSide} )
    )
    floor.receiveShadow = true

    // floor.rotation.x -= Math.PI / 2
    floor.rotateX(Math.PI / 2)
    scene.add( floor );


    // // 物体
    // const geometry  = new Three.BoxGeometry(10, 10, 10)
    // const material = new Three.MeshBasicMaterial( {color: 'black'} ); 
    // cube = new Three.Mesh( geometry, material ); 
    // cube.position.y = 10
    // scene.add(cube)
 
     // 点光
    const pointLight = new Three.PointLight(0xffffff,1000, 1000)
    pointLight.position.set(2, 2, 2)
    pointLight.castShadow = true
    scene.add(pointLight)
    const sphereSize = 1;
    const pointLightHelper = new Three.PointLightHelper( pointLight, sphereSize, 'white' );
    scene.add( pointLightHelper );
     // 环境光
     let ambient = new Three.AmbientLight('white', 5);
     scene.add(ambient);

    //  const spotLight = new Three.SpotLight(0xffffff, 1000, 100, Math.PI/4, 0, 2); //创建一个白色聚光灯，强度为1，有效距离为100，光锥角度为45度，模糊半径为0，衰减系数为2

    //  spotLight.position.set(2,2,2); //设置聚光灯的位置
     
    //  const spotLightTarget = new Three.Object3D(); //创建一个对象作为聚光灯的目标
    //  spotLightTarget.position.set(0, 5, 0); //设置目标位置
    //  scene.add(spotLightTarget); //将目标对象添加到场景中
     
    //  spotLight.target = spotLightTarget; //设置聚光灯的目标为目标对象
     
    //  scene.add(spotLight); //将聚光灯添加到场景中
     



    //  相机设置
     let k = width / height; //窗口宽高比
    //  let s = 20; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //  camera = new Three.OrthographicCamera(-s * k, s * k, s, -s, 1, 800);
    camera = new Three.PerspectiveCamera(20, k, 1, 800);
    camera.position.set(20, 10, -20); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

     /**
      * 创建渲染器对象
      */
     renderer = new Three.WebGLRenderer();
     renderer.setSize(width, height);//设置渲染区域尺寸
     renderer.setClearColor('black', 1); //设置背景颜色
     container.appendChild(renderer.domElement); //body元素中插入canvas对象
     //执行渲染操作   指定场景、相机作为参数
     renderer.render(scene, camera); 

  }
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  useEffect(() => {
    initWorld()
    setOrbit(camera, renderer)
    setAxes(scene)
    // setGrid(scene)
    setGui(cube)

    animate()
  }, [])
  return (
    // <div className='threejsComponent'>
    //   <canvas ref={ canvasRef } className="main_canvas" />
    // </div>
    <div className="threejsComponent">
      <div id="container" ref={ canvasRef } className="container"></div>
    </div>
  )
}

export default threejsComponent