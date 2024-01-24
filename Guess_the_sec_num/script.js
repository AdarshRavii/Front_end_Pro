let secreteNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


document.querySelector(".check").addEventListener("click", function(){
const guess=Number(document.querySelector(".guess").value);
console.log(typeof guess, guess);

//when there is no input
if(!guess)
{
    document.querySelector(".message").textContent="Please enter a number";
}
//when player wins 
else if(guess===secreteNumber)
{
    document.querySelector(".message").textContent="Yaaay!! Correct Number"; 
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").textContent=secreteNumber;

    if(score>highscore)
    {
        highscore=score;
        document.querySelector(".highscore").textContent=highscore;
    }
    
}
//when guess is too high
else if(guess>secreteNumber)
{
    if(score>1){
    document.querySelector(".message").textContent="too high"; 
    score--;
    document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector(".message").textContent="you lost the game"; 
        
        document.querySelector(".score").textContent=0;
        document.querySelector("body").style.backgroundColor="red";
    }
}
// when guess is too low 
else if(guess<secreteNumber)
{
    if(score>1)
    {
    document.querySelector(".message").textContent="too low";
    score--;
    document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector(".message").textContent="you lost the game"; 
        
        document.querySelector(".score").textContent=0;
        document.querySelector("body").style.backgroundColor="red";
    }
}
})

// again buttton to reset except for the highscore
document.querySelector(".again").addEventListener("click",function (){

    secreteNumber = Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector(".message").textContent="Start guessing..."; 
    document.querySelector(".score").textContent=score;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=" "

})