<template>
  <div class="main_container">
    <VueSlickCarousel v-bind="settings">
      <div>
        <img src="../../assets/images/cosmetics.jpeg" alt="" />
      </div>
      <div>
        <img src="../../assets/images/handBag1.jpeg" alt="" />
      </div>
      <div>
        <img src="../../assets/images/ladyHandBag.jpeg" alt="" />
      </div>
      <div>
        <img src="../../assets/images/perfume.jpeg" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
      },
      products: [],
    }
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: 40rem;
  display: block;
}

@media screen and (max-width: 799px) {
  img {
    object-fit: cover;
  }

  .main_container {
    margin-top: -1rem;
  }
}
</style>
