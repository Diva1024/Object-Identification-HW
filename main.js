img=""
function preload(){
img=loadImage("bed_room.jpg");
}
function setup(){
canvas=createCanvas(650,500);
canvas.center();

}
function draw(){
image(img,0,0,650,500);
fill("#6cd3f5");
text("Bed", 150,100);
noFill();
stroke("#6cd3f5");
rect(100,50,300,400);

}