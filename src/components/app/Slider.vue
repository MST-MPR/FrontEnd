<script>
import "@splidejs/splide/dist/css/splide.min.css";
</script>

<template>
  <Splide
    :options="{
      rewind: true,
      type: loop,
      cover: true,
      height: 900 ,
      fixedHeight: 1000,
      speed: 4000,
      rewindSpeed: 1500,
      wheel: false,
      autoplay: true,
      pauseOnHover: false,
      dragMinThreshold: { mouse: 10, touch: 10 },
    }"
  >
    <SplideSlide>
      <img src="../../assets/images/Slider/1.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/2.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/3.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/4.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/5.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/6.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/7.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/8.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/9.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/10.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/11.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/12.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/13.jpg" />
    </SplideSlide>
    <SplideSlide>
      <img src="../../assets/images/Slider/14.jpg" />
    </SplideSlide>
  </Splide>
</template>