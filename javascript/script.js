`use strict`;

const scorePlayer1 = document.querySelectorAll(`span`)[0];
const scorePlayer2 = document.querySelectorAll(`span`)[1];
const winnerScore = document.querySelectorAll(`span`)[2];
const input = document.querySelector(`input`);
const buttonPlayer1 = document.querySelectorAll(`button`)[0];
const buttonPlayer2 = document.querySelectorAll(`button`)[1];
const reset = document.querySelectorAll(`button`)[2];

let score1 = 0;
let score2 = 0;
let bestScore = 5; //by default

//===============================PLAYER 1 ======================================================
function CreatePlayer1Score() {
    scorePlayer1.append(document.createTextNode(score1));
}

function modifyPlayer1Score() {
    scorePlayer1.innerText = score1;
}

function givePointToPlayer1() {
    score1++;
    }

function globalScore1() {
    CreatePlayer1Score();
    modifyPlayer1Score();
    givePointToPlayer1();
}

buttonPlayer1.addEventListener(`click`, globalScore1);


//===============================PLAYER 2 ======================================================

function CreatePlayer2Score() {
    scorePlayer2.append(document.createTextNode(score2));
}

function modifyPlayer2Score() {
    scorePlayer2.innerText = score2;
}

function givePointToPlayer2() {
    score2++;
    }

function globalScore2() {
    CreatePlayer2Score();
    modifyPlayer2Score();
    givePointToPlayer2();
}

buttonPlayer2.addEventListener(`click`, globalScore2);


//===============================Reset ======================================================


function ResetScore1() {
    score1 = 0;
    CreatePlayer1Score();
    modifyPlayer1Score();
}

function ResetScore2() {
    score2 = 0;
    CreatePlayer2Score();
    modifyPlayer2Score();
}

function ResetAllScore() {
    ResetScore1();
    ResetScore2();
}

reset.addEventListener(`click`, ResetAllScore);



//function StopGametoHighterScore() {}

//scorePlayer1.addEventListener( `click`, () => alert(`ok Mélou`));

//
//function createTextNodeintoSpan() {
    //  document.createTextNode( +input.value );
//}

//function loadDefaultScore() {
    //bestScore = winnerScore.append(document.createTextNode( +input.value ));
//}

