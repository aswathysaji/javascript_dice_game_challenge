//dice 1

var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var diceImages = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomDiceImage = diceImages[randomNumber1-1];
console.log(randomDiceImage);
document.querySelector(".img1").setAttribute("src",randomDiceImage);

//dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var randomDiceImage2 = diceImages[randomNumber2-1];
console.log(randomDiceImage2);
document.querySelector(".img2").setAttribute("src",randomDiceImage2);

//document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //(Easy method)

//if player 1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
//if draw
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!!";
}
//if player 2 wins
else{
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}