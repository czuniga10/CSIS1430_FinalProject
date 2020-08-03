var players = [];
var scoreboard = [0,0,0];
var totals = [0,0];
var winNums = [7,56,73,84,146,273,292,448];
var markers = ["X","O"];
var turn = 0;
var gameOver = false;
var winCode;

var topChildren;
var midChildren;
var botChildren;

function setUpGame() {
    totals = [0,0];
    gameOver = false;
    winCode = 0;

    getPlayer();
    hideButtons();

    var counter = 1;
    var innerDivs = "";
    for(var i = 1; i <= 3; i++) {
        innerDivs += `<div id="row-${i}">`; 
        for(var j = 1; j <= 3; j++) {
            innerDivs += `<div onclick="playGame(this,${counter});"></div>`
            counter *= 2;
        }
        innerDivs += `</div>`;
    }
    document.getElementById("game-board").innerHTML = innerDivs;

    topChildren = document.getElementById('row-1').children;
    midChildren = document.getElementById('row-2').children;
    botChildren = document.getElementById('row-3').children;
}

function getNames() {
    var valid1 = false;
    var valid2 = false;
    while(!valid1) {
        players[0] = prompt("Player 1:");
        if(!players[0].length) {
            alert("Name must exist");
        } else {
            valid1 = !valid1;
        }
    }
    while(!valid2) {
        players[1] = prompt("Player 2:");
        if(!players[1].length) {
            alert("Name must exist");
        } else if(players[1].toLowerCase().localeCompare(players[0].toLowerCase()) == 0) {
            alert(`Name can not be the same as ${players[0]}'s`);
        } else {
            valid2 = !valid2;
        }
    }
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
            nextPlayer();
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
            winCode = winNums[i];
            showScore();
            showWinner();
            return true;
        }
    }
    if (totals.reduce((a,b) => a + b) == 511) {
        scoreboard[2] += 1;
        showTie();
        showScore();
        gameOver = true;
    } else {
        gameOver = false;
    }
    return false;
}

function showScore() {
    showButtons();
    document.getElementById("scoreboard").innerHTML = `<div class="sb-player">${players[0]}: ${scoreboard[0]}</div><div class="sb-player">${players[1]}: ${scoreboard[1]}</div><div class="sb-player">Ties: ${scoreboard[2]}</div>`
}

function showButtons() {
    document.getElementById("scoreboard-wrapper").style.display = "block";
    document.getElementById("play-again").style.display = "block";
    document.getElementById("switch-users").style.display = "block";
    document.getElementById("game").style.opacity = 4;
}

function hideButtons() {
    document.getElementById("play-again").style.display = "none";
    document.getElementById("switch-users").style.display = "none";
}

function switchStarter() {
    nextPlayer();
    setUpGame();
}

function nextPlayer() {
    if(turn) {
        turn = 0;
    } else {
        turn = 1;
    }
}

function showWinner() {
    switch(winCode) {
        case 7:
            topRowWin();
            break;
        case 56:
            midRowWin();
            break;
        case 448:
            botRowWin();
            break;
        case 73:
            leftColWin();
            break;
        case 146:
            midColWin();
            break;
        case 292:
            rightColWin();
            break;
        case 273:
            leftToRightWin();
            break;
        case 84:
            rightToLeftWin();
            break;
        default:
            break;
    }
    
}

function topRowWin() {
    topChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
    topChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    topChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
}

function midRowWin() {
    midChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
}

function botRowWin() {
    botChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
}

function leftColWin() {
    topChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
}

function midColWin() {
    topChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
}

function rightColWin() {
    topChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
}

function leftToRightWin() {
    topChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
}

function rightToLeftWin() {
    topChildren[2].style.cssText = "background-color : #66FCF1; color : black;";
    midChildren[1].style.cssText = "background-color : #66FCF1; color : black;";
    botChildren[0].style.cssText = "background-color : #66FCF1; color : black;";
}

function showTie() {
    for(var i = 0; i < 3; i++) {
        topChildren[i].style.cssText = "background-color : #be0000; color : black;";
        midChildren[i].style.cssText = "background-color : #be0000; color : black;";
        botChildren[i].style.cssText = "background-color : #be0000; color : black;";
    }
}