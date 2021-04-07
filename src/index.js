
let previousIndex = 0;
let currentIndex = 0;

let imagesList = document.querySelectorAll(".images-list__item");
let showcase = document.querySelectorAll(".slides__slide");
let rollingDots = document.querySelectorAll(".dot");

updateSlides(currentIndex);

// Main-function

function updateSlides(idx){
  previousIndex = currentIndex
  currentIndex = idx
  updateImageList()
  updateShowcase()
  updateDots()

}
// Sub-function 
function updateImageList(){
  for (let [idx, image] of imagesList.entries()) {
    image.addEventListener("click",()=>{
      imagesList[idx].classList.toggle("images-list__item--hightlight");
      imagesList[previousIndex].classList.toggle("images-list__item--hightlight");

      updateSlides(idx);
    })
  }
}

function updateShowcase(){
  for (let [idx, showcase] of showcase.entries()) {
    showcase.addEventListener("click",()=>{
      showcase[idx].classList.toggle("slides__slide--show");
      showcase[previousIndex].classList.toggle("slides__slide--show");
      
      updateSlides(idx);
    })
  }
}

function updateDots(){
  for (let [idx, dot] of rollingDots.entries()) {
    dot.addEventListener("click",()=>{
      dot[idx].classList.toggle("dot--active");
      dot[previousIndex].classList.toggle("dot--active");

      updateSlides(idx);
    })
  }
}


 // Roll Forward & Roll Backward

let rollForward = document.querySelector(".slides-control--next")
let rollBackward = document.querySelector(".slides-control--prev")

const absoluteIndex = (index,arr) => index < 0 ? arr.length + index: index

rollForward.addEventListener("click", () => {
  slideIndex = ++slideIndex % slides.length;
  showcase[absoluteIndex(slideIndex,slides)].classList.toggle("slides__slide--show");
  showcase[absoluteIndex(slideIndex-1,slides)].classList.toggle("slides__slide--show");
})

rollBackward.addEventListener("click", () => {
  slideIndex = --slideIndex % slides.length;
  showcase[absoluteIndex(slideIndex,slides)].classList.toggle("slides__slide--show");
  showcase[absoluteIndex(slideIndex+1,slides)].classList.toggle("slides__slide--show");
})
