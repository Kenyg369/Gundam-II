
let previousIndex = 0;
let currentIndex = 0;

let imagesList = document.querySelectorAll(".images-list__item");
let showcase = document.querySelectorAll(".slides__slide");
let rollingDots = document.querySelectorAll(".dot");

for (let [idx, image] of imagesList.entries()) {
  image.addEventListener("click",()=>{
    updateSlides(idx);
  })
}

for (let [idx, dot] of rollingDots.entries()) {
  dot.addEventListener("click",()=>{
    updateSlides(idx);
  })
}

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
      imagesList[currentIndex].classList.toggle("images-list__item--hightlight");
      imagesList[previousIndex].classList.toggle("images-list__item--hightlight");
}


function updateShowcase(){
      showcase[currentIndex].classList.toggle("slides__slide--show");
      showcase[previousIndex].classList.toggle("slides__slide--show");
}

function updateDots(){
      rollingDots[currentIndex].classList.toggle("dot--active");
      rollingDots[previousIndex].classList.toggle("dot--active");
}


 // Roll Forward & Roll Backward

let rollForward = document.querySelector(".slides-control--next")
let rollBackward = document.querySelector(".slides-control--prev")

const absoluteIndex = (index,arr) => index < 0 ? arr.length + index: index

rollForward.addEventListener("click", () => {
  const limitedIndex = (currentIndex + 1) % imagesList.length
  console.log(limitedIndex) 
  updateSlides(limitedIndex)
})

rollBackward.addEventListener("click", () => {
  const limitedIndex = (currentIndex -1) % imagesList.length
  const absLimitedIndex = absoluteIndex(limitedIndex,imagesList)
  console.log(absLimitedIndex)
  updateSlides(absLimitedIndex)
})
