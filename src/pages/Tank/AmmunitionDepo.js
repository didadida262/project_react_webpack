/*
 * @Author: Hhvcg
 * @Date: 2023-03-02 15:40:19
 * @LastEditors: -_-
 * @Description: 子弹类
 */
import paper from 'paper'

export class Ammunition {
  constructor(position, shape, size, color) {
    this.path = null
    this.position = position
    this.shape = shape
    this.size = size
    this.color = color
    this.init()
  }
  init() {
    if (this.shape === 'circle') {
      this.path = new paper.Path.Circle({
        center: this.position,
        radius: this.size,
        fillColor: this.color
      })
    }
  }
  updateLocation(position) {
    this.path.position = position.clone()
    this.position = this.path.position
  }
}
