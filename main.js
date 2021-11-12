noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup() {
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(560,500);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
    background('#981879');
    fill('#123456');
    stroke('#987654');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("poseNet modelLoaded");
}
function gotPoses(results){
if(results.Length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose. y;
    console.log(noseX,noseY);
    rightwristX=results[0].pose.rightWrist.X;
    leftwristX=results[0].pose.leftWrist.X;
    difference=floor(leftwristX-rightwristX);
}
}