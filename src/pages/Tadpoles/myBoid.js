/*
 * @Author: Hhvcg
 * @Date: 2022-03-11 17:26:22
 * @LastEditors: Hhvcg
 * @Description: boid类文件
 */
import paper from 'paper'
// import { getRandomColor } from '@/utils/weapons'

const strength = Math.random() * 0.5
export class Boid {
  constructor(position, maxSpeed, maxForce) {
    this.position = position
    this.radius = 30
    // 尾巴点数[10， 14]
    this.tailAmount = Math.random() * 5 + 10
    this.neckAmount = 3
    // 蝌蚪移动速度，此值极其重要，关系到蝌蚪实例的生命力
    this.acceleration = new paper.Point()

    // vector这个变量，决定了下一帧，或者说是下一时刻，小蝌蚪的运动目的地
    // eslint-disable-next-line new-cap
    this.vector = new paper.Point.random()

    // 取值范围:[10, 10.5),干嘛的未知
    this.maxSpeed = maxSpeed + strength

    // 取值范围:[0.05, 0.55),干嘛的未知
    this.maxForce = maxForce + strength
    this.count = 0
    this.createItems()
  }
  /**
   * @description: 初始化蝌蚪的颈部尾巴的各个点位
   * @return {*}
   */
  createItems() {
    // 椭圆，代表蝌蚪的头部
    // this.head = new paper.Shape.Ellipse({
    //   center: this.position,
    //   size: [15, 10],
    //   fillColor: 'orange'
    // })
    this.head = new paper.Path.Circle({
        center: this.position,
        radius: 5,
        fillColor: 'orange'
      })
    // 颈部
    this.shortPath = new paper.Path({
      strokeColor: 'white',
      strokeWidth: 4,
      strokeCap: 'round'
    })
    for (let i = 0; i < this.neckAmount; i++) {
      this.shortPath.add(new paper.Point())
    }
    // 尾巴
    this.path = new paper.Path({
      strokeColor: 'green',
      strokeWidth: 2,
      strokeCap: 'round'
    })
    // 目测是尾巴长度
    for (let i = 0; i < this.tailAmount; i++) {
      this.path.add(new paper.Point())
    }

    // 截止此时，除了头部已经画出，颈部及尾巴均没有实际画出，实质上是通过加point的方式，埋了几个坑位
    // 为什么此时不画出颈部和尾巴呢？
    // 颈部和尾巴都是线段，通过add的方式添加点坑位，其值存储在各自的segments。这种纯线段图形，没有children
  }
  /**
   * @description: run起来...
   * @param {*} boids
   * @param {*} groupTogether
   * @return {*}
   */
  run(boids, groupTogether) {
    // 记录当前蝌蚪位置
    this.lastLoc = this.position.clone()
    if (!groupTogether) {
      // 自由飞翔
      this.flock(boids)
    } else {
      // 沿着svg的轨迹运动---很神奇
      this.align(boids)
    }
    this.judeBorders()
    this.updatePosition()
    this.calculateTail()
    this.moveHead()
  }
  /**
   * @description: We accumulate a new acceleration each time based on three rules
   * @param {*} boids
   * @return {*} update acceleration
   */
  flock(boids) {
    // 分离
    const separation = this.separate(boids).multiply(3)
    // 对齐
    const alignment = this.align(boids)
    // 凝聚力
    const cohesion = this.cohesion(boids)
    this.acceleration = this.acceleration.add(separation)
    this.acceleration = this.acceleration.add(alignment)
    this.acceleration = this.acceleration.add(cohesion)
    // 此处三个向量更新acceleration属性值，严重关系到电子蝌蚪的活力
  }
  // 注意，此处的参数，是当前所有的蝌蚪数组
  separate(boids) {
    const desiredSeperation = 60
    // 引导steer
    // new point 生成一个各个属性均为0的向量
    let steer = new paper.Point()
    let count = 0
    // For every boid in the system, check if it's too close
    for (let i = 0; i < boids.length; i++) {
      const other = boids[i]
      const vector = this.position.subtract(other.position)
      const distance = vector.length
      if (distance > 0 && distance < desiredSeperation) {
        // Calculate vector pointing away from neighbor
        steer = steer.add(vector.normalize(1 / distance))
        count++
      }
    }
    // Average -- divide by how many
    if (count > 0) { steer = steer.divide(count) }
    if (!steer.isZero()) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.length = this.maxSpeed
      steer = steer.subtract(this.vector)
      steer.length = Math.min(steer.length, this.maxForce)
    }
    return steer
  }

  // Alignment
  // For every nearby boid in the system, calculate the average velocity
  align(boids) {
    const neighborDist = 25
    let steer = new paper.Point()
    let count = 0
    for (let i = 0, l = boids.length; i < l; i++) {
      var other = boids[i]
      var distance = this.position.getDistance(other.position)
      if (distance > 0 && distance < neighborDist) {
        steer = steer.add(other.vector)
        count++
      }
    }

    if (count > 0) { steer = steer.divide(count) }
    if (!steer.isZero()) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.length = this.maxSpeed
      steer = steer.subtract(this.vector)
      steer.length = Math.min(steer.length, this.maxForce)
    }
    return steer
  }

  // Cohesion
  // For the average location (i.e. center) of all nearby boids,
  // calculate steering vector towards that location
  cohesion(boids) {
    const neighborDist = 100
    let sum = new paper.Point()
    let count = 0
    for (let i = 0, l = boids.length; i < l; i++) {
      const other = boids[i]
      const distance = this.position.getDistance(other.position)
      if (distance > 0 && distance < neighborDist) {
        sum = sum.add(other.position) // Add location
        count++
      }
    }
    if (count > 0) {
      sum = sum.divide(count)
      // Steer towards the location
      return this.steer(sum, false)
    }
    return sum
  }
  // A method that calculates a steering vector towards a target
  // Takes a second argument, if true, it slows down as it approaches
  // the target
  steer(target, slowdown) {
    let steer = null
    const desired = target.subtract(this.position)
    const distance = desired.length
    // Two options for desired vector magnitude
    // (1 -- based on distance, 2 -- maxSpeed)
    if (slowdown && distance < 100) {
      // This damping is somewhat arbitrary:
      desired.length = this.maxSpeed * (distance / 100)
    } else {
      desired.length = this.maxSpeed
    }
    steer = desired.subtract(this.vector)
    steer.length = Math.min(this.maxForce, steer.length)
    return steer
  }
  /**
   * @description: 如果越界，对身体各组件位置处理---学好数理化，走遍天下都不怕，此处可见数学的威力
   * @return {*}
   */
  judeBorders() {
    const vector = new paper.Point()
    const position = this.position
    const radius = this.radius
    const size = paper.project.view.size
    // 越界判断
    // 四类情况获取向量vector
    // 左边界溢出，向右边拉
    if (position.x < -radius) vector.x = size.width + radius
    // 上边界溢出，向下拉
    if (position.y < -radius) vector.y = size.height + radius
    // 右边界益出，往左拉
    if (position.x > size.width + radius) vector.x = -size.width - radius
    // 下边界溢出，往上拉
    if (position.y > size.height + radius) vector.y = -size.height - radius
    if (!vector.isZero()) {
      this.position = this.position.add(vector)
      // 批量更新尾巴节点的位置，使得呈现出去又进来的效果
      const segments = this.path.segments
      // 下面的三行代码，是我见过的，最tm骚气的for循环。实现尾巴的骚动
      for (let i = 0; i < this.tailAmount; i++) {
        segments[i].point = segments[i].point.add(vector)
      }
    }
  }
  /**
   * @description: 顾名思义，每帧更新蝌蚪位置position
   * @return {*}
   */
  updatePosition() {
    // updatePosition velocity
    this.vector = this.vector.add(this.acceleration)
    // Limit speed (vector#limit?)
    this.vector.length = Math.min(this.maxSpeed, this.vector.length)
    this.position = this.position.add(this.vector)
    // Reset acceleration to 0 each cycle
    this.acceleration = new paper.Point()
  }
  /**
   * @description: 处理颈部及尾巴
   * @return {*}
   */
  calculateTail() {
    const segments = this.path.segments
    const shortSegments = this.shortPath.segments
    const speed = this.vector.length
    const pieceLength = 5 + speed / 3
    let point = this.position
    segments[0].point = this.position.clone()
    shortSegments[0].point = this.position.clone()

    // Chain goes the other way than the movement

    let lastVector = this.vector.rotate(180, new paper.Point((0, 0)))
    for (let i = 1; i < this.tailAmount; i++) {
      const vector = segments[i].point.subtract(point)
      this.count += speed * 10
      const wave = Math.sin((this.count + i * 3) / 300)
      const sway = lastVector.rotate(90).normalize(wave)
      point = point.add(lastVector.normalize(pieceLength), sway)
      segments[i].point = point
      if (i < this.neckAmount) { shortSegments[i].point = point }
      lastVector = vector
    }
    this.path.smooth()
    this.shortPath.smooth()
  }
  moveHead() {
    this.head.position = this.position
    // this.head.rotation = this.vector.angle
  }
  arrive(target) {
    this.acceleration = this.acceleration.add(this.steer(target, true))
  }
}
