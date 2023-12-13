import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


const Controls = new OrbitControls(camera, renderer.domElement);
const geometry1 = new THREE.BoxGeometry(2,4,1,);
const material1 = new THREE.MeshLambertMaterial({color: 0x0733f7});
const cube = new THREE.Mesh(geometry1,material1)
scene.add(cube)
cube.position.x = -5

const geometry2 = new THREE.BoxGeometry(2,4,1,);
const material2 = new THREE.MeshLambertMaterial({color: 0xf70707});
const cube2 = new THREE.Mesh(geometry2,material2)
scene.add(cube2)
cube2.position.x = 5

const light = new THREE.PointLight(0xffffff, 100);
scene.add(light);
camera.position.z = 5; 
const ambientLight = new THREE.AmbientLight(0xffffff , 0.5);
scene.add(ambientLight);

const sphereGeometry = new THREE.SphereGeometry(2,64,64);
const sphereMaterial = new THREE.MeshLambertMaterial({color:0x0000FF});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
function animate(){
    requestAnimationFrame(animate)

    cube.rotation.x += 0.2
    cube.rotation.y += 0.2

cube2.rotation.x += 0.3
    cube2.rotation.y += 0.3

    renderer.render(scene,camera);
}
animate();