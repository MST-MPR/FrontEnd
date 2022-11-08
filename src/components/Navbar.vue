<script setup>
import { ref } from "vue";

const showMobileMenu = ref(true);
</script>


<template>
  <nav>
    <div class="sticky top-0">
      <!--desktop menu-->
      <div class="bg-mst_black">
        <div class="max-w-1xl mx-auto">
          <div class="flex justify-around">
            <!--menu-->
            <div class="flex space-x-4">
              <!--logo-->
              <a href="" class="flex items-center space-x-2 py-5 px-2">
                <img src="../assets/images/logo.svg" class="h-20 w-20" />
                <span class="italic text-2xl text-mst_white"
                  >medien <br />SYSTEMTECHNIK</span
                >
              </a>
              <div class="w-40"></div>
              <!--menu-->
              <div class="hidden md:flex items-center space-x-1">
                <a
                  href="/"
                  class="
                    text-mst_white
                    text-bold
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Home</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Full service</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("verkauf") }}</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("vermietung") }}</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Smart home</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Streaming</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("kontakt") }}</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("impressum") }}</a
                >
                <a
                  href="/"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("cookieRichtline") }}</a
                >
              </div>
            </div>
            <!--show mobile menu-->
            <div class="md:hidden flex items-center">
              <button
                @click="showMobileMenu = !showMobileMenu"
                class="py-10 px-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Mobile menu-->
      <div
        class="md:hidden w-40 bg-mst_black absolute inset-y-30 right-0"
        :class="{ hidden: showMobileMenu }"
      >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >Home</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >Full service</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >{{ $t("verkauf") }}</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >{{ $t("vermietung") }}</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >Smart home</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >Streaming</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >{{ $t("kontakt") }}</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >{{ $t("impressum") }}</a
        >
        <a
          href="/"
          class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          "
          >{{ $t("cookieRichtline") }}</a
        >
      </div>
    </div>
  </nav>
</template>