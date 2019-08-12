console.log("Up and running");
var cards = [{
	rank: "queen",
	suit: "hearts",	
	cardImage:"images/queen-of-hearts.png"
},{
	rank: "queen",
	suit: "diamonds",	
	cardImage:"images/queen-of-diamonds.png"
},{
	rank: "king",
	suit: "hearts",	
	cardImage:"images/king-of-hearts.png"

},{
	rank: "king",
	suit: "diamonds",	
	cardImage:"images/king-of-diamonds.png"
}];

var cardsInPlay = [];


function flipCard() {
var cardId = this.getAttribute("data-id");
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log("User flipped " + cards[cardId].suit);
console.log("User flipped " + cards[cardId].cardImage);
this.setAttribute("src" , cards[cardId].cardImage);
setTimeout(checkFlip, 100);
}





function checkFlip() {
	if (cardsInPlay.length == 2){
		console.log("Cards played : 2");
 		checkForMatch();
 	}else{ return;}
}

function checkForMatch() {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	clearBoard();

} 
	else { alert("No match. Try again!"); 
	clearBoard();
}
}


function clearBoard(){
	cardsInPlay.pop();
	cardsInPlay.pop();
	createBoard();	}

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
    	cardElement.setAttribute("src" , "images/back.png");
    	cardElement.setAttribute("data-id" , i);
    	cardElement.addEventListener("click" , flipCard);
    	console.log(cardElement);    	
    	document.getElementById("game-board").appendChild(cardElement);
    	
    }
}

createBoard();

