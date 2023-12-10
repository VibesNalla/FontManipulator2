
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Is Loaded!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('turquoise');
    document.getElementById("font_size").innerHTML = "Dimensions of the font are= "+difference+"px";
    textSize(difference)
    fill('blueviolet');
    
    text('Vaibhav', 50, 300);
}

