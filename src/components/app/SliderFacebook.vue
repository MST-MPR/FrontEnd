<script>
import axios from "axios";
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
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/facebookPosts/list")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
    effect="fade"
  >
    <SwiperSlide v-for="post in posts" :key="post.id">
      <!--<a v-bind:href="post.url" target="_blank">-->
      <div class="text-mst_white h-[600px] md:h-[500px] xl:h-96">
        <img
          src="../../../public/images/General/kino.jpg"
          class="
            w-full
            h-full
            object-cover
            absolute
            mix-blend-overlay
            object-left-bottom
            brightness-50
            blur-sm
            md:object-center
          "
        />
        <h1 class="text-center text-5xl pt-20">{{ post.title }}</h1>
        <h2 class="text-center text-xl md:pr-32 md:text-right md:text-2xl">
          {{ post.date }}
        </h2>
        <p
          class="
            text-center text-base
            p-8
            tracking-wider
            leading-relaxed
            md:py-20 md:px-40 md:text-2xl
          "
        >
          {{ post.content }}
        </p>
      </div>
      <!--</a>-->
    </SwiperSlide>
  </Swiper>
</template>