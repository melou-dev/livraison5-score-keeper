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

function GivePointToPlayer1() {
    score1++;
    }

    //===============================PLAYER 1 ======================================================

//function modifyPlayer1Score() {}

//function SetPlayer2Score() {}

//function ResetAllScore() {}

//function StopGametoHighterScore() {}

//scorePlayer1.addEventListener( `click`, () => alert(`ok Mélou`));

//
//function createTextNodeintoSpan() {
    //  document.createTextNode( +input.value );
//}

//function loadDefaultScore() {
    //bestScore = winnerScore.append(document.createTextNode( +input.value ));
//}

