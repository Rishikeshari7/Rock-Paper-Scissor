let myScore=0;
let compScore=0;

const availableChoices= document.querySelectorAll(".choice");

availableChoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log("you click",choice);
        const myChoice=choice.getAttribute("id");
        console.log("you choose",myChoice);
        compChoice();
    });
})