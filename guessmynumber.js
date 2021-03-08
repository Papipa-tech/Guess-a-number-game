'use strict';

// PROJECT #1: Guess my number!

// Izbaciva random broj od 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //Kad nema unosa
    if (!guess) {
        document.querySelector('.message').textContent = 
        '⛔ No Number!';

      // Kad igrac pobjedi  
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 
        '🎊 Correct Number!';

        // Minja boju bodya kad pobjedi
        document.querySelector('body').style.backgroundColor = '#60b347';

        // Minja sirinu boxa kad pobjedi
        document.querySelector('.number').style.width = '400rem';

        // Minja velicinu fonta kad pobjedi
        document.querySelector('.number').style.fontSize = '32px';


        // Minja '?' kad se pogodi random broj
        document.querySelector('.number').textContent = `🎊🎉 Congratulations (${secretNumber}) is correct number! 🎉🎊` ;

        // Highscore
        if(score > highscore) {
            highscore = score;

            document.querySelector('.highscore').textContent = highscore;
        }


        // Kad je unos prevelik
    } else if (guess > secretNumber) {
        
        if(score > 1) {
            document.querySelector('.message').textContent = 
            '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 
            '🎮🧨 Game Over!';
            document.querySelector('.score').textContent = 0;


             // Minja boju bodya kad izgubi
        document.querySelector('body').style.backgroundColor = 'red';

            // Minja sirinu boxa kad izgubi
        document.querySelector('.number').style.width = '400rem';

            // Ako dode do nule onda minja '?' u Game Over!
            document.querySelector('.number').textContent = '🧨🎮 Game Over! 🎮🧨';

            // Minja boju teksta u crveno
            document.querySelector('.number').style.color = 'red';
        }
       
        // Kad je unos premal
    } else if (guess < secretNumber) {

        if(score > 1) {
            document.querySelector('.message').textContent = 
            '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 
            '🎮🧨 Game Over';
            document.querySelector('.score').textContent = 0;

             // Minja boju bodya kad izgubi
            document.querySelector('body').style.backgroundColor = 'red';

            // Minja sirinu boxa kad pobjedi
            document.querySelector('.number').style.width = '400rem';

             // Ako dode do nule onda minja '?' u Game Over!
             document.querySelector('.number').textContent = '🧨🎮 Game Over! 🎮🧨';

             // Minja boju teksta u crveno
            document.querySelector('.number').style.color = 'red';
        }
       
    }
});



document.querySelector('.again').addEventListener('click', function() {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    score = 5;

    // Da vrati broj pokusaja na pocetak (5)
    document.querySelector('.score').textContent = 5;

    // Da vrati pocetni background color
    document.querySelector('body').style.backgroundColor = '#222';

     // Da vrati '?' na pocetak
     document.querySelector('.number').textContent = '?';

     // Da vrati font '?'
     document.querySelector('.number').style.fontSize = '6rem';

     // Da vrati boju '?'
     document.querySelector('.number').style.color = '#333';
 

    // Da vrati sirinu poruke na pocetak
    document.querySelector('.number').style.width = '15rem';

    // Da vrati poruku start guessing
    document.querySelector('.message').textContent = 'Start guessing...';

    // Da ponisti sve unose
    document.querySelector('.guess').value = '';



    
});