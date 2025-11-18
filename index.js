

let message=""
let cards = []


let sum =0


let isAlive= false
let hasBlackjack = false



let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")


let player ={

    name : "AYUSH",
    chips: 100
}

playerEl.textContent = player.name + "  :$" + player.chips

function getrandom(){
   

    let randomNumber = Math.floor(Math.random()*13 )+ 1


    if(randomNumber > 10){
        return 10;

    }
    else if(randomNumber===1){

        return 11;
    }


      else{
    return randomNumber ;}



 
}



function startGame(){


    

    
let firstcard= getrandom()
let secondcard= getrandom()
 cards = [firstcard,secondcard]
 sum = cards[0] + cards[1]

 isAlive= true 


    renderGame()
}





function renderGame(){

sumEl.textContent= "Sum:" + sum
cardsEl.textContent = "cards:" 


for(let i=0;i<cards.length;i++){


   cardsEl.textContent += cards[i]  + "   "


}


if(sum<21){
   
      messageEl.textContent= "Do you want another chance ?"
      player.chips -= 1
      playerEl.textContent = player.name + "  :$" + player.chips

}

else if(sum===21){

     messageEl.textContent= "WOW, You have won Blackjack! ♠️♥️🎉"
     hasBlackjack= true
     player.chips += 10
     playerEl.textContent = player.name + "  :$" + player.chips


}
else {


     messageEl.textContent= "Sad, You are out of the game"
     isAlive= false
     player.chips -= 5
     playerEl.textContent = player.name + "  :$" + player.chips

}


}


function newCard(){



    if(isAlive=== true && hasBlackjack === false){

let card = getrandom()
  player.chips -= 2
  playerEl.textContent = player.name + "  :$" + player.chips

  


cards.push(card)
    sum += card   
    
    
    renderGame()

    }





}



