<script >
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/common/AppNavbar.vue";
import Footer from "./components/common/AppFooter.vue";
import TopButton from "./components/common/TopButton.vue";
import Cookies from "./components/app/Cookies.vue";

export default {
  components: {
    Navbar,
    Footer,
    TopButton,
    RouterLink,
    RouterView,
    Cookies,
  },
  mounted() {
    const keys = [
      "cmplz_banner-status",
      "cmplz_functional",
      "cmplz_consented_services",
      "cmplz_marketing",
      "cmplz_preferences",
      "cmplz_policy_id",
      "cmplz_stadistics",
    ];

    keys.forEach((key) => {
      this.$cookies.set(key, "", "7d", "/");
    });
  },
};
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
    <div class="sticky bottom-[60px] collapse md:visible">
      <TopButton />
    </div>
    <!--Cookies-->
    <div>
      <Cookies />
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