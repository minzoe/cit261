function execute1() {
    var h3 = document.createElement('h3');
    var text = document.createTextNode('Test Text');
    var id = document.getElementById('showAnswer');
    h3.appendChild(text);
    id.insertBefore(h3, id.childNodes[0]);
}

function remove() {
    var id = document.getElementById('showAnswer');
    id.removeChild(id.childNodes[0]);
}

function example2(position) {
    var div = document.getElementById('example2');
    var t = document.createTextNode('Example Text');
    var p = document.createElement('p');
    p.appendChild(t);
    div.insertAdjacentElement(position, p);
}

function insertHTML() {
    var p = document.getElementById('para');
    p.insertAdjacentHTML('beforeend', " Here is some inseted text.");
}
