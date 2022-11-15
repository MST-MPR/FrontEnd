<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperTextBase = ref([
      {
        img: "./src/assets/images/wagen.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/kirche.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/beamer.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/kino.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/geschäft.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/klaviatur.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/veranstaltung.jpg",
        description: "",
      },
      {
        img: "./src/assets/images/landschaft.jpg",
        description: "",
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  },
};
</script>


<template>
  <swiper
    :modules="modules"
    :space-beetween="20"
    :loop="true"
    :pagination="{ clickcable: true }"
    autoplay='{
        "delay": 2500,
        "disableOnInteraction": false
    }'
  >
    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
      <div>
        <p>
          {{ text.description }}
        </p>
      </div>
      <div class="w-screen h-[930px]">
        <img :src="text.img" alt="mst-images" class="w-[820px] h-[820px] rounded-full object-cover"/>
      </div>
    </swiper-slide>
  </swiper>
</template>