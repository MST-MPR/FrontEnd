<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="sticky top-0">
    <Navbar />
  </div>
  <main>
    <RouterView />
  </main>
  <div>
    <Footer />
  </div>
</template>