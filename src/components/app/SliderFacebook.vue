<script>
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";

export default {
  name: "SliderFacebook",
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
  <Splide
    :options="{
      rewind: true,
      type: loop,
      cover: true,
      height: 450,
      speed: 4000,
      rewindSpeed: 1500,
      wheel: false,
      autoplay: true,
      pauseOnHover: false,
      dragMinThreshold: { mouse: 10, touch: 10 },
    }"
  >
    <SplideSlide v-for="post in posts" :key="post.id">
      <div>
        <h1 class="text-center text-5xl pt-20">{{ post.title }}</h1>
        <h2 class="text-right pr-32 text-xl">{{ post.date }}</h2>
        <p
          class="
            w-1/2
            m-auto
            text-center text-base
            py-24
            tracking-wider
            leading-relaxed
            md:px-40 md:text-2xl
          "
        >
          {{ post.content }}
        </p>
      </div>
    </SplideSlide>
  </Splide>
</template>