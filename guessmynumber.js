'use strict';

// PROJECT #1: Guess my number!

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 5;

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
        }
       
    }
});
