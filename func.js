const { fabric } = require("./fabric");

var canvas = new fabric . Canvas('myCanvas')
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
 function new_Image (get_image)
 fabric.Image.fromURL(get_image, function(img){
     block_image_object = Img;

     block_image_object.scaleToWidth(block_image_object)
     block_image_object.scaleToHeight(block_image_object)
     block_image_object.set({
         Top:block_y,
left:block_x
     });
canvas.add(block_image_object)
    });

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') 
      new_image('vhmr.jpg')
   } console. log("r")
   if(keyPressed == '86')
   {
       blockX = 200;
       
   }  new_image('vmr.png')
   
   if(keyPressed == '65')
   {
       blockX =350;
       new_image('ammr.png')
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       new_image('pmr.png')
   }
   if(keyPressed == '73')
   {
       blockX = 700;
       new_image('amr.png')
   }
   
}