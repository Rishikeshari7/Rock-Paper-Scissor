let myScore=0;
let compScore=0;

const availableChoices= document.querySelectorAll(".choice");

const computerChoice=()=>{
   const indx= Math.floor(Math.random()*3);
    const array=["rock","paper","scissor"];
    // console.log(array[indx]);
    return array[indx];
}

const printWinner=(checkAns,myChoice,compChoice)=>{
    if(checkAns===true){
        console.log(`You Won ! Your ${myChoice} beats ${compChoice}`);
    }
    else{
        console.log(`You Lost! ${compChoice} beats your ${myChoice}`);
    }
}

const checkWinner=(myChoice,compChoice)=>{
    if(myChoice===compChoice){
        console.log("Its a draw");
    }
    else {
        let checkAns=true;
        if(compChoice==="rock"){
            checkAns= myChoice==="paper"?true:false;
        }
        else if(compChoice==="paper"){
            checkAns= myChoice==="scissor"?true:false;
        }
        else{
            checkAns=myChoice==="rock"?true:false;
        }
        printWinner(checkAns,myChoice,compChoice);
    }
}

availableChoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log("you click",choice);
        const myChoice=choice.getAttribute("id");
        console.log("you choose",myChoice);
       const compChoice= computerChoice();
       console.log("copm choose",compChoice);
       checkWinner(myChoice,compChoice);
    });
});