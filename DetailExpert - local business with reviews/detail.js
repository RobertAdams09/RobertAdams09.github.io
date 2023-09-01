const reviews = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    name: "Winston Debry",
    car: "Nissan Skyline R34 GTT",
    description: "I painted my car recently and I needed to protect it, the guys at DetailExpert did a splendid job by polishing the paint and putting the ceramic coating on!",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "Billy Summers",
    car: "Mercedes-Benz CLK 500",
    description: "DetailExpert guys are amazing, they turned my old and ruined leather seats into new ones which look great. If you need some help with taking care of your leather interior they are the best!",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    name: "Andrew Stakes",
    car: "Bentley Continental",
    description: "I got my car wrapped at DetailExpert, the whole procedure went so smooth that I was surprised when they called me the next day that the car is ready, amazing job!",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "Jenny Bell",
    car: "Toyota Corolla",
    description: "DetailExpert stands for professionalism, they cleaned my car so that I could not recognize it.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "Adam Butler",
    car: "Honda Civiv EP3 Type-R",
    description: "I visit DetailExpert every once in a while becasue they know how to take care of my car, every time I come back to collect the car I can not believe my own eyes, the transformation is insane.",
  },
];

// Navigation Showning on Click - Burger 
const navToggle = document.querySelector(".nav-toggle");
const navToggleContent = document.querySelector(".nav-toggle-content");

const showNav = (item) => {
  item.addEventListener("click", function() {
    navToggleContent.style.display = navToggleContent.style.display == "none" ? "flex": "none";
  });
}; 
showNav(navToggle);

// Changing Photos every 3 seconds 
let myIndex = 0;
change();

function change() {
  let i;
  let slides = document.querySelectorAll(".slides");
  let slidesTwo = document.querySelectorAll(".slidesTwo");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    slidesTwo[i].style.display = "none"; 
  }
  myIndex++;
  if (myIndex > slides.length) {myIndex = 1}    
  slides[myIndex-1].style.display = "block";  
  slidesTwo[myIndex-1].style.display = "block";
  setTimeout(change, 3000);
};

// Items for the Reviews Section 
const image = document.querySelector(".author-image");
const author = document.querySelector(".author");
const car = document.querySelector(".author-car");
const description = document.querySelector(".author-description");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

// Set starting item for Reviews Section
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// Function that displays a given person according to currentItem 
function showPerson(person) {
  const element = reviews[person];
  image.src = element.image;
  author.textContent = element.name;
  car.textContent = element.car;
  description.textContent = element.description;
}

// Show next person
nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  } 
  showPerson(currentItem);
});

// Show previous person
previousBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  } 
  showPerson(currentItem);
});