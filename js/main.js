'use strict';

// Renderer
const [winWidth, winHeight] = [window.innerWidth, window.innerHeight];
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(winWidth, winHeight);
document.body.appendChild(renderer.domElement);


// Scene
const scene = new THREE.Scene();