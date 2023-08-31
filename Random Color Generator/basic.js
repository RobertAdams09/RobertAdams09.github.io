let color = document.querySelector(".color");
let button = document.getElementById("btn");
let container = document.querySelector(".main-container h1");

let basic_colors = ["red", "orange", "blue", "yellow", "green", "black", "white", "pink", "purple"];

button.addEventListener("click", function() {
    const random_number = getRandomNumber(); 
    color.innerHTML = basic_colors[random_number];
    document.body.style.backgroundColor = basic_colors[random_number];

    if (basic_colors[random_number] === "black") {
        container.style.backgroundColor = "#FFF";
        container.style.color = "#000"
    } else {
        container.style.backgroundColor = "#000";
        container.style.color = "#FFF";
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * 9);
};



