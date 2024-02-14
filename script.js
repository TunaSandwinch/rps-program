function chooseSide(){
    const randNum = Math.floor(Math.random() * 3 + 1);
    let side ;

    if(randNum == 1){
        side = "rock";
    }else if( randNum == 2){
        side = "paper";
    }else{
        side = "scissor";
    }
    
    return side
}

let Cscore = 0;
let Pscore = 0;
for (let i = 0; i < 5 ;){
    i++
    let playerChoice = prompt("Choose! : rock, paper, or scisssor");
    let Compchoice = chooseSide();
    console.log(Compchoice);
    console.log(playerChoice)

    if(playerChoice.toLocaleLowerCase() == "rock"){
        console.log("code pass to 1st if");
        if(Compchoice == "scissor"){
           Pscore+=1;
           alert(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You WIN! Score: ${Cscore} / ${Pscore}`);
        }else if(Compchoice == "paper"){
            Cscore+=1;
            alert(`Computer: ${Compchoice} , Player Choice: ${playerChoice} You Lose! Score: ${Cscore} / ${Pscore}`);
        }else{
            alert(`Computer: ${Compchoice} , Player Choice: ${playerChoice} Its A Tie! Score: ${Cscore} / ${Pscore}`);
        }

    } 
    
}


