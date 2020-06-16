let scene, camera, renderer, cube;
let ADD = 0.01;

let createCube = function(){
    let geometry = new THREE.BoxGeometry(1, 1, 5);
    let material = new THREE.MeshBasicMaterial({color: 0x00a1cb});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.z = 5;
    // camera.position.y = -1;

    // let axes = new THREE.AxesHelper(10);
    // scene.add(axes);

    createCube();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

let loopAnimation = function(){
    cube.position.x += ADD;
    cube.rotation.y += ADD;
    if(cube.position.x <= -3 || cube.position.x >= 3){
        ADD *= -1;
    }
    requestAnimationFrame(loopAnimation);
    renderer.render(scene, camera);
}

init();
loopAnimation();