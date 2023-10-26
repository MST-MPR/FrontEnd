<script setup>
import { ref } from "vue";
const pdf = 'mst-agb.pdf';
const route = '../../public/documents/mst-agb.pdf';
const navigation = 
  [
    {
      name: "Full Service",
      route: "/fullService",
    },
    {
      name: "buttons.verkauf",
      route: "/sale",
    },
    {
      name: "buttons.vermietung",
      route: "/rental",
    },
    {
      name: "Streaming",
      route: "/streaming",
    },
    {
      name: "Smart Home",
      route: "/smartHome",
    },
    {
      name: "buttons.kontakt",
      route: "/contact",
    },
    {
      name: "buttons.impressum",
      route: "/imprint",
    },
    {
      name: "buttons.cookieRichtline",
      route: "/cookiePolicy",
    }
  ];

const showMobileMenu = ref(true);
</script>

<template>
  <header class="sticky top-0 z-50">
    <!--desktop menu-->
    <div class="bg-mst_black">
      <div class="max-w-1xl mx-auto">
        <div class="flex justify-around">
          <!--menu-->
          <div class="flex md:space-x-1 2xl:space-x-14">
            <!--logo-->
            <router-link to="/" class="flex items-center space-x-2 py-5 px-2">
              <img src="/images/General/logo.svg" class="h-14 w-14 md:block 2xl:h-20 2xl:w-20" />
              <div>
                <p class="text-mst_white tracking-widest text-2xl md:text-3xl 2xl:text-4xl">medien</p>
                <p class="text-mst_white tracking-widest text-xs md:text-sm 2xl:text-lg">SYSTEMTECHNIK</p>
              </div>
            </router-link>
            <div class="md:w-10 2xl:w-52"></div>
            <!--menu-->
            <nav class="hidden items-center 2xl:space-x-1 xl:flex">
              <div v-for="item in navigation"  class="
                  text-mst_white
                  text-bold
                  transform
                  transition
                  duration-300
                  hover:text-mst_orange
                  py-5
                  px-2
                ">
                <router-link :to="item.route">{{ this.$t(item.name) }}</router-link>
              </div>

                 <a :href="route" :download="pdf" class="
                    text-mst_white
                    transform
                    transition
                    duration-300
                    hover:text-mst_orange
                    py-5
                    px-2
                    cursor-pointer	
                  ">AGB</a>
              <div>
                <select v-model="$i18n.locale" class="
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
                    ">
                  <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                    {{ locale }}
                  </option>
                </select>
              </div>
            </nav>
          </div>
          <!--show mobile menu-->
          <div class="flex items-center xl:hidden">
            <button @click="showMobileMenu = !showMobileMenu" class="mr-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Mobile menu-->
    <div class="2xl:hidden w-40 bg-mst_black absolute inset-y-30 right-0" :class="{ hidden: showMobileMenu }">
      <router-link @click="showMobileMenu = !showMobileMenu" to="/" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">HOME</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/fullService" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">FULL SERVICE</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/sale" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">{{ $t("buttons.verkauf") }}</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/rental" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">{{ $t("buttons.vermietung") }}</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/smartHome" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">SMART HOME</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/streaming" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">STREAMING</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="contact" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">{{ $t("buttons.kontakt") }}</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/imprint" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">{{ $t("buttons.impressum") }}</router-link>
      <router-link @click="showMobileMenu = !showMobileMenu" to="/cookiePolicy" class="
            block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
          ">{{ $t("buttons.cookieRichtline") }}</router-link>
          <a :href="route" :download="pdf" class="
          block
            py-2
            px-4
            text-mst_white
            transform
            transition
            duration-300
            hover:text-mst_orange
                  ">AGB</a>
      <div class="
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
          ">
        <select v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>