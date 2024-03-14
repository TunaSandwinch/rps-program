

// function playgame(numOfRuounds){
//     let Cscore = 0;
//     let Pscore = 0;
//     for (let i = 0; i < numOfRuounds;){
//         i++
//         let playerChoice = prompt("Choose! : rock, paper, or scisssor");
//         let Compchoice = chooseSide();
//         console.log(Compchoice);
//         console.log(playerChoice)
    
//         if(playerChoice.toLocaleLowerCase() == "rock"){
//             if(Compchoice == "scissor"){
//                Pscore+=1;
//                console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You WIN!-----> Score: ${Cscore} / ${Pscore}`);
//             }else if(Compchoice == "paper"){
//                 Cscore+=1;
//                 console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You Lose! -----> Score: ${Cscore} / ${Pscore}`);
//             }else{
//                 console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} Its A Tie! -----> Score: ${Cscore} / ${Pscore}`);
//             }
    
//         }else if(playerChoice.toLowerCase()== "scissor"){
//             if(Compchoice == "paper"){
//                 Pscore+=1;
//                 console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You WIN! -----> Score: ${Cscore} / ${Pscore}`);
//              }else if(Compchoice == "rock"){
//                  Cscore+=1;
//                  console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You Lose! -----> Score: ${Cscore} / ${Pscore}`);
//              }else{
//                 console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} Its A Tie! -----> Score: ${Cscore} / ${Pscore}`);
//              }
//         }else if (playerChoice.toLowerCase() == "paper"){
//             if(Compchoice == "rock"){
//                 Pscore+=1;
//                 console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You WIN! -----> Score: ${Cscore} / ${Pscore}`);
//              }else if(Compchoice == "scissor"){
//                  Cscore+=1;
//                  console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You Lose! -----> Score: ${Cscore} / ${Pscore}`);
//              }else{
//                 console.log(`Computer: ${Compchoice} , Player Choice: ${playerChoice} Its A Tie! -----> Score: ${Cscore} / ${Pscore}`);
//              }  
//         }
        
//     }

//     if (Cscore > Pscore ){
//         console.log("COMPUTER WINS!");
//     }else if(Pscore > Cscore){
//         console.log("YOU WIN!");
//     }else{
//         console.log("It's A tie!");
//     }
// }

// playgame(5)

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissor = document.querySelector(".scissor");
const pUserChoice = document.querySelector(".user-choice");
const pCompChoice = document.querySelector(".comp-choice");
const pScore = document.querySelector(".score");
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



buttonRock.addEventListener("click", ()=>{
  let winner =  whoWIns("rock", compChoice());
  setScore(winner)
  console.log(compScore, userScore); 
  showScore(pScore);
  
})

buttonPaper.addEventListener("click", ()=>{
    let winner = whoWIns("paper", compChoice());
    setScore(winner);
    console.log(compScore, userScore); 
     showScore(pScore);
})

buttonScissor.addEventListener("click",()=>{
    let winner = whoWIns("scissor", compChoice());
    setScore(winner);
    console.log(compScore, userScore);  
    showScore(pScore);
})





