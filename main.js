moustacheX = 0;
moustacheY = 0;

function preload(){
   moustache = loadImage('https://i.postimg.cc/PxmCrFwx/Moustache-Transparent-PNG.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet foi inicializado');
  }
  
  function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    moustacheX = results[0].pose.nose.x -24;
    moustacheY = results[0].pose.nose.y +1;
  }
  }
  
  function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX, moustacheY, 60, 60);
  }

  function takeSnapshot(){    
    save('myFilterImage.png');
  }