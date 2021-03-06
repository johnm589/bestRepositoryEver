<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>domINation</title>
    <style>
    	* { padding: 0; margin: 0; }
    	canvas {
      background:grey;

        display: block; margin: 0 auto; }
    </style>
</head>
<body>

<canvas id="myCanvas" width="1200" height="700"></canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("3d");
//BallStart Position
var x = canvas.width/10;
var y = canvas.height-30;
//slope
var dx = 2;
var dy = 2;
//ballRadius
var ballRadius = 1 ;
//Player1
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
//Variables for Player 1 Key Press
var rightPressed = false;
var leftPressed = false;
//Draws the Paddle
var imageObj = new Image()
imageObj.onload = function() {
  drawPong()}


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
//Draws the Ball
function drawPong() {
    ctx.beginPath();
;
  imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';

    //ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  //  ctx.fillStyle = "red";
    ctx.fill();
    ctx.drawImage(imageObj, x, y);
    ctx.closePath();
    //ctx.arc(x, y, ballRadius, 0, Math.PI*2);
}

//draws the everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPong();
    //drawPaddle();
    x += dx;
    y += dy;

//controls Key Movement
if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
}
//Boundry code written below
//Top Boundry

    if(y + dy < ballRadius) {
//reverse slope (change direction)
      dy = -dy;
//
          console.log("Player 1 Wins!")
    }
    //Bottom Boundry
    if(y + dy > canvas.height) {
        dy = -dy;
          console.log("Player 2 Wins!")
}
//right and left Boundry
if(x + dx > canvas.width-435){
 dx = -dx;
    }
    if( x + dx < 0){
      dx=-dx;
    }


}
//Key Event Listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 65) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 65) {
        leftPressed = false;
    }
}
//Game Speed
setInterval(draw, 10);




//red rectangle below

 // ctx.beginPath();
 // ctx.rect(350, 450, 50, 30);
 // ctx.fillStyle = "#FF0000";
 // ctx.fill();
 // ctx.closePath();

 // var imageObj = new Image();
 //
 // imageObj.onload = function() {
 //   ctx.drawImage(imageObj, 69, 50);
 // };
 // imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
 //






//hollow rectangle below

// ctx.beginPath();
// ctx.rect(350, 40, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

//green circle below

// ctx.beginPath();
// ctx.arc(350, 40, 25, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
</script>

</body>
</html>
