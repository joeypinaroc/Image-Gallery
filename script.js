var imageBox = document.getElementById("imageBox");

var leftButton = document.getElementById("left");
var rightButton = document.getElementById("right");

var imagesNumber = 3;
var imageCounter = 1;
//https://github.com/joeypinaroc/Image-Gallery/blob/main/img1.png
imageBox.setAttribute("src", `img${imageCounter}.png`);
leftButton.addEventListener("click", ()=>{
    if(imageCounter == 1)
    {
        imageCounter = imagesNumber;
    }
    else
    {
        imageCounter -= 1;
    }
    imageBox.setAttribute("src", `img${imageCounter}.png`);
})

rightButton.addEventListener("click", ()=>{
    if(imageCounter == imagesNumber)
    {
        imageCounter = 1;
    }
    else
    {
        imageCounter += 1;
    }
    imageBox.setAttribute("src", `img${imageCounter}.png`);
})