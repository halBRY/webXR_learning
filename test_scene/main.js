import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cube.translateZ( -5 );
cube.translateY( 3 );

const geom = new THREE.SphereGeometry( 15, 32, 16 ); 
const mat = new THREE.MeshBasicMaterial( { color: 0x00dddd } ); 
const sphere = new THREE.Mesh( geom, mat ); 

sphere.material.side = THREE.BackSide;

scene.add( sphere );

camera.position.z = 5;

document.body.appendChild( VRButton.createButton( renderer ) );

renderer.xr.enabled = true;

/*
function animate() {
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();*/

renderer.setAnimationLoop( function () {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );

} );