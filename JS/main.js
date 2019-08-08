console.log("Up and running");
var cards = ["queen","queen","king","king"];

var cardsInPlay = [];


function flipCard(cardId) {

console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);


}

flipCard(0);
flipCard(1);

if (cardsInPlay.length === 2){
	console.log("Cards played : 2");
 	checkForMatch();}


function checkForMatch() {
 	
 	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");} 
	else { console.log("No match. Try again!"); }
}


