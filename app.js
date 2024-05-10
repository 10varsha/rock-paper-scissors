const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const resetButton = document.getElementById('reset');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
let userChoice
let computerChoice
let result
let playerScore = 0;
let computerScore = 0;
let timeoutId; 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    if(userChoice === 'rock'){
        Image.src = 'images/rock.png'
    }
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    timeoutId = setTimeout(getResult, 500);
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possiblechoices.length
    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML =  computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw !"
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "YOU WIN !";
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "YOU LOSE !";
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "YOU LOSE !";
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "YOU WIN !";
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "YOU WIN !";
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "YOU LOSE !";
    }

    switch(result){
        case "YOU WIN !":
            playerScore++;
            userScoreDisplay.innerHTML = playerScore;
            break;
        case "YOU LOSE !":
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
            break;
    }

    resultDisplay.innerHTML = result;
}


resetButton.addEventListener('click',(a) => {
    clearTimeout(timeoutId);
    userChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    result = '';
    computerChoice = '';
    userChoice = '';

});
