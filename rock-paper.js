let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#83494C";
}

const generatecompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    let rndmidx = Math.floor(Math.random() * 3);
    return options[rndmidx];
}

const showWinner = (userwin , compchoice , userchoice) => {
    if(userwin) {
        console.log("You win !!!");
        msg.innerText = `Congratulations! You win ! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose ....");
        msg.innerText = `You lost... ${compchoice} beats  ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user score = " , userchoice);
    const compchoice = generatecompChoice();
    console.log("comp choice = " , compchoice);
    if(userchoice === compchoice) {
        drawgame();
    } else {

        let userwin = true;

        if(userchoice === 'rock') {
            if(compchoice === 'paper') {
                userwin = false;
            } else {
                userwin = true;
            }
        }

        if(userchoice === 'paper') {
            if(compchoice === 'rock') {
                userwin = true;
            } else {
                userwin = false;
            }
        }
        
        if(userchoice === 'scissor') {
            if(compchoice === 'rock') {
                userwin = false; // Correct, Rock beats Scissor
                // console.log(userwin);
            } else {
                userwin = true; // Correct, Scissor beats Paper
            }
        }        
        showWinner(userwin , userchoice , compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});