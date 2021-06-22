canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_arry=["racing.jpg"];
Randomvedant=Math.floor(Math.random()*3);
console.log(Randomvedant);
bi=nasa_arry[Randomvedant];
console.log("backroundimage="+bi);
rw=100;
rh=90;
rimage="car1.png";
car="car2.png";
carx=10;
cary=10;
ch=90;
cw=100;
roverx=10;
rovery=10;
function add()
{ 
    backroundimagetag=new Image();
    backroundimagetag.onload=uploadBackround;
    backroundimagetag.src=bi;
    roverimagetag=new Image();
    roverimagetag.onload=uploadrover;
    roverimagetag.src=rimage;
    carimagetag=new Image();
    carimagetag.onload=uploadcar;
    carimagetag.src=car;
}
function uploadBackround()
{
    ctx.drawImage(backroundimagetag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(roverimagetag,roverx,rovery,rw,rh);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38")
    {
        up();
        console.log("up");

    }
    if(keypress=="40")
    {
        down();
        console.log("down");
        
    }
    if(keypress=="37")
    {
        left();
        console.log("left");
        
    }
    if(keypress=="39")
    {
        right();
        console.log("right");
        
    }
}
function up()
{
    if(rovery>=0)
    {
        rovery=rovery-10;
        uploadBackround();
        uploadrover();
    }
}
function down()
{
    if(rovery<=500)
    {
        rovery=rovery+10;
        uploadBackround();
        uploadrover();
    }
}
function left()
{
    if(rovery>=0)
    {
        roverx=roverx-10;
        uploadBackround();
        uploadrover();
    }
}
function right()
{
    if(rovery<=500)
    {
        roverx=roverx+10;
        uploadBackround();
        uploadrover();
    }
}