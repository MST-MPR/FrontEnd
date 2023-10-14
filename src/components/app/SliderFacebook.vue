<script>
import axios from "axios";
import { BASE_URL } from '@/main.js'
// import Swiper core and required modules
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
    const onSwiper = (swiper) => {
      //console.log(swiper);
    };
    const onSlideChange = () => {
      //console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
  data() {
    return {
      opinions: [],
    };
  },
  mounted() {
    axios.get(`${BASE_URL}/api/opinionFacebook/list`)
      .then(response => {
        this.opinions = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });

  }
};
</script>

<template>
  <Swiper :modules="modules" :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange" :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" effect="fade">
    <SwiperSlide v-for="opinion in opinions" :key="opinion.id">
      <a v-bind:href="opinion.url" target="_blank">
        <div class="text-mst_black h-[400px] flex items-center justify-center md:h-[500px] xl:h-96">
          <img :src="opinion.urlImage" class="
                    w-full
                    h-full
                    absolute
                    mix-blend-overlay
                    contrast-[0.23]
                    object-cover
                    xl:object-center
                  " />
          <div>
            <h2 class="text-xl text-right mr-10 mb-5 md:text-2xl">
              {{ opinion.date }}
            </h2>
            <p class="
                    text-center
                    text-lg
                    font-extrabold
                    tracking-wider
                    leading-relaxed
                    px-4
                    md:text-2xl
                    xl:px-96
                  ">
              {{ opinion.content }}
            </p>
          </div>
        </div>
      </a>
    </SwiperSlide>
  </Swiper>
</template>