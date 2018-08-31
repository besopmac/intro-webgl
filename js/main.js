'use strict';
const [winWidth, winHeight] = [window.innerWidth, window.innerHeight];

// WebGL Renderer Engine
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(winWidth, winHeight);
document.body.appendChild(renderer.domElement);

// Creating a new Scene
const scene = new THREE.Scene();

// Perspective Camera
const camera = new THREE.PerspectiveCamera(45, winWidth / winHeight, 0.1, 1000);

// Positions x,y,z axis of Camera
camera.position.set(0, 0, 50);

// create the mesh from geometry and material
/*
    const mesh = new THREE.Mesh(geometry, material);
*/

// adding objects to the scene
/*
    scene.add(mesh)
*/

// Rendering the Scene
const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();