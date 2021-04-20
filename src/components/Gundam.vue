<template>
  <div>
    <h2>Gundam Gallery</h2>
    <p>Click on the images below:</p>
  </div>
  
  <!-- Imgaine List -->
  <ul class="images-list">
    <li
      v-for="(image, idx) in images" :key="image.name"
      class="images-list__item"
      :class="{ 'images-list__item--hightlight': currentIndex === idx }"
      @click="currentIndex = idx"
    >
      <img class="images-list__item__image" :src="image.src" :alt="image.name">
    </li>
  </ul>

    <!-- Slide Showcase -->
    <div class="slides-container fade">
      <div class="slides">
        <div class="slides__slide fade">
          <div class="slides__slide__number">{{`${currentIndex + 1} / ${images.length}`}}</div>
          <img class="slides__slide__img" :src="images[currentIndex].src">
          <div class="slides__slide__text">{{ images[currentIndex].name }}</div>
        </div>
      </div>
      
      <!-- Next and previous buttons -->
      <button class="slides-control slides-control--prev" @click="onBackward">&#10094;</button>
      <button class="slides-control slides-control--next" @click="onForward">&#10095;</button>
      
    </div>

    <!-- Rolling Button -->
    <ul class ="dots-container">
      <li
        v-for="(image, idx) in images"
        :key="image.name"
        class="dot"
        :class="{ 'dot--active': currentIndex === idx }"
        @click="currentIndex = idx">
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "/Barbatos.jpg", name: "Barbatos" },
        { src: "/ZGMF-X20A Strike Freedom.jpg", name: "StrikeFreedom" },
        { src: "/GNT-0000 00 Qan[T].jpg", name: "00QanT" },
        { src: "/RX-93-2 HI-NU .jpg", name: "HI-NU" },
        { src: "/RX-0 Unicorn Gundam 01 Unicorn .jpg", name: "Unicorn" },
        { src: "/RX-0 Unicorn Gundam 02 Banshee.jpg", name: "Banshee" },
        { src: "/RX-0 Unicorn Gundam 03-Phenex.jpg", name: "Phenex" },
        { src: "/Gundam-X-1 Pirate.jpeg", name: "Pirate" },
        { src: "/Tengen Toppa.jpg", name: "Gurren" },
        { src: "/X-10A Freedom.jpg", name: "Freedom" },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    onForward() {
      const limitedIndex = (this.currentIndex + 1) % this.images.length
      this.currentIndex = limitedIndex;
    },
    onBackward() {
      const absoluteIndex = (index,arr) => index < 0 ? arr.length + index: index
      const limitedIndex = (this.currentIndex -1) % this.images.length
      const absLimitedIndex = absoluteIndex(limitedIndex,this.images)
      this.currentIndex = absLimitedIndex;
    }
  }
}
</script>

<style>
.images-list {
  height: 130px;
  display: flex;
  list-style: none;
}

.images-list > .images-list__item {
  height: 100%;
}

.images-list__item > .images-list__item__image {
  height: 100%;
}

.images-list__item--hightlight{
  border: 2px solid rgb(27, 39, 216);
}

.slides-container {
  width: 1000px;
  height: 700px;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slides {
  border: solid 1px red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slides__slide {
  display: block;
  height: 100%;
  position: relative;
}

.slides__slide__number {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.slides__slide__img {
  height: 100%;
}

.slides__slide__text {
  color: #f0042c;
  font-size: 25px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}


.slides-control {
  cursor: pointer;
  position: absolute;
  width: 30px;
  padding: 16px;
  color:rgb(143, 21, 42);
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
  background-color: rgba(61, 15, 15, 0.288);
}

.slides-control.slides-control--prev {
  left: 0;
}

.slides-control.slides-control--next {
  right: 0;
}

.slides-control:hover {
  background-color: rgba(97, 82, 231, 0.288);
}

.dots-container{
  align-items: center;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 3px;
  background-color: rgb(126, 99, 99);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot--active, .dot:hover {
  background-color: #2cd651;
}
</style>
