const images = [
  { src: "/pics/Barbatos.jpg", name: "Barbatos" },
  { src: "/pics/ZGMF-X20A Strike Freedom.jpg", name: "StrikeFreedom" },
  { src: "/pics/GNT-0000 00 Qan[T].jpg", name: "00QanT" },
  { src: "/pics/RX-93-2 HI-NU .jpg", name: "HI-NU" },
  { src: "/pics/RX-0 Unicorn Gundam 01 Unicorn .jpg", name: "Unicorn" },
  { src: "/pics/RX-0 Unicorn Gundam 02 Banshee.jpg", name: "Banshee" },
  { src: "/pics/RX-0 Unicorn Gundam 03-Phenex.jpg", name: "Phenex" },
  { src: "/pics/Gundam-X-1 Pirate.jpeg", name: "Pirate" },
  { src: "/pics/Tengen Toppa.jpg", name: "Gurren" },
  { src: "/pics/X-10A Freedom.jpg", name: "Freedom" },
]


function renderInfo(name, description, container) {
  const info = document.createElement("div");
  info.innerHTML = `
    <h2>${name}</h2>
    <p>${description}</p>
  `
  container.append(info)

  return info
}
/**
 * function to render a image list,
 * then attach the list to the give container
 * @param {*} imagesList 
 * @param HTMLElement container 
 */
function renderThumbnail(images, container) {
  const nailList = document.createElement("UL");
  nailList.classList.add("images-list")

  let nailItem
  let nailImg
  images.forEach((image, idx)=>{
    // create thumbnails
    nailItem = document.createElement("LI");
    nailItem.classList.add("images-list__item")
    nailItem.addEventListener("click",()=>{
      updateSlides(idx);
    })

    nailImg = document.createElement("IMG");
    nailImg.classList.add("images-list__item__image")
    nailImg.src = image.src 
    nailImg.alt = image.name
    
    nailItem.append(nailImg)
    nailList.append(nailItem)
  })

  container.append(nailList)

  return nailList;
};

/**
 * function to render a dots list
 * then attach the list to the give container
 * @param {*} imagesList 
 * @param HTMLElement container 
 */
 function renderDots(images, container) {
  const dotsList = document.createElement("UL");
  dotsList.classList.add("dots-container")

  let dot
  images.forEach((_, idx)=>{
    // create dots
    dot = document.createElement("LI");
    dot.classList.add("dot")
    dot.addEventListener("click",()=>{
      updateSlides(idx);
    })
    
    dotsList.append(dot)
  })

  container.append(dotsList)

  return dotsList
};

function renderShowcase(container) {
  // todo: create showcase container
  const showcase = document.createElement("div")
  showcase.classList.add("slides-container","fade")
  // todo: create sldes container
  const slides = document.createElement("div")
  slides.classList.add("slides")
  // todo: create slide container
  const slide = document.createElement("div")
  slide.classList.add("slides__slide", "fade")
  // todo: create slide clildren
  const slideNumber = document.createElement("div")
  slideNumber.classList.add("slides__slide__number")
  const slideImg = document.createElement("img")
  slideImg.classList.add("slides__slide__img")
  const slideText = document.createElement("div")
  slideText.classList.add("slides__slide__text")
  // todo: create buttons
  const prevButton = document.createElement("button")
  prevButton.classList.add("slides-control", "slides-control--prev")
  prevButton.textContent="<"
  const nextButton = document.createElement("button")
  nextButton.classList.add("slides-control", "slides-control--next")
  nextButton.textContent=">"
  // todo: glue all elements
  slide.append(slideNumber,slideImg,slideText)  
  slides.append(slide)
  showcase.append(slides,prevButton,nextButton)  
  container.append(showcase)


  // Roll Forward & Roll Backward

  let rollForward = document.querySelector(".slides-control--next")
  let rollBackward = document.querySelector(".slides-control--prev")

  const absoluteIndex = (index,arr) => index < 0 ? arr.length + index: index

  rollForward.addEventListener("click", () => {
    const limitedIndex = (currentIndex + 1) % imagesList.length
    updateSlides(limitedIndex)
  })

  rollBackward.addEventListener("click", () => {
    const limitedIndex = (currentIndex -1) % imagesList.length
    const absLimitedIndex = absoluteIndex(limitedIndex,imagesList)
    updateSlides(absLimitedIndex)
  })

  return showcase
}

let thumbnailList
let showcase
let dotsList
let previousIndex = 0;
let currentIndex = 0;

function renderApp(container) {
  renderInfo("Gundam Gallery", "Click on the images below:", container)
  thumbnailList = renderThumbnail(images, container)
  showcase = renderShowcase(container)
  dotsList = renderDots(images, container)
}

renderApp(document.querySelector("#app"))

let imagesList = thumbnailList.querySelectorAll(".images-list__item");
let rollingDots = dotsList.querySelectorAll(".dot");
updateSlides(currentIndex, true);

// Main-function

function updateSlides(idx, init = false){
  currentIndex = idx

  imagesList[currentIndex].classList.add("images-list__item--hightlight");
  rollingDots[currentIndex].classList.add("dot--active");
  
  const showcaseImg =showcase.querySelector(".slides__slide__img")
  showcaseImg.src = images[currentIndex].src
  
  if(!init) {
    imagesList[previousIndex].classList.remove("images-list__item--hightlight");
    rollingDots[previousIndex].classList.remove("dot--active");
  }

  previousIndex = currentIndex
}
