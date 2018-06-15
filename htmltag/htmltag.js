function changeWidth() {
    var nw = prompt("Width in pixels", "400");
    document.getElementById('videotag').width = nw;
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 200, 200);

function drawRect() {
    ctx.rect(20, 20, 60, 60);
    ctx.stroke();
}

function drawImage() {
    var myimg = document.getElementById('myimg');
    ctx.drawImage(myimg, 90, 20);
}
