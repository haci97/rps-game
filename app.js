const rock = document.getElementById("r");
const rockPlayer = document.getElementById("rock__player");
const paper = document.getElementById("p");
const paperPlayer = document.getElementById("paper__player");
const scissors = document.getElementById("s");
const scissorsPlayer = document.getElementById("scissors__player");
const rockCpu = document.getElementById("rock__cpu");
const paperCpu = document.getElementById("paper__cpu");
const scissorsCpu = document.getElementById("scissors__cpu");
const roundCounter = document.getElementById("round__count");
const playerScore = document.getElementById("playerscore");
const cpuScore = document.getElementById("cpuscore");
const alertWindow = document.getElementById("alert__window");
const alertText =  document.getElementById("alert__window-text");
let playerChoice;
let cpuChoice;
let roundUp = 0;
let playerScoreUp = 0;
let cpuScoreUp = 0;
let gameResult;
let alertResult;


// created event listener for each choice
// player choice hand will be displayed based on choice
// each choice has all functions
rock.addEventListener("click",function(){
    playerChoice = "rock";
    rockPlayer.style.display="block";
    paperPlayer.style.display="none";
    scissorsPlayer.style.display="none";
    getRandomCpuChoice();
    getResult()
});
paper.addEventListener("click",function(){
    playerChoice = "paper";
    paperPlayer.style.display="block";
    rockPlayer.style.display="none";
    scissorsPlayer.style.display="none";
    getRandomCpuChoice()
    getResult()
});
scissors.addEventListener("click",function(){
    playerChoice = "scissors";
    scissorsPlayer.style.display="block";
    rockPlayer.style.display="none";
    paperPlayer.style.display="none";
    getRandomCpuChoice()
    getResult()
});


function getRandomCpuChoice() {
    // function to get random number for the hand choice
    const cpuRandomChoice = Math.floor(Math.random() * 3);

    console.log(playerChoice)

    // switch to convert number to hand choice and display hands based on cpu choice
    switch (cpuRandomChoice) {
        case 0:
            cpuChoice = "rock"
            rockCpu.style.display = "inherit";
            paperCpu.style.display = "none";
            scissorsCpu.style.display = "none";
            break;
        case 1:
            cpuChoice = "paper"
            rockCpu.style.display = "none";
            paperCpu.style.display = "inherit";
            scissorsCpu.style.display = "none";
            break;
        case 2:
            cpuChoice = "scissors"
            rockCpu.style.display = "none";
            paperCpu.style.display = "none";
            scissorsCpu.style.display = "inherit";
            break;
    }

};

// function to determine result for player and cpu choices
// and display according window alert
function getResult() {
if (playerChoice === "rock" && cpuChoice === "rock") {
        gameResult = "draw";
        alertResult = "alertDraw";
    } 
    if (playerChoice === "rock" && cpuChoice === "paper") {
        gameResult = "lose";
        alertResult = "alertLose";
    } 
    if (playerChoice === "rock" && cpuChoice === "scissors") {
        gameResult = "win";
        alertResult = "alertWin";
    } 

    if (playerChoice === "paper" && cpuChoice === "paper") {
        gameResult = "draw";
        alertResult = "alertDraw";
    } 
    if (playerChoice === "paper" && cpuChoice == "scissors") {
        gameResult = "lose";
        alertResult = "alertLose";
    } 
    if (playerChoice === "paper" && cpuChoice === "rock") {
        gameResult = "win";
        alertResult = "alertWin";
    } 

    if (playerChoice === "scissors" && cpuChoice === "scissors") {
        gameResult = "draw";
        alertResult = "alertDraw";
    } 
    if (playerChoice === "scissors" && cpuChoice === "rock") {
        gameResult = "lose";
        alertResult = "alertLose";
    } 
    if (playerChoice === "scissors" && cpuChoice === "paper") {
        gameResult = "win";
        alertResult = "alertWin";
    } 


    //switch for the round counter
    switch (playerChoice) {
        case "rock":
            roundUp += 1;
            console.log(roundUp)
            break;
        case "paper":
            roundUp += 1;
            console.log(roundUp)
            break;
        case "scissors":
            roundUp += 1;
            console.log(roundUp)
            break;
    }


    // switch for score awards based on result
    switch (gameResult) {
        case "win":
            playerScoreUp += 1;
            break;
        case "lose":
            cpuScoreUp += 1;
        case "draw":
            playerScoreUp += 0
            cpuScoreUp += 0
    }

    playerScore.textContent = playerScoreUp
    cpuScore.textContent = cpuScoreUp
    roundCounter.textContent = roundUp


    // switch for alert window based on result
    switch (alertResult) {
        case "alertWin":
            alertText.textContent = "You win!";
            alertText.className = "win__text";
        break;
        case "alertLose":
            alertText.textContent = "You lose!";
            alertText.className = "lose__text";
        break;
        case "alertDraw":
            alertText.textContent = "It's a draw!";
            alertText.className = "draw__text";
        break;
    };

        // delay for alert window
        setTimeout(function() {
            alertWindow.style.display = "inherit";
        }, 150);
        setTimeout(function() {
            alertWindow.style.display = "none";
        }, 500);
};
