
const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissor = document.querySelector(".scissor");
const pUserChoice = document.querySelector(".user-choice");
const pCompChoice = document.querySelector(".comp-choice");
const pScore = document.querySelector(".score");
const h1Winner = document.querySelector(".winner")
let userScore = 0;
let compScore = 0;

function compChoice(){
    const randNum = Math.floor(Math.random() * 3 + 1);
    if(randNum == 1){
        return "rock"
    }else if( randNum == 2){
        return "paper";
    }else{
        return"scissor";
    }   
}

function whoWIns(user,comp){
    if (user == "rock"){
        if(comp == "paper"){
            return "comp"
        }else if(comp == "scissor"){
            return "user"
        }else{
            return "tie"
        }
    }else if (user == "paper"){
        if(comp == "scissor"){
            return "comp"
        }else if(comp == "rock"){
            return "user"
        }else{
            return "tie"
        }
    }else{
        if(comp == "rock"){
            return "comp"
        }else if (comp == "paper"){
            return "user"
        }else{
            return "tie"
        }
    }
}

function showScore(tag){
    tag.textContent = `${userScore} - ${compScore}`;
}

function setScore(winner){
    if(winner == "user"){
        userScore += 1;
    }else if(winner == "comp"){
        compScore += 1;
    }
}

function showPlayersChoice(refTag, string){
    refTag.textContent = string;
}

function showWInner(refTag, winner){
    if(compScore == 5 || userScore == 5){
        if(compScore > userScore){
            alert("YOU LOSE!!!");
            refTag.textContent = "You Lost the game :<";
            
        }else{
            alert("YOU WIN!!!")
            refTag.textContent = "You Won the Game!!!";
        }
        compScore = 0;
        userScore = 0;
    }else{
        if(winner == "user"){
            refTag.textContent = "You Won this Round!";
        }else if(winner == "comp"){
            refTag.textContent = "Computer Won this Round!";
        }else{
            refTag.textContent ="IT's A TIE!!!"
        }
    }


}



buttonRock.addEventListener("click", ()=>{
  let eChoice = compChoice();
  let winner = whoWIns("rock", eChoice);
  setScore(winner);
  console.log(compScore, userScore); 
  showPlayersChoice(pUserChoice, "rock");
  showPlayersChoice(pCompChoice, eChoice);
  showScore(pScore);
  showWInner(h1Winner, winner);
})

buttonPaper.addEventListener("click", ()=>{
    let eChoice = compChoice();
    let winner = whoWIns("paper", eChoice);
    setScore(winner);
    console.log(compScore, userScore); 
    showPlayersChoice(pUserChoice, "paper");
    showPlayersChoice(pCompChoice, eChoice);
    showScore(pScore);
    showWInner(h1Winner, winner);
})

buttonScissor.addEventListener("click",()=>{
    let eChoice = compChoice();
    let winner = whoWIns("scissor", eChoice);
    setScore(winner);
    console.log(compScore, userScore); 
    showPlayersChoice(pUserChoice, "scissor");
    showPlayersChoice(pCompChoice, eChoice);
    showScore(pScore);
    showWInner(h1Winner, winner);
})





