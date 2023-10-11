<script>
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
    const onSwiper = () => {};
    const onSlideChange = () => {};

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
};
</script>

<template>
  <div class="">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      effect="fade"
    >
      <SwiperSlide v-for="item in items">
        <img :src="item.src" class="w-full h-96 sm:h-[800px] md:h-[900px] object-cover" />  
      </SwiperSlide>
    </Swiper>
  </div>
</template>


