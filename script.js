let choice = ["rock","paper","scissor"]
let userrock = document.getElementById("user1")
let userfinal = document.getElementById("final")
let usercom = document.getElementById("user2")
let color = document.getElementById("navbar")
let back = document.querySelector("body")



function game1(){

    let userChoice = "scissor"
    userrock.innerHTML= "Your Choice : "+ userChoice

    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    usercom.innerHTML= "Computer Choice : " + computerChoice
     
    if(userChoice==="rock"&&computerChoice==="scissor" || 
        userChoice==="scissor"&&computerChoice==="paper" ||
        userChoice=="paper"&&computerChoice=="rock"
     ){
      userfinal.innerHTML= "Result : Won"
      userfinal.style.color="green"
      back.style.backgroundColor ="rgb(42, 219, 65)"
      


     }
     else if(userChoice==="rock"&&computerChoice==="paper" || 
        userChoice==="scissor"&&computerChoice==="rock" ||
        userChoice=="paper"&&computerChoice=="scissor"
     ){
      userfinal.innerHTML= "Result : Lost"
      userfinal.style.color="red"
      back.style.backgroundColor ="red"

     }
     else{
      userfinal.innerHTML= "Result : Draw"
      userfinal.style.color="black"
      back.style.backgroundColor ="#d2a41a"


      
     }
     
}


function game2(){

   let userChoice = "rock"
   userrock.innerHTML= "Your Choice : "+ userChoice

   
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];
   usercom.innerHTML= "Computer Choice: " + computerChoice
    
   
   
   if(userChoice==="rock"&&computerChoice==="scissor" || 
       userChoice==="scissor"&&computerChoice==="paper" ||
       userChoice=="paper"&&computerChoice=="rock"
    ){
     userfinal.innerHTML= "Result : Won"
     userfinal.style.color="green"
     back.style.backgroundColor ="rgb(42, 219, 65)"


    }
    else if(userChoice==="rock"&&computerChoice==="paper" || 
       userChoice==="scissor"&&computerChoice==="rock" ||
       userChoice=="paper"&&computerChoice=="scissor"
    ){
     userfinal.innerHTML= "Result : Lost"
     userfinal.style.color="red"
     back.style.backgroundColor ="red"

  
     
    }
    else{
     userfinal.innerHTML= "Result : Draw"
     userfinal.style.color="black"
     back.style.backgroundColor ="#d2a41a"



     
    }
    
}


function game3(){

   let userChoice = "paper"
   userrock.innerHTML= "Your Choice : "+ userChoice

   
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];
   usercom.innerHTML= "Computer Choice  : " + computerChoice
    
   
   
   if(userChoice==="rock"&&computerChoice==="scissor" || 
       userChoice==="scissor"&&computerChoice==="paper" ||
       userChoice=="paper"&&computerChoice=="rock"
    ){
     userfinal.innerHTML= "Result : Won"
     userfinal.style.color="green"
     back.style.backgroundColor ="rgb(42, 219, 65)"
     


    }
    else if(userChoice==="rock"&&computerChoice==="paper" || 
       userChoice==="scissor"&&computerChoice==="rock" ||
       userChoice=="paper"&&computerChoice=="scissor"
    ){
     userfinal.innerHTML= "Result : Lost"
     userfinal.style.color="red"
     back.style.backgroundColor ="red"

  
     
    }
    else{
     userfinal.innerHTML= "Result : Draw"
     userfinal.style.color="black"
     back.style.backgroundColor ="#d2a41a"
    }
    
}


