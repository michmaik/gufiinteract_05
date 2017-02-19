
function setup() {
  createCanvas(800,600)
  frameRate(2)
  noStroke()
  background(255)
  t = 0;
}

function draw() {
  
{
    if(mouseIsPressed === true) {
    fill(255,241,110);
    background(10,200,180,40)
    ellipse(mouseX, mouseY, 35);
    }
  else {
    fill(255,128,0);
    background(30)
    ellipse(mouseX, mouseY, 35);
  }
}
  

noStroke()
  
 for(var x= 10; x<790 ; x+=20){
   for( var y= 10; y<590; y+=20){
     
     if (random()<0.2 && mouseIsPressed ===true){
     fill(255,128,0);
     }
     else{
     fill(255,241,110)
     }
     
     triangle(x,y,10+x,y,5+x,10+y);
   }
   
   
 }

 for(var a= 25; a<790 ; a+=20){
   for( var b= 25; b<590; b+=20){
     fill(0);
     ellipse(a,b,8);
   }
 }
 
 for( a= 26; a<790 ; a+=20){
   for( b= 25; b<590; b+=20){
     
     if (random()<0.4 && mouseIsPressed ===true){
     fill(255,128,0)
     ellipse(a,b,6);
     }
     else{
       fill(255)
       ellipse(a,b,5);
     }
    }
  }
}