import * as THREE from 'three'

// Global
var camera, scene, renderer;
var width = window.innerWidth;
var height = window.innerHeight;
var aspectRatio = width / height;

// setup renderer
renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// setup scene
scene = new THREE.Scene();

// setup camera
camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 500);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// setup light
var ambientLight = new THREE.AmbientLight(0xffffff, .6);
scene.add(ambientLight)
var pointLight = new THREE.PointLight(0xffffff, 80, 1000, 300);
pointLight.position.set(0, 0, 15);
scene.add(pointLight);

// setup cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshStandardMaterial({ color: 0xfab301 })
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotateX(0.03)
  cube.rotateY(0.03)
}

animate();
