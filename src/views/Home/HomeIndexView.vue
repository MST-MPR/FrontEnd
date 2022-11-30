<script>
import { VueRecaptcha } from "vue-recaptcha";
//import Slider from "../../components/Slider.vue"
export default {
  components: {
    VueRecaptcha,
    //Slider
  },
  data() {
    return {
      task: {
        name: "",
        email: "",
        message: "",
      },
      selected: "",
    };
  },
  methods: {
    processForm() {
      console.log(this.task);
      //Delete data
      this.task = {
        name: "",
        email: "",
        message: "",
      };
    },
    reset() {
      this.$refs.recaptcha.reset();
    },
    select(name) {
      if (this.selected == name) {
        this.selected = "";
      } else {
        this.selected = name;
      }
    },
  },
};
</script>

<template>
  <div class="object-fit">
    <!--PRINCIPAL-->
    <div class="bg-mst_construction h-screen">
      <div class="basis-1/2 visible sm:hidden">
        <img
          class="saturate-50 brightness-50 rounded-bl-[100px]"
          src="../../assets/images/General/kameras.jpg"
          alt="kameras-medien-systemtechnik"
        />
      </div>
      <div
        class="
          flex flex-col
          sm:flex-row
          text-center
          drop-shadow-2xl
          text-mst_white
        "
      >
        <div class="basis-1/2 flex flex-col tracking-wider">
          <h1
            class="
              text-center
              font-bold
              text-3xl
              mt-10
              p-5
              mb-10
              sm:text-6xl sm:p-20 sm:mt-40
            "
          >
            {{ $t("prof1") }} <br />
            {{ $t("prof2") }}
          </h1>
          <h3 class="basis-1/2 ml-15 text-xl sm:text-2xl p-5">
            {{ $t("prof3") }}
          </h3>
        </div>
        <div class="basis-1/2 hidden sm:block">
          <img
            class="saturate-50 brightness-50 rounded-bl-[1200px]"
            src="../../assets/images/General/kameras.jpg"
            alt="kameras-medien-systemtechnik"
          />
        </div>
      </div>
    </div>
    <!--GRID-->
    <div class="container mx-auto">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-2
          p-10
          sm:gap-36 sm:place-items-center
        "
      >
        <div
          class="
            flex
            justify-center
            w-[200px]
            h-[200px]
            shadow-2xl
            shadow-mst_black
            place-items-center
            ml-10
            sm:w-[300px] sm:h-[500px]
          "
        >
          <div class="grid overflow-hidden cursor-pointer">
            <div class="box">
              <div class="place-content-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="
                    w-10
                    h-10
                    stroke-2
                    stroke-mst_orange
                    ml-14
                    mb-2
                    sm:ml-32 sm:mb-10
                  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <h1
                  class="
                    text-center
                    font-normal
                    tracking-wide
                    text-4xl
                    hidden
                    lg:block
                    sm:visible sm:mb-5
                  "
                >
                  Full service
                </h1>
              </div>
            </div>
            <div class="box">
              <div
                class="
                  p-4
                  h-52
                  text-center text-base
                  tracking-wide
                  hidden
                  lg:block
                  sm:visible
                "
              >
                <p>
                  {{ $t("fullServiceGrid") }}
                </p>
              </div>
            </div>
            <div class="ml-2 mt-5 sm:ml-20">
              <router-link
                to="/fullService"
                type="button"
                class="
                  w-36
                  text-mst_white
                  bg-gradient-to-br
                  from-mst_gray
                  to-mst_orange
                  hover:bg-gradient-to-bl
                  focus:ring-2 focus:outline-none focus:ring-mst_orange
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                "
              >
                FULL SERVICE
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            flex
            justify-center
            w-[200px]
            h-[200px]
            shadow-2xl
            shadow-mst_black
            place-items-center
            ml-10
            sm:w-[300px] sm:h-[500px]
          "
        >
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="
                    w-10
                    h-10
                    stroke-2
                    stroke-mst_orange
                    ml-14
                    mb-2
                    sm:ml-32 sm:mb-10
                  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <h1
                  class="
                    text-center
                    font-normal
                    tracking-wide
                    text-4xl
                    hidden
                    lg:block
                    sm:visible sm:mb-5
                  "
                >
                  {{ $t("verkauf") }}
                </h1>
              </div>
            </div>
            <div class="box">
              <div
                class="
                  p-4
                  h-52
                  text-center text-base
                  tracking-wide
                  hidden
                  lg:block
                  sm:visible
                "
              >
                <p>
                  {{ $t("verkaufGrid") }}
                </p>
              </div>
            </div>
            <div class="ml-2 mt-5 sm:ml-20">
              <router-link
                to="/sale"
                type="button"
                class="
                  w-36
                  uppercase
                  text-mst_white
                  bg-gradient-to-br
                  from-mst_gray
                  to-mst_orange
                  hover:bg-gradient-to-bl
                  focus:ring-2 focus:outline-none focus:ring-mst_orange
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                "
              >
                {{ $t("verkauf") }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            flex
            justify-center
            w-[200px]
            h-[200px]
            shadow-2xl
            shadow-mst_black
            place-items-center
            ml-10
            sm:w-[300px] sm:h-[500px]
          "
        >
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="
                    w-10
                    h-10
                    stroke-2
                    stroke-mst_orange
                    ml-14
                    mb-2
                    sm:ml-32 sm:mb-10
                  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>

                <h1
                  class="
                    text-center
                    font-normal
                    tracking-wide
                    text-4xl
                    hidden
                    lg:block
                    sm:visible sm:mb-5
                  "
                >
                  {{ $t("vermietung") }}
                </h1>
              </div>
            </div>
            <div class="box">
              <div
                class="
                  p-4
                  h-52
                  text-center text-base
                  tracking-wide
                  hidden
                  lg:block
                  sm:visible
                "
              >
                <p>
                  {{ $t("vermietungGrid") }}
                </p>
              </div>
            </div>
            <div class="ml-2 mt-5 sm:ml-20">
              <router-link
                to="/rental"
                type="button"
                class="
                  w-36
                  uppercase
                  text-mst_white
                  bg-gradient-to-br
                  from-mst_gray
                  to-mst_orange
                  hover:bg-gradient-to-bl
                  focus:ring-2 focus:outline-none focus:ring-mst_orange
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                "
              >
                {{ $t("vermietung") }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            flex
            justify-center
            w-[200px]
            h-[200px]
            shadow-2xl
            shadow-mst_black
            place-items-center
            ml-10
            sm:w-[300px] sm:h-[500px]
          "
        >
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="
                    w-10
                    h-10
                    stroke-2
                    stroke-mst_orange
                    ml-14
                    mb-2
                    sm:ml-32 sm:mb-10
                  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>

                <h1
                  class="
                    text-center
                    font-normal
                    tracking-wide
                    text-4xl
                    hidden
                    lg:block
                    sm:visible sm:mb-5
                  "
                >
                  Streaming
                </h1>
              </div>
            </div>
            <div class="box">
              <div
                class="
                  p-4
                  h-52
                  text-center text-base
                  tracking-wide
                  hidden
                  lg:block
                  sm:visible
                "
              >
                <p>
                  {{ $t("streamingGrid") }}
                </p>
              </div>
            </div>
            <div class="ml-2 mt-5 sm:ml-20">
              <router-link
                to="/streaming"
                type="button"
                class="
                  w-36
                  text-mst_white
                  bg-gradient-to-br
                  from-mst_gray
                  to-mst_orange
                  hover:bg-gradient-to-bl
                  focus:ring-2 focus:outline-none focus:ring-mst_orange
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                "
              >
                STREAMING
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            flex
            justify-center
            w-[200px]
            h-[200px]
            shadow-2xl
            shadow-mst_black
            place-items-center
            ml-10
            sm:w-[300px] sm:h-[500px]
          "
        >
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="
                    w-10
                    h-10
                    stroke-2
                    stroke-mst_orange
                    ml-14
                    mb-2
                    sm:ml-32 sm:mb-10
                  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <h1
                  class="
                    text-center
                    font-normal
                    tracking-wide
                    text-4xl
                    hidden
                    lg:block
                    sm:visible sm:mb-5
                  "
                >
                  Smart Home
                </h1>
              </div>
            </div>
            <div class="box">
              <div
                class="
                  p-4
                  h-52
                  text-center text-base
                  tracking-wide
                  hidden
                  lg:block
                  sm:visible
                "
              >
                <p>
                  {{ $t("smartHomeGrid") }}
                </p>
              </div>
            </div>
            <div class="ml-2 mt-5 sm:ml-20">
              <router-link
                to="/smarthome"
                type="button"
                class="
                  w-36
                  text-mst_white
                  bg-gradient-to-br
                  from-mst_gray
                  to-mst_orange
                  hover:bg-gradient-to-bl
                  focus:ring-2 focus:outline-none focus:ring-mst_orange
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                "
              >
                SMART HOME
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--UBER UNS-->
    <div class="h-fit mt-2">
      <div class="h-full w-full relative">
        <img
          src="../../assets/images/General/esc.jpg"
          class="
            w-full
            h-full
            object-cover
            absolute
            mix-blend-overlay
            object-left-bottom
            brightness-50
            blur-sm
            sm:object-center
          "
        />
        <h1
          class="
            text-mst_white
            text-center
            font-extrabold
            text-5xl
            p-4
            sm:text-7xl
          "
        >
          {{ $t("überUns1") }}
        </h1>
        <p
          class="
            text-mst_white
            text-center text-base
            p-4
            tracking-wider
            leading-relaxed
            sm:p-40 sm:text-2xl
          "
        >
          {{ $t("überUns2") }}
        </p>
      </div>
    </div>
    <!--TEAM-->
    <div class="h-[4850px] sm:h-[1500px]">
      <h1
        class="
          mt-10
          text-mst_black
          text-center
          font-extrabold
          text-5xl
          sm:text-7xl
        "
      >
        {{ $t("team") }}
      </h1>
      <div
        class="
          grid
          overflow-hidden
          grid-rows
          space-y-10
          sm:space-y-0 sm:grid-cols-4
          mt-8
          sm:mt-18
          mb-20
          sm:mb-10
          ml-16
          sm:ml-80 sm:p-20 sm:h-full sm:w-[1500px]
        "
      >
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('franz')"
          :class="[selected == 'franz' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img src="../../assets/images/Team/franz.png" class="p-2 h-52 ml-2" />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Ralf-Peter Franz
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("franz") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'franz'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 30
            </p>
            <p><strong>Email:</strong> rpfranz@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('marco')"
          :class="[selected == 'marco' ? 'h-[430px]' : 'h-[350px]']"
        >
          <img src="../../assets/images/Team/marco.jpg" class="p-2 h-52 ml-3" />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Marco Elsner
          </h1>
          <h2 class="text-center mt-2 p-2 text-lg">{{ $t("marco") }} <br> {{ $t("marco2") }}</h2>
          <div class="text-center mt-2" v-if="selected == 'marco'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 36
            </p>
            <p><strong>Email:</strong> melsner@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('philipp')"
          :class="[selected == 'philipp' ? 'h-[430px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/Team/philipp.jpg"
            class="p-2 h-52 object-cover"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Philipp Voss
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("philipp") }} <br> {{ $t("philipp2") }}</h2>
          <div class="text-center mt-2" v-if="selected == 'philipp'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 32
            </p>
            <p><strong>Email:</strong> pvoss@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('dagmar')"
          :class="[selected == 'dagmar' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/Team/dagmar.jpg"
            class="p-2 h-52 object-cover"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Dagmar Stewener
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'dagmar'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 61
            </p>
            <p><strong>Email:</strong> dstewener@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('sophia')"
          :class="[selected == 'sophia' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/Team/sophia.jpg"
            class="p-2 h-52 object-cover"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Sophia Krutsch
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'sophia'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 60
            </p>
            <p><strong>Email:</strong> skrutsch@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('jan')"
          :class="[selected == 'jan' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img src="../../assets/images/Team/jan.png" class="p-2 h-52 ml-3" />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Jan Michalowski
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("techniker") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'jan'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 0
            </p>
            <p><strong>Email:</strong> jmichalowski@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('andreas')"
          :class="[selected == 'andreas' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/Team/andreas.jpg"
            class="p-2 h-52 ml-11"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Andreas Garms
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("techniker") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'andreas'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 0
            </p>
            <p><strong>Email:</strong> agarms@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('mika')"
          :class="[selected == 'mika' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img src="../../assets/images/Team/franz.png" class="p-2 h-52 ml-2" />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Mika Kind
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("mika") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'mika'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 0
            </p>
            <p><strong>Email:</strong> mkind@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('brüuggemann')"
          :class="[selected == 'brüuggemann' ? 'h-[430px]' : 'h-[350px]']"
        >
          <img src="../../assets/images/Team/marco.jpg" class="p-2 h-52 ml-3" />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            M. Brüuggemann
          </h1>
          <h2 class="text-center mt-2 p-2 text-lg">{{ $t("brüuggemann") }}</h2>
          <div class="text-center mt-2" v-if="selected == 'brüuggemann'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 0
            </p>
            <p><strong>Email:</strong> mbrüggemann@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('fabian')"
          :class="[selected == 'fabian' ? 'h-[430px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/Team/philipp.jpg"
            class="p-2 h-52 object-cover"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Fabian Witt
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("fabian") }}</h2>
          <div class="text-center mt-2" v-if="selected == 'fabian'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 0
            </p>
            <p><strong>Email:</strong> fwitt@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('miguel')"
          :class="[selected == 'miguel' ? 'h-[400px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/Team/dagmar.jpg"
            class="p-2 h-52 object-cover"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            Miguel Portero
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
          <div class="text-center mt-4" v-if="selected == 'miguel'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("telefon") }}</strong
              >: +49 421 20 77 3 – 0
            </p>
            <p><strong>Email:</strong> mportero@mst-extra.net</p>
          </div>
        </div>
        <div
          class="
            item
            w-56
            shadow-inner
            shadow-mst_black
            rounded-2xl
            sm:shadow-2xl sm:shadow-mst_black
            grayscale
            transition
            duration-300
            hover:grayscale-0
            cursor-pointer
          "
          @click="select('hier')"
          :class="[selected == 'hier' ? 'h-[440px]' : 'h-[350px]']"
        >
          <img
            src="../../assets/images/General/logo_black.png"
            class="p-2 ml-4 mt-4 h-48 object-cover"
          />
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            {{ $t("bewird") }}
          </h1>
          <h2 class="text-center mt-4 text-lg"></h2>
          <div class="text-center mt-4" v-if="selected == 'hier'">
            <div class="relative flex items-center w-16 mb-4 ml-20">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p class="text-lg">{{ $t("freuen") }} <strong>jobs@mst-extra.net</strong></p>
            <p class="text-lg">{{ $t("oder") }} <br /><strong>+49 421 20 77 30</strong></p>
          </div>
        </div>
      </div>
    </div>
    <!--PARTNERS-->
    <div class="hidden sm:block text-center bg-partners">
      <h1 class="text-mst_white text-center font-extrabold text-7xl p-4">
        {{ $t("partners") }}
      </h1>
      <div
        class="
          grid
          mt-10
          overflow-hidden
          grid-cols-4
          gap-x-10 gap-y-5
          w-full
          h-full
          items-center
        "
      >
        <div class="w-72 p-8 ml-28">
          <a href="https://www.bremerbuehnenhaus.de/" target="_blank"
            ><img src="../../assets/images/Partners/bbh.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.bose.de" target="_blank"
            ><img src="../../assets/images/Partners/bose.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://elko.de/" target="_blank"
            ><img src="../../assets/images/Partners/elko.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.gotaque.de/" target="_blank"
            ><img src="../../assets/images/Partners/gotaque.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.highlite.com/de/" target="_blank"
            ><img src="../../assets/images/Partners/highlite.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.loxone.com/" target="_blank"
            ><img src="../../assets/images/Partners/loxone.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://de.nec.com/" target="_blank"
            ><img src="../../assets/images/Partners/nec.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.biamp.com/" target="_blank"
            ><img src="../../assets/images/Partners/neets.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.optoma.de/" target="_blank"
            ><img src="../../assets/images/Partners/optoma.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.relens.de/" target="_blank"
            ><img src="../../assets/images/Partners/relens.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://de-de.sennheiser.com/" target="_blank"
            ><img src="../../assets/images/Partners/sennheiser.png"
          /></a>
        </div>
        <div class="w-72 p-8 ml-28">
          <a href="https://www.sony.de/" target="_blank"
            ><img src="../../assets/images/Partners/sony.png"
          /></a>
        </div>
      </div>
    </div>
    <!--CONTACT-->
    <div>
      <div
        class="
          grid
          overflow-hidden
          grid-row-2
          sm:grid-cols-3 sm:ml-[550px] sm:w-fit sm:h-[800px] sm:mt-28
        "
      >
        <div class="w-80 h-96 mt-5 ml-5 sm:w-[450px] sm:h-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4800.1731102126205!2d8.789679!3d53.01880700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26d0285757006942!2sMST%20Medien-%20Systemtechnik%20GmbH!5e0!3m2!1ses!2sus!4v1669030223678!5m2!1ses!2sus"
            class="w-full h-full"
          ></iframe>
        </div>
        <div class="w-96 sm:w-[450px] sm:h-[650px]">
          <div class="p-8 m-auto">
            <h2
              class="
                mb-4
                mr-4
                sm:mr-0
                text-xl
                sm:text-2xl
                tracking-tight
                font-extrabold
                text-left text-gray-900
                dark:text-white
              "
            >
              MST Medien- Systemtechnik GmbH
            </h2>
            <p class="mb-1 font-light text-base sm:text-lg">
              Bremer Straße 63 <br />
              28816 Stuhr <br />
              event@mst-extra.net <br />
              +49 421 20 77 3 0
            </p>
            <form @submit.prevent="processForm" class="space-y-4 mt-5">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-bold text-mst_black"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model.trim="task.name"
                  class="
                    shadow-2xl
                    border
                    text-sm
                    rounded-lg
                    block
                    w-72
                    sm:w-full
                    p-2.5
                  "
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-bold text-mst_black"
                  >{{ $t("email") }}</label
                >
                <input
                  type="text"
                  id="email"
                  v-model.trim="task.email"
                  class="
                    block
                    p-3
                    w-72
                    sm:w-full
                    text-sm text-gray-900
                    bg-gray-50
                    rounded-lg
                    border border-gray-300
                    shadow-sm
                  "
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-bold text-mst_black"
                  >{{ $t("message") }}</label
                >
                <textarea
                  type="text"
                  id="message"
                  v-model.trim="task.message"
                  rows="6"
                  class="
                    block
                    p-2.5
                    w-72
                    sm:w-full
                    text-sm
                    text-mst_black
                    bg-gray-50
                    rounded-lg
                    border border-gray-300
                    shadow-sm
                  "
                />
              </div>
              <div>
                <vue-recaptcha
                  ref="recaptcha"
                  sitekey="6Lem_TIjAAAAAOmTwiskZDAWnkE81t8Y_jsXe_jG"
                />
              </div>
              <button
                @click="reset"
                type="submit"
                class="
                  w-36
                  text-mst_white
                  bg-gradient-to-br
                  from-mst_gray
                  to-mst_orange
                  hover:bg-gradient-to-bl
                  focus:ring-2 focus:outline-none focus:ring-mst_orange
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  ml-[70px]
                  sm:ml-0
                "
              >
                {{ $t("send") }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--SPONSORING-->
    <div class="h-[950px] sm:h-[700px] mt-2 mb-2">
      <div class="h-full relative">
        <img
          src="../../assets/images/General/kirche.jpg"
          class="
            w-full
            h-full
            object-cover
            absolute
            mix-blend-overlay
            brightness-50
            blur-sm
            sm:object-center
          "
        />
        <h1
          class="
            text-mst_white
            text-center
            font-extrabold
            text-5xl
            p-4
            sm:text-7xl
          "
        >
          Sponsoring
        </h1>
        <div
          class="
            flex flex-col
            ml-11
            sm:ml-[24%]
            space-y-5
            sm:space-x-52 sm:flex sm:flex-row
          "
        >
          <div class="mt-6 sm:w-[500px]">
            <img
              src="../../assets/images/General/sponsor1.png"
              class="h-96 sm:h-[500px]"
            />
          </div>
          <div class="mt-6 sm:w-[500px]">
            <img
              src="../../assets/images/General/sponsor2.png"
              class="h-96 sm:h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>