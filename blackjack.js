let Player ={
    name: "Mujahid:",
    chips: 149,
    
}
let cards=[]
let hasBlackJack = false;
let IsAlive = false;
let message= "";
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("Player-el")

playerEl.textContent = Player.name +"$"+ Player.chips

function randomCard() {
    let random = Math.floor(Math.random()*13) + 1
    if(random===1){
        return 11
    }else if(random >10){
        return 10
    }else{
        return random
    }
     
    
}

function startGame() {
    let IsAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards=[firstCard, " " ,secondCard]
    sum = firstCard+secondCard;
    renderGame()
}

function renderGame() {
cardsEl.textContent= "Cards: " 
for (let a = 0; a < cards.length; a++) {
    cardsEl.textContent += cards[a] +" " 
    
}
sumEl.textContent="sum: "+ sum    
if (sum<=20) {
    message= "do you want to draw another card"
    IsAlive = true
    
}else if(sum===21){
   message = "you've the Blackjack"
    hasBlackJack  = true
}else{
    message = "you're out of the game"
    IsAlive= false
}

console.log(IsAlive);
messageEl.textContent=message

}

function newCard() {
    if (IsAlive === true && hasBlackJack  === false ) {
    
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
        
    }
    
}


