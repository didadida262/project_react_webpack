/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-02 10:53:16
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-02 11:21:53
 */
let canvasB = null;
let ctxWorker = null;
let frameId = null;

self.onmessage = e => {
  canvasB = e.data.canvas;
  ctxWorker = canvasB.getContext("2d");
  drawCanvas();
};

let frameCount = 0;
function drawCanvas() {
  frameCount++;
  ctxWorker.clearRect(0, 0, ctxWorker.canvas.width, ctxWorker.canvas.height);
  ctxWorker.fillStyle = "#FFFFFF";
  ctxWorker.beginPath();
  ctxWorker.arc(
    150,
    150,
    20 * Math.sin(frameCount * 0.05) ** 2,
    0,
    2 * Math.PI
  );
  ctxWorker.fill();
  frameId = self.requestAnimationFrame(
    drawCanvas
  ); /* 之后可以通过cancelAnimationFrame将动画取消 */
}
