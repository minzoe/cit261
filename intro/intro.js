function forLoop() {
    var last = document.getElementById('last').value;

    if (last !== "") {
        for (i = 0; i <= last; i++) {
            document.getElementById('forLoop').insertAdjacentHTML('beforeend', i + " ");
        }
    } else {
        alert('You must enter a value');
    }
}

function whileLoop() {
    var last = document.getElementById('last').value;

    if (last !== "") {
        var i = 0;
        while (i <= last) {
            document.getElementById('whileLoop').insertAdjacentHTML('beforeend', i + " ");
            i++;
        }
    } else {
        alert('You must enter a value');
    }
}

function doLoop() {
    var last = document.getElementById('last').value;

    if (last !== "") {
        var i = 0;
        do {
            document.getElementById('doLoop').insertAdjacentHTML('beforeend', i + " ");
            i++;
        } while (i <= last);
    } else {
        alert('You must enter a value');
    }
}

function showArray() {
    var array = ['item1', 'item2', 'item3'];
    var i = document.getElementById('arrayInput').value;
    if (i !== "") {
        document.getElementById('array').innerHTML = array[i];
    } else {
        alert('You need to enter a value');
    }
}

function showAArray() {
    var aArray = []
    aArray[0] = 'item1';
    aArray[1] = 'item2';
    aArray[2] = 'item3'
    var i = document.getElementById('aArrayInput').value;

    document.getElementById('aArrayLength').innerHTML = aArray.length;

    if (i !== "") {
        document.getElementById('aArrayItem').innerHTML = aArray[i];
    } else {
        alert('You need to enter a value');
    }
}
