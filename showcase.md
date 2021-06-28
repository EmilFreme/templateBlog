---
title: Showcase
layout: default
---

<div id="canva"></div>


Ops, parece que não há suporte a WebGL ou sua coneção está muito lenta, veja a
versão simplificada




<!--

Projetos selecionados de nosso alunos

> # 2021.1
>
> ### Flipper
>
> [![Flipper](https://img.itch.zone/aW1nLzYxODA5MzkucG5n/original/2SleDn.png)](https://giovannasc.itch.io/flipper)
>
> ### The Only Way Is Up
>
> [![The Only Way Is Up](https://img.itch.zone/aW1nLzYxNzM3NjMucG5n/original/oh61Wi.png)](https://pedrotramos.itch.io/the-only-way-is-up)
>
> ### Get Out!
>
> [![Get Out!](https://img.itch.zone/aW1nLzYxODAxNzMucG5n/original/vA31JI.png)](https://lucaslealvale.itch.io/get-out)
>
> ### Rouge noir
>
> [![Rouge noir](https://img.itch.zone/aW1nLzYxODcwOTEuZ2lm/original/8C0b2D.gif)](https://gubebra.itch.io/rouge-noir)
>
> ### Tinkies
>
> [![Tinkies](https://img.itch.zone/aW1nLzYxODc1MjgucG5n/original/snw1hs.png)](https://mikomoares.itch.io/tinkies)
>
> ### Berserk Breakout
>
> [![Berserk Breakout](https://img.itch.zone/aW1nLzUzMTIxNDEucG5n/original/l6Ua8b.png)](https://gubebra.itch.io/berserkbreakout)
>
> ### Laser Wave
>
> [![Laser Wave](https://img.itch.zone/aW1nLzU0MzkyNzcucG5n/original/X%2FM4wJ.png)](https://mikomoares.itch.io/laser-wave)
>
> ### Return Knight
>
> [![Return Knight](https://img.itch.zone/aW1nLzU3NTkwMjgucG5n/original/M1yQ5M.png)](https://emanuellemoco.itch.io/return-knight)
>
> ### Late Work
>
> [![Late Work](https://img.itch.zone/aW1nLzU5MjA2MDUucG5n/original/3Lx%2Bjc.png)](https://gubebra.itch.io/late-work)
>
>
> ### Waterwatch
>
> [![Waterwatch](https://img.itch.zone/aW1nLzU4OTA4MzQucG5n/original/T%2F%2FGlr.png)](https://thiagovcs.itch.io/waterwatch)
-->

<!--{:.acordeon .open}-->
<!-- # 2020.2-->
<style type="text/css">
#canva {
    position:absolute;
    top:50px;
    right:0;
    left:0;
    bottom:0;
    background: #000000;

}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" integrity="sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript">

"use strict";

var canva = document.getElementById("canva");
var WIDTH = canva.offsetWidth;
var HEIGHT = canva.offsetHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45,
    WIDTH / HEIGHT, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();

renderer.setSize(WIDTH, HEIGHT);
canva.appendChild(renderer.domElement);

const pointGeom =  new THREE.BufferGeometry();

const vertice = new THREE.Float32BufferAttribute([0,0,0], 3);

pointGeom.setAttribute("position", vertice);

const materialp = new THREE.PointsMaterial( {color: 0xffffff });
materialp.transparent = true;
materialp.opacity = 0.5;

const point = new THREE.Points(pointGeom, materialp);

scene.add(point);

camera.position.z = 100;

////////////////////////////////////

var lines = [];

const planeGeom = new THREE.PlaneGeometry(5* 16/9, 5);
const material2 = new THREE.MeshBasicMaterial( {color: 0xcc00cc, side: THREE.DoubleSide});

for (var i = 0; i < 10; i++){
    var start = new THREE.Vector3();
    var end = new THREE.Vector3(THREE.MathUtils.randFloatSpread(50),
                             THREE.MathUtils.randFloatSpread(50),
                             THREE.MathUtils.randFloatSpread(50));

    var lineGeom = new THREE.BufferGeometry().setFromPoints([start, end]);
    const plane = new THREE.Mesh( planeGeom, material2);
    plane.position.x = end.x;
    plane.position.y = end.y;
    plane.position.z = end.z;
    var line = new THREE.Line( lineGeom, materialp);
    line.add(plane);
    lines.push(line); 
    scene.add(line);
}


///////////////////////////////////

// Observe a scene or a renderer
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: scene }));
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: renderer }));
}

var oldTime = 0;
function update(time){

time *= 0.001; //To Seconds;
const dt = time - oldTime;
oldTime = time;
if(isNaN(dt)) return;
for(var i = 0; i<lines.length; i++){
    var rotOffset = THREE.MathUtils.randFloat(0, 1) * dt; 
    lines[i].rotation.x += rotOffset; 
    rotOffset = THREE.MathUtils.randFloat(0, 1) * dt; 
    lines[i].rotation.y += rotOffset; 
    rotOffset = THREE.MathUtils.randFloat(0, 1) * dt; 
    lines[i].rotation.z += rotOffset; 
    lines[i].children[0].lookAt(camera.position);
}


}

function mainLoop(time){
    requestAnimationFrame( mainLoop );
    update(time);
    renderer.render( scene, camera);
}

mainLoop();


</script>
