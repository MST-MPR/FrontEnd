<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/common/AppNavbar.vue";
import Footer from "./components/common/AppFooter.vue";
import TopButton from "./components/common/TopButton.vue";
</script>

<template>
  <div class="overflow-hidden sm:overflow-visible">
    <div class="sticky top-0 z-50">
      <Navbar />
    </div>
    <div>
      <RouterView />
    </div>
    <div>
      <Footer />
    </div>
    <div
      class="
        sticky
        bottom-[60px]
        collapse
        md:visible
      "
    >
      <TopButton />
    </div>
  </div>
</template>

<style>
@import "./assets/font-family/fonts.css";

html,
body,
#app {
  font-family: Frutiger;
}
</style>