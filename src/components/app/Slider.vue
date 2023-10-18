<script>
import axios from "axios";
import { BASE_URL } from '@/main.js'

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: [
    'items'
  ],
  setup() {
    const onSwiper = () => { };
    const onSlideChange = () => { };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    axios.get(`${BASE_URL}/api/imagesSlider/list`)
      .then(response => {
        this.images = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });

  }
};
</script>

<template>
  <Swiper 
    :modules="modules" 
    :slides-per-view="1" 
    @swiper="onSwiper" 
    @slideChange="onSlideChange" 
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" 
    effect="fade">
    <SwiperSlide v-for="image in images" :key="image.id">
      <a :href="image.url" target="_blank">
        <img :src="image.urlImage" class="w-full h-96 sm:h-[800px] md:h-[900px] object-cover" />
      </a>
    </SwiperSlide>
  </Swiper>
</template>


