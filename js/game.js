//prepare the game to start  the game
const prepareTheGame=function(){
let intro= document.querySelector(".intro ");
let introB= document.querySelector(".intro button");
let matchB=document.querySelector(".match button");
let match=document.querySelector(".match ");

introB.addEventListener("click",function(){
    intro.classList.add("fadeOut");
    match.classList.remove("fadeOut");
});
}
prepareTheGame();
// strting the game 
let RockButton=document.getElementById("rock");
let paperButton=document.getElementById("paper");
let scissorsButton=document.getElementById("scissors");
var handPlayer=document.querySelector(".hand-player");
var computerPlayer=document.querySelector(".hand-computer"),
    hands=document.querySelectorAll(".hands"),
    winner=document.querySelector(".winner"),
    playerScore=document.querySelector(".player-score p"),
    computerScore=document.querySelector(".computer-score p");
    console.log(playerScore);
    playerS=0,
    computerS=0;
    console.log(winner);
var computerOption=["rock","paper","scissors"];


// rock option 

    RockButton.addEventListener("click",function(){
        
    let computerRandom=Math.floor(Math.random()*3);
        handPlayer.src="/media/rock.png";
        computerPlayer.src=`/media/${computerOption[computerRandom]}.png`;
      // console.log(computerRandom);
       //console.log(computerOption[computerRandom]);
        if (computerOption[computerRandom]==="rock"){
            winner.textContent="it's Tie ";
        }
        else if(computerOption[computerRandom]=="paper"){
            winner.textContent="computer wins";
            computerS ++;
            computerScore.textContent=computerS;
        }
        else{
            winner.textContent="player wins";
            playerS ++;
            playerScore.textContent= playerS;
        }
        

    })
// peper option 


paperButton.addEventListener("click",function(){
        
        let computerRandom=Math.floor(Math.random()*3);
            handPlayer.src="/media/paper.png";
            computerPlayer.src=`/media/${computerOption[computerRandom]}.png`;
        
            if (computerOption[computerRandom]==="paper"){
                winner.textContent="it's Tie";
            }
            else if(computerOption[computerRandom]=="scissors"){
                winner.textContent="computer wins";
                computerS ++;
                computerScore.textContent=computerS;
            }
            else{
                winner.textContent="player wins";
                playerS ++;
                playerScore.textContent= playerS;
            }
            
            
    
        })
// scissors option
scissorsButton.addEventListener("click",function(){
        
            let computerRandom=Math.floor(Math.random()*3);
                handPlayer.src="/media/scissors.png";
                computerPlayer.src=`/media/${computerOption[computerRandom]}.png`;
                if (computerOption[computerRandom]==="scissors"){
                    winner.textContent="it's Tie";
                }
                else if(computerOption[computerRandom]=="rock"){
                    winner.textContent="computer wins";
                    computerS ++;
                    computerScore.textContent=computerS;
                }
                else{
                    winner.textContent="player wins";
                    playerS ++;
                    playerScore.textContent= playerS;
                }
                
                
        
            })


            