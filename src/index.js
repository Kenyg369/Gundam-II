
let slideIndex = 0
let slides = document.querySelectorAll(".slides__slide");

let rollForward = document.querySelector(".slides-control--next")
let rollBackward = document.querySelector(".slides-control--prev")

const absoluteIndex = (index,arr) => index < 0 ? arr.length + index: index

rollForward.addEventListener("click", () => {
  console.log("click forward")
  console.log(slides)
  slideIndex = ++slideIndex % slides.length;
  console.log(slideIndex)
  console.log(absoluteIndex(slideIndex,slides))
  console.log(absoluteIndex(slideIndex-1,slides))
  slides[absoluteIndex(slideIndex,slides)].classList.toggle("slides__slide--show");
  slides[absoluteIndex(slideIndex-1,slides)].classList.toggle("slides__slide--show");
})

rollBackward.addEventListener("click", () => {
  console.log("click backward")
  console.log(slides)
  slideIndex = --slideIndex % slides.length;
  console.log(slideIndex)
  console.log(absoluteIndex(slideIndex,slides))
  console.log(absoluteIndex(slideIndex+1,slides))
  slides[absoluteIndex(slideIndex,slides)].classList.toggle("slides__slide--show");
  slides[absoluteIndex(slideIndex+1,slides)].classList.toggle("slides__slide--show");
})


let dot1 = document.querySelector(".dots__dot1")
let dot2 = document.querySelector(".dots__dot2")
let dot3 = document.querySelector(".dots__dot3")
let dot4 = document.querySelector(".dots__dot4")

dot2.addEventListener("click", () => {
  slides.forEach(slide => slide.classList.remove("slides__slide--show"));
  slides[1].classList.toggle("slides__slide--show");
})