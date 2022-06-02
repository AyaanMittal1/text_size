var video="";
difference=0;
function setup(){
    canvas=createCanvas(300,200);
    canvas.position(75,150);
    video=createCapture(VIDEO);
    video.size(300,200);
    video.position(400,150)
    posenet=ml5.poseNet(video,model_ready);
    posenet.on("pose",got_results);
}
function got_results(results){
    if (results.length > 0){
        difference=results[0].pose.leftWrist.x-results[0].pose.rightWrist.x;
    }
}
function model_ready(){
    console.log("model is ready");
}
function draw(){
    textSize(difference);
    background("aqua");
    text1=document.getElementById("holder").value;
    text(text1,10,180);
}