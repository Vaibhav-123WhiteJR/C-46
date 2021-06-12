var mainplayer_img,path_img,path,mainplayer,edges;
var opponent1_img,opponent1;
var opponent2_img,opponent2;

function preload(){
	path_img = loadImage("images/Road.png");
	mainplayer_img = loadAnimation("images/tile001.png");
	opponent1_img = loadAnimation("images/opponent1.png","images/opponent2.png");
	opponent2_img = loadAnimation("images/opponent3.png", "images/opponent4.png");
}

function setup(){
	createCanvas(1200,300);
	path=createSprite(100,150);
	path.addImage(path_img);
	path.velocityX = -5;
	
	mainplayer=createSprite(70,150);
	mainplayer.addAnimation("mainplayer",mainplayer_img);
	mainplayer.scale=1.5;
}

function draw(){
	background(0);
	edges=createEdgeSprites();
	mainplayer.collide(edges);
	mainplayer.y=mouseY;
	if(path.x<0){
		path.x=width/2;
	}
	var select_opponent=Math.round(random(1,3));
	console.log(select_opponent);
	if(World.frameCount%150===0){
		if(select_opponent==1){
			createOpponent1();
		}
	else if(select_opponent==2){
			createOpponent2();
	}
	}
	drawSprites();
}

function createOpponent1(){
	console.log("FUNCTION-OPPONENT-1");
	opponent1=createSprite(1100,Math.round(50,250));
	opponent1.scale=0.06;
	opponent1.velocityX=-6;
	opponent1.addAnimation("opponent1",opponent1_img);
	
}

function createOpponent2(){
	console.log("FUNCTION-OPPONENT-2");
	opponent1=createSprite(1100,Math.round(50,250));
	opponent1.scale=0.06;
	opponent1.velocityX=-6;
	opponent1.addAnimation("opponent2",opponent2_img);
	
}