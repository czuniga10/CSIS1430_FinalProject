var players = [];
var scoreboard = [0,0,0];
var totals = [0,0];
var winNums = [7,56,73,84,146,273,292,448];
var markers = ["X","O"];
var turn = 0;
var gameOver = false;

function setUpGame() {
    totals = [0,0];
    gameOver = false;

    getPlayer();
    hideButtons();

    var counter = 1;
    var innerDivs = "";
    for(var i = 1; i <= 3; i++) {
        innerDivs += `<div class="row-${i}">`; 
        for(var j = 1; j <= 3; j++) {
            innerDivs += `<div onclick="playGame(this,${counter});"></div>`
            counter *= 2;
        }
        innerDivs += `</div>`;
    }
    document.getElementById("game-board").innerHTML = innerDivs;
}

function getNames() {
    players[0] = prompt("Player 1:");
    players[1] = prompt("Player 2:");
    setUpGame();
}

function getPlayer() {
    document.getElementById("title").innerText = `${players[turn]}'s turn`;
}

function playGame(pickedDiv, val) {
    if(!gameOver){
        pickedDiv.innerText = markers[turn];

        totals[turn] += val;

        if (isWin()) {
            document.getElementById("title").innerText = `${players[turn]} Wins!`;
        } else if(gameOver) {
            document.getElementById("title").innerText = "It's a tie";
        } else { 
            if(turn) {
                turn = 0;
            } else {
                turn = 1;
            }
            pickedDiv.attributes[0].nodeValue = "";
            getPlayer();
        }
    }
}

function isWin() {
    for(var i = 0; i < winNums.length; i++) {
        if((totals[turn] & winNums[i]) == winNums[i]) {
            gameOver = true;
            scoreboard[turn] += 1;
            showScore();
            return true;
        }
    }
    if (totals.reduce((a,b) => a + b) == 511) {
        scoreboard[2] += 1;
        showScore();
        gameOver = true;
    } else {
        gameOver = false;
    }

    return false;
}

function showScore() {
    showButtons();
    document.getElementById("scoreboard").innerText = `${players[0]}=${scoreboard[0]}\n${players[1]}=${scoreboard[1]}\nTies=${scoreboard[2]}`
}

function showButtons() {
    document.getElementById("play-again").style.display = "block";
    document.getElementById("switch-users").style.display = "block";

}

function hideButtons() {
    document.getElementById("play-again").style.display = "none";
    document.getElementById("switch-users").style.display = "none";
}

function switchStarter() {
    if(turn) {
        turn = 0;
    } else {
        turn = 1;
    }
    setUpGame();
}