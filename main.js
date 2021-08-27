function preload() {
   // img = loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fflower-opening&psig=AOvVaw0c4OkGFdKIPOPCEjM_lsVm&ust=1629814304617000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD848epx_ICFQAAAAAdAAAAABAJ');
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results); 
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
    }
}

function draw() {
    image(video,0,0,400,300);
}

function take_snapshot() {
    save('myFilterImage.png');
}