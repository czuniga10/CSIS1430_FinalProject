//make board

//get players

//score board

//managing turn

//game markers

//check for win

//display turns
var players = [];
var markers = ["X","O"];
let turn = 0;

function getNames() {
    players[0] = prompt("Player 1:");
    players[1] = prompt("Player 2:");
    getPlayer();
}

function getPlayer() {
    document.getElementById("title").innerText = `${players[turn]}'s turn`;
}

function pick(pickedDiv) {
    pickedDiv.innerText = markers[turn];
    if(turn) {
        turn = 0;
    } else {
        turn = 1;
    }
    pickedDiv.attributes[0].nodeValue = "";
    getPlayer();
}

