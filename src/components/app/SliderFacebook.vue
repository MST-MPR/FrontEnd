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
      posts: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/facebookPosts/list')
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
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
    <SwiperSlide v-for="post in posts" :key="post.id">
      <!--<a v-bind:href="post.url" target="_blank">-->
      <div :src="post.urlFacebook" class="text-mst_white h-[600px] md:h-[500px] xl:h-96 flex justify-center items-center">
        <img class="
                    
                    w-full
                    h-full
                    object-cover
                    absolute
                    mix-blend-overlay
                    object-left-bottom
                    brightness-50
                    blur-sm
                    md:object-center
                  " />
        <div class="text-center">
          <h1 class="text-5xl">{{ post.tittle }}</h1>
          <h2 class="text-xl h-7 md:pr-40 md:text-right md:text-2xl">
            {{ post.date }}
          </h2>
          <p class="
                    text-base
                    p-8
                    tracking-wider
                    leading-relaxed
                    md:px-40 md:text-2xl
                    flex-grow
                  ">
            {{ post.content }}
          </p>
        </div>
      </div>
      <!--</a>-->
    </SwiperSlide>
  </Swiper>
</template>