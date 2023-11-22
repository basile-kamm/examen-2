// Burger Menu
const hamburger = document.querySelector(".hamburger");
const background = document.querySelector(".burger-background");

hamburger.addEventListener("click", show);
background.addEventListener("click", show);

function show() {
  hamburger.classList.toggle("open");
  document.querySelector(".burger-menu").classList.toggle("active");
  background.classList.toggle("active");
}
