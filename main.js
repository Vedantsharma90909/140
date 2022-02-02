function setup() {
    createCanvas = createCanvas(480, 340);
    canvas.center()
    canvas.parent('canvas')
    camera = createCapture(VIDEO);
    camera.size(480, 340);
    camera.hide()
    camera.parent("game_console");
    poseNet = ml5.poseNet(camera, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("modal is loaded");
}