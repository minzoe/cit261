var divDisplay = document.getElementById('divDisplay');
divDisplay.style.display = "inline-block";
divDisplay.style.color = "black";
divDisplay.style.fontSize = "1em";
divDisplay.style.fontFamily = "sans-serif";

function changeColor() {
    if (divDisplay.style.color === "black") {
        divDisplay.style.color = "white";
        divDisplay.style.backgroundColor = "purple";
    } else {
        divDisplay.style.color = "black";
        divDisplay.style.backgroundColor = "white";
    }
}

function changeSize() {
    if (divDisplay.style.fontSize === "1em") {
        divDisplay.style.fontSize = "4em";
    } else {
        divDisplay.style.fontSize = "1em";
    }
}

function changeDisplay() {
    if (divDisplay.style.display === "inline-block") {
        divDisplay.style.display = "none";
    } else {
        divDisplay.style.display = "inline-block";
    }
}

function changeFamily() {
    if (divDisplay.style.fontFamily === "sans-serif") {
        divDisplay.style.fontFamily = "serif";
    } else {
        divDisplay.style.fontFamily = "sans-serif";
    }
}
