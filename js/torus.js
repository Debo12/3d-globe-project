let scene, camera, renderer, sphere;
let ADD = 0.01;

let createTorus = function(){
    let shape = new THREE.TorusGeometry(5, 1, 30, 30, 2*Math.PI); // radis, tube, radialsegments, tubularsegment, arc
    let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});

    torus = new THREE.Mesh(shape, material);

    scene.add(torus);
}

let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 25;

    createTorus();

    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

let mainLoop = function() {
    torus.rotation.x += ADD;
    torus.rotation.y += ADD;
    requestAnimationFrame(mainLoop);
    renderer.render(scene, camera);
};

init();
mainLoop();