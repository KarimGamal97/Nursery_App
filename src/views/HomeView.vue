<template>
  <div class="home">
    <nav-bar></nav-bar>
    <carousel-slider></carousel-slider>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CarouselSlider from "@/components/CarouselSlider.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    CarouselSlider,
    FooterComp,
  },
};
</script>
