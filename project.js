let userScore =0
let compScore =0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
   const randIdx =  Math.floor(Math.random() *3)
   return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
     // Generate Computer choice;

    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
         drawGame();
    } else {
         let userWin = true; 
          if (userChoice === "rock") {
             userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                 userWin = compChoice === "scissor" ? false : true;
           }else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }



}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});
