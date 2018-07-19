// Api Code
// 83c005513cd4cc5b89b76f714c3c161a

// Weather Options
// Clear
// Drizzle
// Rain
// Clouds

function apiCall(zipCode) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            console.log(json);
            console.log(json.name + ": " + json.weather[0].main);
            document.getElementById('city').innerHTML = json.name;
            document.getElementById('weather').innerHTML = json.weather[0].main;

            if (json.weather[0].main.toLowerCase() == 'clear') {
                document.getElementById('body').style.backgroundColor = "lightyellow";
                document.getElementById('weather-div').className = "";
                document.getElementById('weather-div').classList.add('sun');
            } else if (json.weather[0].main.toLowerCase() == 'drizzle') {
                document.getElementById('body').style.backgroundColor = "darkgrey";
                document.getElementById('weather-div').className = "";
                document.getElementById('weather-div').classList.add('rain');
            } else if (json.weather[0].main.toLowerCase() == 'rain') {
                document.getElementById('body').style.backgroundColor = "darkblue";
                document.getElementById('weather-div').className = "";
                document.getElementById('weather-div').classList.add('rain');
            } else if (json.weather[0].main.toLowerCase() == 'clouds') {
                document.getElementById('body').style.backgroundColor = "lightgrey";
                document.getElementById('weather-div').className = "";
                document.getElementById('weather-div').classList.add('cloud');
            } else {
                document.getElementById('body').style.backgroundColor = "#cc66ff";
                document.getElementById('weather-div').className = "";
            }
            saveData();
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=83c005513cd4cc5b89b76f714c3c161a", true);
    xhttp.onerror = function () {
        console.log("** An error occurred during the transaction");
        document.getElementById('message').innerHTML = "Invalid Zip Code";
        document.getElementById('message').style.color = "red";
        resetMessage();
    };
    xhttp.send();
}

function searchByCode() {
    var code = document.getElementById('zipCode').value;
    if (code.length != 5) {
        document.getElementById('message').innerHTML = "Please enter a valid zipcode";
        document.getElementById('message').style.color = "red";
        resetMessage();
    } else {
        apiCall(code);
    }
}

function resetMessage() {
    setTimeout(
        function () {
            document.getElementById('message').innerHTML = "";
            document.getElementById('message').style.color = "black";
        },
        6000
    );
}

function loadPage() {
    var json = JSON.parse(localStorage.getItem('setPrevious'));
    if (typeof json.city != 'string') {

    } else {
        apiCall(json.city);
    }

    if (typeof json.message != 'string') {

    } else {
        document.getElementById('personal').innerHTML = json.message;
    }
}

function saveData() {
    var zipCode = document.getElementById('zipCode').value;
    var message = document.getElementById('personal').innerHTML;

    var data = {
        'city': zipCode,
        'message': message
    }
    localStorage.setItem("setPrevious", JSON.stringify(data));
}

function writeMessage() {
    var message = prompt('What is your message?');
    document.getElementById('personal').innerHTML = message;
    saveData();
}