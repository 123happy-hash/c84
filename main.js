canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

r_height=70;
r_width=100;

r_xPos=10;
r_yPos=10;

b_image="mars.jpg";
r_image="rover.png";

function add(){
    bg=new Image();
    bg.onload=uploadbg;
    bg.src=b_image;

    rv=new Image();
    rv.onload=uploadrv;
    rv.src=r_image;
}
function uploadbg(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}
function uploadrv(){
    ctx.drawImage(rv, r_xPos, r_yPos, r_width, r_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=="37"){
        Left();
        console.log("Left pressed");
    }
    if(keypressed=="38"){
        Up();
        console.log("Up pressed");
    }
    if(keypressed=="39"){
        Right();
        console.log("Right pressed");
    }
    if(keypressed=="40"){
        Down();
        console.log("Down pressed");
    }
}