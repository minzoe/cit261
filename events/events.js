var message = document.getElementById('message');

function resetMessage() {
    setTimeout(function () {
        message.innerHTML = "Event Message";
        message.style.color = "black";
    }, 3000)
}
// Standard Events

// onchange
function showOnchange() {
    message.innerHTML = "Event onchange triggered";
    message.style.color = "blue";
    resetMessage();
}

// onclick
document.getElementById('onclickBtn').onclick = function () {
    message.innerHTML = "Event onclick triggered";
    message.style.color = "green";
    resetMessage();
}

// onmouseover
document.getElementById('square').addEventListener('mouseover', function () {
    document.getElementById('square').style.backgroundColor = "green";
})

// onmouseout
document.getElementById('square').addEventListener('mouseout', function () {
    document.getElementById('square').style.backgroundColor = "yellow";
})

// onkeydown
document.getElementById('onkey').onkeydown = function () {
    message.innerHTML = "Event keydown called";
    message.style.color = "pink";
    resetMessage();
}

// onkeyup
document.getElementById('onkey').onkeyup = function () {
    message.innerHTML = "Event keyup called";
    message.style.color = "purple";
    resetMessage();
}

// onload
function showOnload() {
    alert('Event onload triggered');
}

// Mobile Event
var touchSquare = document.getElementById('touchSquare');
// ontouchstart
touchSquare.addEventListener('touchstart', function () {
    touchSquare.style.backgroundColor = "silver";
});

// on touchend
touchSquare.addEventListener('touchend', function () {
    touchSquare.style.backgroundColor = "black";
});

// ontouchmove
touchSquare.addEventListener('touchmove', function (e) {
    var curX = e.touches[0].pageX;
    var d = curX - startX;
    touchSquare.style.marginLeft = d;
})

// touchcancel

function touchColorChange(swatch) {
    alert('On touch');
    touchSquare.style.backgroundColor = swatch;
}
