
let slideIndex = 0
let slides = document.querySelectorAll(".slides__slide");

let rollForward = document.querySelector(".next")
let rollBackward = document.querySelector(".prev")

rollForward.addEventListener("click", () => {
  console.log("click forward")
  slideIndex = ++slideIndex % slides.length;
  slides[slideIndex-2].classList.toggle("slides__slide--show");
  slides[slideIndex-1].classList.toggle("slides__slide--show");
})

rollBackward.addEventListener("click", () => {
  slideIndex = --slideIndex % slides.length;
  slides[slideIndex].classList.toggle("slides__slide--show");
  slides[slideIndex-1].classList.toggle("slides__slide--show");
})
