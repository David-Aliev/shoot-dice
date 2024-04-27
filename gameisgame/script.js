'use strict';


//Elements selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScores = document.querySelectorAll('.current-score');



// Game initial conditions

let totalScore,currentScore,activePlayer,isPlaying;

const initGame = function() {

    totalScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
    
    
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.remove('player--active');
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    diceElement.classList.add('hidden');
}

initGame();



function SwitchActivePlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}




score0Element.textContent = 0;
score1Element.textContent = 0;


// Roll the dice
btnRoll.addEventListener('click',function(){
    // 1. generate num
    if(isPlaying) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        // 2.display num on the dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice${diceNumber}.png`;
        // 3.if num === 1,switch to the next player,else add num to the current score
        if(diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
        } else {    
            SwitchActivePlayer();
            // if(player0.classList.contains('player--active')) {
            //     player0.classList.remove('player--active');
            //     player1.classList.add('player--active');
            // } else if(player1.classList.contains('player--active')){
            //     player1.classList.remove('player--active');
            //     player0.classList.add('player--active');
            // }
            
        } 
    }

})

btnHold.addEventListener('click',function(){
    if(isPlaying) {
        //1.add current score to active palyer total score
        totalScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
       
    
        if(totalScore[activePlayer] >= 100) {уккуаамсч 
            isPlaying = false;
            document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
            document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
            diceElement.classList.add('hidden');
        } else {
            //2. if total score of active play >= 100,active player won,else switch player
            SwitchActivePlayer();
        }
    }    

})

btnNew.addEventListener('click',initGame);


