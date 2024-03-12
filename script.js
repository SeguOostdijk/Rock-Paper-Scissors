const choices=document.querySelectorAll('.choices'); 
const container=document.querySelector('.Container');    
const computerselection=document.querySelector('.Computer-choice'); 
const score=document.querySelector('.score');     
const Playerchoice=document.querySelector('.Player-choice');
let playerscore=0,Computerscore=0;
choices.forEach(Element=>{
    Element.addEventListener('click',()=>{
        let Playerselection=Element.dataset.choice;    
        Play(Playerselection,playerscore,Computerscore);
    })
})
function Play(Playerselection){
    const result=document.querySelector('.Result');
    let Computeroptions=["Rock","Paper","Scissors"];
    let Computerchoice=Computeroptions[Math.floor(Math.random()*3)];
    if(Playerselection===Computerchoice)
      result.textContent="Tie!";
    else{
        switch(Computerchoice){
            case "Rock":
              Playerselection=="Paper"?result.textContent="You win!":result.textContent="You lose!";
            break;
           case "Paper":
              Playerselection=="Scissors"?result.textContent="You win!":result.textContent="You lose!";
            break;
           default:
            Playerselection=="Rock"?result.textContent="You win!":result.textContent="You lose!";
        }
    }
    displayresults(result,Playerselection,Computerchoice);
}
function displayresults(result,Playerselection,Computerchoice){
    const finalwinner=document.createElement('div');
    const playagainbtn=document.createElement('button');
    playagainbtn.classList.add('playagain');
    finalwinner.style.marginTop='20px';
    finalwinner.style.fontSize='50px';
    finalwinner.style.color='rgb(245, 205, 205)'
    if(result.textContent=="You win!"){
        result.style.color='rgb(54, 247, 54)';
        playerscore++;
    }
    else if(result.textContent=="Tie!")
        result.style.color='orange';
    else{
        result.style.color='rgb(247, 27, 27)';
        Computerscore++;
    }
    if(playerscore==5||Computerscore==5){
        choices.forEach(button=>{
          button.disabled=true;
        })
        score.textContent="";
        Playerchoice.textContent="";
        computerselection.textContent="";
        finalwinner.textContent=playerscore==5?`The winner is Player!Final score:${playerscore}-${Computerscore}`:`The winner is Computer!Final score:${playerscore}-${Computerscore}`;
        container.appendChild(finalwinner); 
        playagainbtn.textContent='Play again!'; 
        container.appendChild(playagainbtn);
        playagainbtn.addEventListener('click',()=>{
            choices.forEach(button=>{
             button.disabled=false;
            })
            container.removeChild(playagainbtn);
            finalwinner.textContent="";
            result.textContent="";
            playerscore=0;
            Computerscore=0;
       });
    }
    else{
      score.textContent=`${playerscore}-${Computerscore}`;
      Playerchoice.textContent=`Player:${Playerselection}`;
      computerselection.textContent=`Computer:${Computerchoice}`;  
    }
}
