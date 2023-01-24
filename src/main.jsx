import * as THREE from "../node_modules/three/build/three.module.js";
import "./index.css";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// create a sphere

const sphere = new THREE.Mesh(
  //   new THREE.SphereGeometry(),
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
  })
);

// console.log(sphere);
scene.add(sphere);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
