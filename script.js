
var gifPics = ["bg4.gif","bg4.gif","bg4.gif","bg4.gif"];
var normPics = ["orig.jpg","orig.jpg","orig.jpg","orig.jpg"];

function gifImg(pic_id)
{
    var x = document.getElementById(pic_id);
    x.src = gifPics[pic_id];
    //x.style.opacity = "1"
}

function normalImg(pic_id)
{
    var x = document.getElementById(pic_id);
    x.src = normPics[pic_id];
    //x.style.opacity = "0.5"
}