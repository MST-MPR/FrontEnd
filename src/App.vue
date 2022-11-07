<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
  </div>
  <main>
    <RouterView />
  </main>
  <div class="sticky bottom-0">
    <Footer />
  </div>
</template>