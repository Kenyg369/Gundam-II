
let slideIndex = 0
let slides = document.querySelectorAll(".slides__slide");

let rollForward = document.querySelector(".slides-control--next")
let rollBackward = document.querySelector(".slides-control--prev")

const absoluteIndex = (index,arr) => index < 0 ? arr.length + index: index

rollForward.addEventListener("click", () => {
  // console.log("click forward")
  // console.log(slides)
  slideIndex = ++slideIndex % slides.length;
  // console.log(slideIndex)
  // console.log(absoluteIndex(slideIndex,slides))
  // console.log(absoluteIndex(slideIndex-1,slides))
  slides[absoluteIndex(slideIndex,slides)].classList.toggle("slides__slide--show");
  slides[absoluteIndex(slideIndex-1,slides)].classList.toggle("slides__slide--show");
})

rollBackward.addEventListener("click", () => {
  slideIndex = --slideIndex % slides.length;
  slides[absoluteIndex(slideIndex,slides)].classList.toggle("slides__slide--show");
  slides[absoluteIndex(slideIndex+1,slides)].classList.toggle("slides__slide--show");
})


let rollingDots = document.querySelectorAll(".dot")
let imagesList = document.querySelectorAll(".images-list__item")

const ImageSelect = index =>{
  slides.forEach(slide => slide.classList.remove("slides__slide--show"));
  slides[1].classList.toggle("slides__slide--show");
}

rollingDots[1].addEventListener("click", () => {
  slides.forEach(slide => slide.classList.remove("slides__slide--show"));
  slides[1].classList.toggle("slides__slide--show");
})

imagesList[1].addEventListener("click", () => {
  slides.forEach(slide => slide.classList.remove("slides__slide--show"));
  slides[1].classList.toggle("slides__slide--show");
})