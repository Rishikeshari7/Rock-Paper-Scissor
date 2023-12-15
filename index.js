let myScore=0;
let compScore=0;
const myScorePara=document.querySelector(".my-score");
const compScorePara=document.querySelector(".comp-score");
const availableChoices= document.querySelectorAll(".choice");
const msgPrint=document.querySelector(".msg")
const computerChoice=()=>{
   const indx= Math.floor(Math.random()*3);
    const array=["rock","paper","scissor"];
    // console.log(array[indx]);
    return array[indx];
}

const printWinner=(checkAns,myChoice,compChoice)=>{
    if(checkAns===true){
        myScore++;
        myScorePara.innerHTML=myScore;
        // console.log(`You Won ! Your ${myChoice} beats ${compChoice}`);
        msgPrint.innerHTML=`You Won ! Your <i>${myChoice.toUpperCase()}</i> beats <i>${compChoice.toUpperCase()}</i>`;
        msgPrint.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        // console.log(`You Lost! ${compChoice} beats your ${myChoice}`);
        msgPrint.innerHTML=`You Lost! <i>${compChoice.toUpperCase()}</i> beats your <i>${myChoice.toUpperCase()}</i>`;
        msgPrint.style.backgroundColor=" rgb(228, 21, 21)";
    }
}

const checkWinner=(myChoice,compChoice)=>{
    if(myChoice===compChoice){
        console.log("Its a draw");
        msgPrint.innerHTML=`Its Draw!! You both choose <i>${myChoice.toUpperCase()}</i>`
        msgPrint.style.backgroundColor="#081b31"
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