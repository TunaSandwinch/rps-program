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



for (let i = 0; i < 5 ;){
    i++
    let Compchoice = chooseSide();
    console.log(Compchoice);
    
}


