---
title: Showcase
layout: default
---

<div id="canva"></div>
<div id="crosshair"></div>

Ops, parece que não há suporte a WebGL ou sua coneção está muito lenta, veja a
versão simplificada

<style type="text/css">
#canva {
    position:absolute;
    top:50px;
    right:0;
    left:0;
    bottom:0;
    background: #000000;

}

#crosshair{
background-image: url(/assets/crosshair.png);
position: absolute;
width:40px;
height:40px;
margin-top:30px;
margin-left:-20px;
transform-origin: center;
transform:translate(50vw, 50vh);
}
</style>
<script type="module" src="assets/js/showcase.js">
/*
"use strict";

var WIDTH, HEIGHT;
var ROOT;
var camera;
var renderer;
var systems = [];
var bilboards = [];
var bilboardBaseMaterial;

function init(){
    let canva = document.getElementById("canva");
    WIDTH = canva.offsetWidth;
    HEIGHT = canva.offsetHeight;
    ROOT = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, 0.1, 1000);
    camera.position.z = 100;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    canva.appendChild(renderer.domElement);
    bilboardBaseMaterial = new THREE.MeshBasicMaterial( {color: 0xcc00cc, side: THREE.DoubleSide});
    bilboardBaseMaterial.transparent = true;
    bilboardBaseMaterial.opacity = 0.65;
}



function linesAndBilboards(pivot){

    for(let i = 0, nObjs = 36; i<nObjs; i++){
        let start = new THREE.Vector3();
        let radius = 10 + Math.random() * 20
        let randPhi = (Math.PI / nObjs) * i;
        let randThetha = (4*Math.PI / nObjs) * i; // (n * 2PI Consigo mais mais espirais na esfera
        let end = new THREE.Vector3().setFromSphericalCoords(30, randPhi,
        randThetha);

        let lineGeom = new THREE.BufferGeometry().setFromPoints([start, end]);
        
        let line = new THREE.Line( lineGeom );

    


        let planeGeom = new THREE.PlaneGeometry(5* 16/9, 5);
        let plane = new THREE.Mesh( planeGeom, bilboardBaseMaterial );
        plane.position.x = end.x;
        plane.position.y = end.y;
        plane.position.z = end.z;
        plane.lookAt(start);

        line.add(plane);
        bilboards.push(plane);


        pivot.add(line);


    }

}

function generateSystems(){

    for(let i = 0; i < 4; i++){
        let pointGeo = new THREE.BufferGeometry().setFromPoints([new
        THREE.Vector3]);
        let point = new THREE.Points(pointGeo);

        linesAndBilboards(point);

        let light = new THREE.PointLight( 0xffff00, 1, 100);
        light.position.set([0,0,0]);
        point.add(light);

        point.position.x = THREE.MathUtils.randFloatSpread(200); 
        point.position.y = THREE.MathUtils.randFloatSpread(200); 
        point.position.z = THREE.MathUtils.randFloat(0, -200); 
        

        systems.push(point);
        ROOT.add(point)

    }

}



init();

generateSystems();




///////////////////////////////////

// Observe a ROOT or a renderer
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: ROOT }));
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: renderer }));
}

var oldTime = 0;
function update(time){

time *= 0.001; //To Seconds;
const dt = time - oldTime;
oldTime = time;
if(isNaN(dt)) return;
for(var i = 0; i<systems.length; i++){
    var rotOffset = THREE.MathUtils.randFloat(0, 1) * dt; 
    systems[i].rotation.x += rotOffset; 
    rotOffset = THREE.MathUtils.randFloat(0, 1) * dt; 
    systems[i].rotation.y += rotOffset; 
    rotOffset = THREE.MathUtils.randFloat(0, 1) * dt; 
    systems[i].rotation.z += rotOffset; 
}

bilboards.forEach(plane => plane.lookAt(camera.position));

}

function mainLoop(time){
    requestAnimationFrame( mainLoop );
    update(time);
    renderer.render( ROOT, camera);
}

mainLoop();

*/
</script>
