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
  <div class="swiper-container">
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
      <SwiperSlide>
        <img src="../../../public/images/Slider/1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/9.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/10.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/11.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/12.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/13.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/images/Slider/14.jpg" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-wrapper {
  height: 800px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 768px) {
  .swiper-wrapper {
    height: 60vh;
  }
}
</style>
