<template>
  <Gundam />
</template>

<script>
import Gundam from './components/Gundam.vue'

export default {
  name: "app",
  components: {
    Gundam
  }
}
</script>

<style>
body{
  font-family:sans-serif;
}

#app {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
