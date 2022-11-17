<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/common/AppNavbar.vue";
import Footer from "./components/common/AppFooter.vue";
</script>

<template>
  <div class="overflow-hidden sm:overflow-visible">
    <div class="sticky top-0 z-50">
      <Navbar />
    </div>
    <div class="relative">
      <RouterView />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>