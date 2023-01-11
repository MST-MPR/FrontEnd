<script setup>
import { ref } from "vue";

const showMobileMenu = ref(true);
</script>

<template>
  <div>
    <!--desktop menu-->
    <div class="bg-mst_black">
      <div class="max-w-1xl mx-auto">
        <div class="flex justify-around">
          <!--menu-->
          <div class="flex md:space-x-1 2xl:space-x-14">
            <!--logo-->
            <router-link
              to="/home"
              class="flex items-center space-x-2 py-5 px-2"
            >
              <img
                src="../../assets/images/General/logo.svg"
                class="h-14 w-14 md:block 2xl:h-20 2xl:w-20"
              />
              <span class="text-mst_white text-sm md:text-base 2xl:text-2xl"
                >medien <br />SYSTEMTECHNIK</span
              >
            </router-link>
            <div class="md:w-12 2xl:w-40"></div>
            <!--menu-->
            <div class="hidden items-center space-x-1 xl:flex">
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
                >HOME</router-link
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
                >FULL SERVICE</router-link
              >
              <router-link
                to="/sale"
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
                to="/rental"
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
                >SMART HOME</router-link
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
                >STREAMING</router-link
              >
              <router-link
                to="/contact"
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
                to="/imprint"
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
                to="/cookiePolicy"
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
          <div class="flex items-center xl:hidden">
            <button @click="showMobileMenu = !showMobileMenu" class="mr-12">
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
      class="2xl:hidden w-40 bg-mst_black absolute inset-y-30 right-0"
      :class="{ hidden: showMobileMenu }"
    >
      <router-link
        @click="showMobileMenu = !showMobileMenu"
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
        >HOME</router-link
      >
      <router-link
        @click="showMobileMenu = !showMobileMenu"
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
        >FULL SERVICE</router-link
      >
      <router-link
        @click="showMobileMenu = !showMobileMenu"
        to="/sale"
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
        @click="showMobileMenu = !showMobileMenu"
        to="/rental"
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
        @click="showMobileMenu = !showMobileMenu"
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
        >SMART HOME</router-link
      >
      <router-link
        @click="showMobileMenu = !showMobileMenu"
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
        >STREAMING</router-link
      >
      <router-link
        @click="showMobileMenu = !showMobileMenu"
        to="contact"
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
        @click="showMobileMenu = !showMobileMenu"
        to="/imprint"
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
        @click="showMobileMenu = !showMobileMenu"
        to="/cookiePolicy"
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
          p-2
          px-6
          py-3
          overflow-hidden
          transition
          duration-300
          ease-out
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
</template>