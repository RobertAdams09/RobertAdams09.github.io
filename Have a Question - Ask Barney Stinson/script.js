let userName = document.getElementById("name");
let userQuestion = document.getElementById("question");
let button = document.getElementById("button");
const main = document.getElementById("main");
const result = document.getElementById("result");
const link = document.getElementById("link");

const positiveOne = document.querySelector(".positive-one");
const positiveTwo = document.querySelector(".positive-two");
const focusOne = document.querySelector(".focus-one");
const focusTwo = document.querySelector(".focus-two");
const negativeOne = document.querySelector(".negative-one");
const negativeTwo = document.querySelector(".negative-two");

// Prevents Barney from answering if the user hasn't put enough letters in input fields 
button.addEventListener("click", function() {
    if (userName.value.length < 1 || userQuestion.value.length < 1){
        alert("Please fill all the input boxes");
    } else {
        main.style.display = "none";
        result.style.display = "block";
        link.style.display = "block";
    }
});

// Gets a random number 
let randomNumber = Math.floor(Math.random() * 16);
let randomAnswer = "";

// Assigns random number to a given answer of Barney 
if (randomNumber === 0) {
    randomAnswer = "Totally!";
    positiveOne.style.display = "block";
} else if (randomNumber === 1) {
    randomAnswer = "Absolutely!";
    positiveOne.style.display = "block";
} else if (randomNumber === 2) {
    randomAnswer = "Awesome!";
    positiveOne.style.display = "block";
} else if (randomNumber === 3) {
    randomAnswer = "It's going to be legendary!";
    positiveTwo.style.display = "block";
} else if (randomNumber === 4) {
    randomAnswer = "It's gonna be legend-... wait for it… and I hope you're not lactose intolerant because the second half of that word is DAIRY!";
    positiveTwo.style.display = "block";
} else if (randomNumber === 5) {
    randomAnswer = "Suit up!";
    positiveTwo.style.display = "block";
} else if (randomNumber === 6) {
    randomAnswer = "A lie is just a great story that someone ruined with the truth.";
    focusOne.style.display = "block";
} else if (randomNumber === 7) {
    randomAnswer = "Always in decline, never hitting bottom.";
    focusOne.style.display = "block";
} else if (randomNumber === 8) {
    randomAnswer = "Whatever you do in this life, it's not legendary unless your friends are there to see it.";
    focusOne.style.display = "block";
} else if (randomNumber === 9) {
    randomAnswer = "Sometimes we search for one thing but discover another.";
    focusTwo.style.display = "block";
} else if (randomNumber === 10) {
    randomAnswer = "Maybe it's destiny?";
    focusTwo.style.display = "block";
} else if (randomNumber === 11) {
    randomAnswer = "There are only a few truly great people on this planet and you are one of them.";
    focusTwo.style.display = "block";
} else if (randomNumber === 12) {
    randomAnswer = "You totally sabotage yourself!";
    negativeOne.style.display = "block";
} else if (randomNumber === 13) {
    randomAnswer = "It's gonna suck!";
    negativeOne.style.display = "block";
} else if (randomNumber === 14) {
    randomAnswer = "People like being lied to. They just don't like finding out they've been lied to.";
    negativeTwo.style.display = "block";
} else if (randomNumber === 15) {
    randomAnswer = "It's time to let go of the fantasies. It's time to grow up!";
    negativeTwo.style.display = "block";
} else {
    randomAnswer = "Somehow you fucked this up";
}

// Displays Barney's answer to the user
document.getElementById("answer").innerHTML = randomAnswer;
