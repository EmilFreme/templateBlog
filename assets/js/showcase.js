"use strict";

import * as T from "https://cdn.skypack.dev/pin/three@v0.130.0-WI96Ec9p8dZb5AMcOcgD/mode=imports,min/optimized/three.js";

/**
 * Global Variables
 **/

var WIDTH, HEIGHT;
var SceneRoot;
var MainCamera;
var Render;
var Raycaster;
var Materials = new Map();

var mouseTimeout;
var mouseSensitivity = 10;
var joystick = { w: false, a: false, s: false, d: false, mx: 0, my: 0};

var lastTime = 0;

var Billboards = [];
var RaycasterTargets = [];
/**
 * Billboard ""Class""
 **/
function Billboard(){
  
    this.aspectRatio = 16/9;
    this.size = 1;


    let geometry = new T.PlaneGeometry(this.size * this.aspectRatio, this.size);
    let material = Materials.get("DefaultBillboardMaterial");

    this.mesh = new T.Mesh(geometry, material);
    this.mesh.name = `Billboard: ${Billboards.length}`;
    RaycasterTargets.push (this.mesh);
    this.LookCamera = function(){ this.mesh.lookAt(MainCamera.position); };
    Billboards.push(this);
}

/**
 * Line ""Class""
 **/

function Line(radius, phi, theta){
    let start = new T.Vector3();
    let _radius = radius || 10;
    let _phi = phi || 0; 
    let _theta = theta || 0;

    this.end = new T.Vector3().setFromSphericalCoords(radius, phi, theta);
    let geometry = new T.BufferGeometry().setFromPoints([start, this.end]);
    
    this.line = new T.Line(geometry, Materials.get("DefaultLineMaterial"));
}


/**
 * Helper Functions
 **/

function LoadDefaultMaterials(){
    let billboard = new T.MeshBasicMaterial( {color: 0xaa00ff, side: T.DoubleSide});
    billboard.trasnparent = true;
    billboard.opacity = 0.50;

    Materials.set("DefaultBillboardMaterial", billboard);

    let line = new T.LineBasicMaterial({ color: 0xffffff });

    Materials.set("DefaultLineMaterial", line);
}



function Init(){
    let canva = document.getElementById("canva");
    WIDTH = canva.offsetWidth;
    HEIGHT = canva.offsetHeight;
    SceneRoot = new T.Scene();
    MainCamera = new T.PerspectiveCamera(75, WIDTH/HEIGHT, 0.1, 1000);
    MainCamera.position.z = 100;
    Render = new T.WebGLRenderer();
    Render.setSize(WIDTH, HEIGHT);
    Raycaster = new T.Raycaster();
    canva.appendChild(Render.domElement);
    // Travar o mouse dentro da aplicação
    canva.requestPointerLock = canva.requestPointerLock ||
                               canva.mezRequestPointerLock ||
                               webkitRequestPointerLock;
    canva.addEventListener("click", () => canva.requestPointerLock());
}


function YearSystems(){
    for(let i = 0; i < 1 + Math.random() * 3; i++){
        let system = new T.Object3D();

        for(let j = 0, nProjects = 1 + Math.random() * 15; j < nProjects; j++){
            let phi = (Math.PI / nProjects ) * j;
            let theta = (4*Math.PI / nProjects) *j; // (n * 2PI Consigo mais mais espirais na esfera

            let line = new Line(20, phi, theta);

            let bb = new Billboard();
            bb.mesh.position.x = line.end.x
            bb.mesh.position.y = line.end.y
            bb.mesh.position.z = line.end.z
            line.line.add(bb.mesh);

            system.add(line.line);
            
        }
        system.position.set(T.MathUtils.randFloatSpread(150),
                            T.MathUtils.randFloatSpread(150),
                            T.MathUtils.randFloat(0, -10));
        SceneRoot.add(system);
    }

}

///////////////////////////////

window.addEventListener("keydown", function(event){
    const keyName = event.key;

    if(keyName === "w" || keyName === "W"){
        joystick.w = true;
    }

    if(keyName === "a" || keyName === "A"){
        joystick.a = true;
    }

    if(keyName === "s" || keyName === "S"){
        joystick.s = true;
    }

    if(keyName === "d" || keyName === "D"){
        joystick.d = true;
    }
});

window.addEventListener("keyup", function(event){
    const keyName = event.key;

    if(keyName === "w" || keyName === "W"){
        joystick.w = false;
    }

    if(keyName === "a" || keyName === "A"){
        joystick.a = false;
    }

    if(keyName === "s" || keyName === "S"){
        joystick.s = false;
    }

    if(keyName === "d" || keyName === "D"){
        joystick.d = false;
    }
});


function mouseHandler(event){
    joystick.mx = event.movementX;
    joystick.my = event.movementY;
    clearTimeout(mouseTimeout); 
    mouseTimeout = setTimeout(function(){joystick.mx = 0; joystick.my = 0}, 15);
    
}

window.addEventListener("mousemove", function(event){
    let canva = document.getElementById("canva");
    if(document.pointerLockElement === canva){
        mouseHandler(event);
    }
    else{
    }
});


////////////////////////////////

// Observe a ROOT or a renderer
if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: SceneRoot }));
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: Render }));
}

function UpdateBillboards(){
    for(let bb of Billboards){
        bb.LookCamera();
    }
}

function HandleInput(dt){
    if(joystick.w) MainCamera.position.z -= 10*dt;
    if(joystick.s) MainCamera.position.z += 10*dt;
    if(joystick.a) MainCamera.position.x -= 10*dt;
    if(joystick.d) MainCamera.position.x += 10*dt;
    if(Math.abs(joystick.mx) > 0){
        MainCamera.rotateY(-T.MathUtils.degToRad(joystick.mx * dt * mouseSensitivity));
    }
    if(Math.abs(joystick.my) > 0){
        MainCamera.rotateX(-T.MathUtils.degToRad(joystick.my * dt * mouseSensitivity));
    }
}

let center = new T.Vector2(0, 0);
function HandleCrosshair(){
    Raycaster.setFromCamera(center, MainCamera);
    

    let intersections = Raycaster.intersectObjects(RaycasterTargets);
    if(intersections.length > 0){
        console.log(intersections[0].object.name);
    }
    
}

function Update(time){
    time *= 0.001; //to seconds;
    let dt = time - lastTime;
    lastTime = time;
    if(isNaN(dt)) return;

    UpdateBillboards();
    HandleInput(dt);
    HandleCrosshair();

}

function MainLoop(time){
    requestAnimationFrame(MainLoop);
    Update(time);
    Render.render( SceneRoot, MainCamera );
}



Init();
LoadDefaultMaterials();
YearSystems();


MainLoop();
