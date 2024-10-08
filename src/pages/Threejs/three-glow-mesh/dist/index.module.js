/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-09-18 16:00:03
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-18 16:06:03
 */
import {
  ShaderMaterial as e,
  Color as r,
  BufferGeometry as o,
  BackSide as n,
  Mesh as i
} from "three";
var t = { backside: !0, coefficient: 0.5, color: "gold", size: 2, power: 1 };
function a(o, n, i) {
  return new e({
    depthWrite: !1,
    fragmentShader:
      "\nuniform vec3 color;\nuniform float coefficient;\nuniform float power;\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvoid main() {\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity\t= pow(\n    coefficient + dot(vVertexNormal, viewCameraToVertex),\n    power\n  );\n  gl_FragColor = vec4(color, intensity);\n}",
    transparent: !0,
    uniforms: {
      coefficient: { value: o },
      color: { value: new r(n) },
      power: { value: i }
    },
    vertexShader:
      "\nvarying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvoid main() {\n  vVertexNormal\t= normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
  });
}
function c(e, r) {
  var n = e.clone(),
    i = new Array(n.vertices.length);
  return n.faces.forEach(function(e) {
    e instanceof o
      ? (
          (i[e.a] = e.vertexNormals[0]),
          (i[e.b] = e.vertexNormals[1]),
          (i[e.c] = e.vertexNormals[2])
        )
      : console.error("Face needs to be an instance of THREE.Face3.");
  }), n.vertices.forEach(function(e, o) {
    var n = i[o],
      t = n.y,
      a = n.z;
    (e.x += n.x * r), (e.y += t * r), (e.z += a * r);
  }), n;
}
function v(e, r) {
  void 0 === r && (r = t);
  var o = r.backside,
    v = r.coefficient,
    l = r.color,
    f = r.power,
    m = c(e, r.size),
    x = a(v, l, f);
  return o && (x.side = n), new i(m, x);
}
export {
  c as createGlowGeometry,
  a as createGlowMaterial,
  v as createGlowMesh,
  t as defaultOptions
};
//# sourceMappingURL=index.module.js.map
