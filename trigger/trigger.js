function aniCheck() {
    if (document.getElementById('aniCheck').checked === true) {
        document.getElementById('ani').classList.add('animate');
    } else {
        document.getElementById('ani').classList.remove('animate');
    }
}

function startTrans() {
    document.getElementById('trans').style.width = "300px";
}

function reset() {
    document.getElementById('trans').style.width = "100px";
}
