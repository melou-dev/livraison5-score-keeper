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

scorePlayer1.addEventListener( `click`, () => alert(`ok Mélou`));

//function loadDefaultScore() {
//     bestScore = winnerScore.append(document.createTextNode( +input.value ));
//}

//function SetPlayer1Score() {
 //   document.createTextNode();
//}

//function SetPlayer2Score() {}

//function ResetAllScore() {}

//function StopGametoHighterScore() {}



