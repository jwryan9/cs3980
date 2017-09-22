var $ = function(id) {return document.getElementById(id);};

var bounce;
var my_canvas;
var ball_array = new Array();
function ball(){
	this.x=Math.random()*my_canvas.canvas.width;
	this.y=Math.random()*my_canvas.canvas.height;
	this.vx = (Math.random()-0.5); //random speed
	this.vy = (Math.random()-0.5);
	this.color = "lightgreen";
	this.radius = 12;
	this.move=ball_move;
	this.draw=ball_draw;
}
function ball_move(){
	this.x+=this.vx;
	this.y+=this.vy;

 	if(this.x + this.radius > my_canvas.canvas.width)
	{
	    this.x = my_canvas.canvas.width - this.radius;
	    this.vx *= bounce;
	}
	else if(this.x - this.radius < 0)
	{
		this.x = this.radius;
		this.vx *= bounce;
	}
	if(this.y + this.radius > my_canvas.canvas.height)
	{
		this.y = my_canvas.canvas.height- this.radius;
		this.vy *= bounce;
	}
		else if(this.y - this.radius < 0)
	{
		this.y = this.radius;
		this.vy *= bounce;
	}
}
function ball_draw(){                    
     my_canvas.save();
     my_canvas.fillStyle=this.color; //****
     my_canvas.strokeStyle='black';
     my_canvas.lineWidth=2;
     my_canvas.beginPath();
     my_canvas.arc(this.x, this.y, this.radius,0, 6.28, false);
     my_canvas.closePath();
     my_canvas.stroke();
     my_canvas.fill();
     my_canvas.restore();
}

function create_balls(){
	 for(var i=0;i<75;i++){
		var temp=new ball();
		ball_array.push(temp);
	 }
}
function going(){
	var x;
     // erase all balls
	my_canvas.beginPath();
	my_canvas.fillStyle = '#ffd756';
	my_canvas.rect(0,0,my_canvas.canvas.width,my_canvas.canvas.height);
	my_canvas.fill();
	 
	for(x in ball_array){		
	 	ball_array[x].move();
		ball_array[x].draw();
	}
 }

function resize_can(){
	my_canvas.canvas.width = window.innerWidth/2;
	my_canvas.canvas.height = window.innerHeight/2;
}

function randomColor() {
	var red = Math.floor((Math.random() * 255) + 1);
	var green = Math.floor((Math.random() * 255) + 1;
	var blue = Math.floor((Math.random() * 255) + 1);

	return [red, green, blue];
}

function randomGradient() {
	randomColor().append()
}
 
window.onload = function() {
   bounce = -1;
   my_canvas = $("myCanvas").getContext('2d');
   window.onresize = resize_can;
   resize_can(); 
   create_balls();
   timer = setInterval(going,5);
};