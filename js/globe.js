let scene, camera, renderer, sphere;
let ADD = 0.01;

let createSphere = function(){
    let shape = new THREE.SphereGeometry(5, 30, 30);
    let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});

    sphere = new THREE.Mesh(shape, material);

    scene.add(sphere);
}

let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 20;

    createSphere();

    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

let mainLoop = function() {
    sphere.rotation.y += ADD;
    requestAnimationFrame(mainLoop);
    renderer.render(scene, camera);
};

init();
mainLoop();