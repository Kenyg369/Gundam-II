
let slideIndex = 0
let slides = document.querySelectorAll("mySlides");

slides[slideIndex].style.display = "block";

let rollForward = document.getElementsByClassName("next")
let rollBackward = document.getElementsByClassName("prev")

rollForward.addEventListener("click",{
  slideIndex = ++slideIndex % slides.length;
  slides[slideIndex-2].classList.toggle = "mySlides";
  slides[slideIndex-1].classList.toggle = "myShownSlides";
})

rollBackward.addEventListener("click",{
  slideIndex = --slideIndex % slides.length;
  slides[slideIndex].classList.toggle = "mySlides";
  slides[slideIndex-1].classList.toggle = "myShownSlides";
})

