!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("three")):"function"==typeof define&&define.amd?define(["exports","three"],o):o((e=e||self).threeGlowMesh={},e.three)}(this,function(e,o){var r={backside:!0,coefficient:.5,color:"gold",size:2,power:1};function n(e,r,n){return new o.ShaderMaterial({depthWrite:!1,fragmentShader:"\nuniform vec3 color;\nuniform float coefficient;\nuniform float power;\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvoid main() {\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity\t= pow(\n    coefficient + dot(vVertexNormal, viewCameraToVertex),\n    power\n  );\n  gl_FragColor = vec4(color, intensity);\n}",transparent:!0,uniforms:{coefficient:{value:e},color:{value:new o.Color(r)},power:{value:n}},vertexShader:"\nvarying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvoid main() {\n  vVertexNormal\t= normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"})}function t(e,r){var n=e.clone(),t=new Array(n.vertices.length);return n.faces.forEach(function(e){e instanceof o.Face3?(t[e.a]=e.vertexNormals[0],t[e.b]=e.vertexNormals[1],t[e.c]=e.vertexNormals[2]):console.error("Face needs to be an instance of THREE.Face3.")}),n.vertices.forEach(function(e,o){var n=t[o],i=n.y,a=n.z;e.x+=n.x*r,e.y+=i*r,e.z+=a*r}),n}e.createGlowGeometry=t,e.createGlowMaterial=n,e.createGlowMesh=function(e,i){void 0===i&&(i=r);var a=i.backside,c=i.coefficient,l=i.color,v=i.power,f=t(e,i.size),s=n(c,l,v);return a&&(s.side=o.BackSide),new o.Mesh(f,s)},e.defaultOptions=r});
//# sourceMappingURL=index.umd.js.map