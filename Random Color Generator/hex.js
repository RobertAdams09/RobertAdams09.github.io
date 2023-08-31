let hex_colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = document.querySelector(".color");
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex_colors[getRandomElement()]
    };
    color.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomElement() {
    return Math.floor(Math.random() * hex_colors.length)
};