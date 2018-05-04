function setStorageItem() {
    var item = document.getElementById('textInput').value;
    var itemValue = document.getElementById('keyValue').value;
    localStorage.setItem(item, itemValue);
}

function getStorageItem() {
    var item = document.getElementById('textInput').value;
    console.log(localStorage.getItem(item));
    if (localStorage.getItem(item) === null) {
        document.getElementById('displayItem').innerHTML = "There is no " + item;
    } else {
        document.getElementById('displayItem').innerHTML = localStorage.getItem(item);
    }
}

function displayKey() {
    var num = document.getElementById('keyNumber').value;
    if (localStorage.key(num) === null) {
        document.getElementById('displayKeyN').innerHTML = "There is no key at postion " + num;
    } else {
        document.getElementById('displayKeyN').innerHTML = localStorage.key(num);
    }
}

function removeStorageItem() {
    var item = document.getElementById('textInput').value;
    localStorage.removeItem(item);
}

function clearStorage() {
    localStorage.clear();
}