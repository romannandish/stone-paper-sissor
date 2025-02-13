let choices=document.querySelectorAll(".choice");
let  result=document.querySelector("#msg");
let background=document.querySelector(".output");
let display=document.querySelector("h3");
let yourScore=document.querySelector("#yourscore");
let compScore=document.querySelector("#compscore");
let btn=document.querySelector(".button");
const getCompChoice=()=>
{
    let choice=["rock","paper","scissor"];
    let ranIndx=Math.floor(Math.random(choice)*3);
    return choice[ranIndx];
}
let value=false;
 let x=0;
 let y=0;
const showWinner=(value)=>
{
    if(value===true)
    {
        result.innerText="YOU WIN";
        background.style.backgroundColor="red";
        yourScore.innerText=++x;
    }
    else{
        result.innerText="YOU LOSE";
        background.style.backgroundColor="green";
        compScore.innerText=++y;
    }
}

const playGame=(userChoice)=>{
    let compChoice=getCompChoice();
    let x=true;

    if(userChoice===compChoice)
    {
        result.innerText="Draw game";
        background.style.backgroundColor="blue";
        display.innerText=`Your choice is ${userChoice} and comp choice is ${compChoice}`;
    }
    else if(userChoice==="rock")
    {
      value=(compChoice==="paper")? false :true;
      display.innerText=`Your choice is ${userChoice} and comp choice is ${compChoice}`;
      showWinner(value);

    }
    else if(userChoice==="paper")
        {
          value=(compChoice==="rock")? true :false;
          display.innerText=`Your choice is ${userChoice} and comp choice is ${compChoice}`;
          showWinner(value);
        }
        else if(userChoice==="scissor")
            {
              value=(compChoice==="paper")? true :false;
              display.innerText=`Your choice is ${userChoice} and comp choice is ${compChoice}`;
              showWinner(value);
            }

}





choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
       
    })
});


btn.addEventListener("click", ()=>
{
    yourScore.innerText="0";
    compScore.innerText="0";
    display.innerText="Select Your Choice";
    result.innerText="Play your move";
    background.style.color="white";
    background.style.backgroundColor="#081b31";
})
