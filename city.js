import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const Controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();


loader.load('./jackson .s city.glb', function(gltf){
scene.add(gltf.scene)
});
const light = new THREE.AmbientLight(0xffffff)
const sun = new THREE.PointLight(0xfffffff, 1000000);
sun.position.set(0,100,0);
scene.add(sun);
scene.add(light)
camera.position.z = 5;

Controls.update();


function animate(){
requestAnimationFrame(animate);
Controls.update();
renderer.render(scene,camera);
}
animate();