<script setup>
import { ref } from "vue";

const showMobileMenu = ref(true);
</script>

<template>
  <div>
    <div>
      <!--desktop menu-->
      <div class="bg-mst_black">
        <div class="max-w-1xl mx-auto">
          <div class="flex justify-around">
            <!--menu-->
            <div class="flex space-x-4">
              <!--logo-->
              <router-link
                to="/home"
                class="flex items-center space-x-2 py-5 px-2"
              >
                <img src="../assets/images/logo.svg" class="h-20 w-20" />
                <span class="italic text-2xl text-mst_white"
                  >medien <br />SYSTEMTECHNIK</span
                >
              </router-link>
              <div class="w-40"></div>
              <!--menu-->
              <div class="hidden md:flex items-center space-x-1">
                <router-link
                  to="/home"
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
                  >Home</router-link
                >
                <router-link
                  to="/fullService"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Full service</router-link
                >
                <router-link
                  to="/verkauf"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("verkauf") }}</router-link
                >
                <router-link
                  to="/vermietung"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("vermietung") }}</router-link
                >
                <router-link
                  to="/smartHome"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Smart home</router-link
                >
                <router-link
                  to="/streaming"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >Streaming</router-link
                >
                <router-link
                  to="/kontakt"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("kontakt") }}</router-link
                >
                <router-link
                  to="/impressum"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("impressum") }}</router-link
                >
                <router-link
                  to="/cookieRichtline"
                  class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                  "
                  >{{ $t("cookieRichtline") }}</router-link
                >
                <div>
                  <select
                    v-model="$i18n.locale"
                    class="
                      relative
                      inline-flex
                      items-center
                      justify-center
                      p-1
                      overflow-hidden
                      font-medium
                      bg-mst_black
                      text-mst_white
                      border-2
                      border-mst_orange
                      rounded-full
                    "
                  >
                    <option
                      v-for="locale in $i18n.availableLocales"
                      :key="`locale-${locale}`"
                      :value="locale"
                    >
                      {{ locale }}
                    </option>
                  </select>
                </div>
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
        <router-link
          to="/home"
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
          >Home</router-link
        >
        <router-link
          to="/fullService"
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
          >Full service</router-link
        >
        <router-link
          to="/verkauf"
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
          >{{ $t("verkauf") }}</router-link
        >
        <router-link
          to="/vermietung"
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
          >{{ $t("vermietung") }}</router-link
        >
        <router-link
          to="/smartHome"
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
          >Smart home</router-link
        >
        <router-link
          to="/streaming"
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
          >Streaming</router-link
        >
        <router-link
          to="kontakt"
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
          >{{ $t("kontakt") }}</router-link
        >
        <router-link
          to="/impressum"
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
          >{{ $t("impressum") }}</router-link
        >
        <router-link
          to="/cookieRichtline"
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
          >{{ $t("cookieRichtline") }}</router-link
        >
        <div
          class="
            relative
            inline-flex
            items-center
            justify-center
            p-4
            px-6
            py-3
            overflow-hidden
            font-medium
            text-indigo-600
            transition
            duration-300
            ease-out
            border-2 border-purple-500
            rounded-full
            shadow-md
            group
          "
        >
          <select v-model="$i18n.locale">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>