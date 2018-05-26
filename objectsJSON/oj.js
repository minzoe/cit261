function printPerson() {
    var person = {
        firstName: 'Zoe',
        lastName: 'Miner',
        grade: 'Senior'
    };
    document.getElementById('dPerson').innerHTML = person.firstName + " " + person.lastName + " is a " + person.grade + "<br>person = {firstName: 'Zoe', lastName: 'Miner', grade: 'Senior'}";
}

function parseJSON() {
    var string = document.getElementById('parseString').innerHTML;
    var j = JSON.parse(string);
    alert(j);
    j = JSON.stringify(j);
    alert(j);
}

function getJSON() {
    var url = "https://pokeapi.co/api/v2/pokemon/1/";
    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var poke = JSON.parse(this.responseText);
            console.log(poke);
            document.getElementById('response').innerHTML = "Pokemon: " + poke.name;
            document.getElementById('response').insertAdjacentHTML('afterend', "<img src='" + poke.sprites.front_shiny + "'>");
        } else {
            document.getElementById('response').innerHTML = "Making request";
        }
    });

    xhr.open("GET", url);

    xhr.send(data);
}
