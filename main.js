function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(0, 100);

    canvas = createCanvas(550, 550);
    canvas.position(550, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#4a58b5');
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}