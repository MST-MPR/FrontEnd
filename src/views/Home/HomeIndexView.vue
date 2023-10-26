<script>
import Input from "../../components/inputs/Input.vue";
import Slider from "../../components/app/Slider.vue";
import SliderFacebook from "../../components/app/SliderFacebook.vue";
import Team from "../../components/app/Team.vue";
import { mapActions } from "vuex";
import { BASE_URL } from '@/main.js'
import axios from "axios";

export default {
  components: {
    Input,
    Slider,
    SliderFacebook,
    Team
  },
  data() {
    return {
      task: {
        id: "",
        name: "",
        email: "",
        message: "",
      },

    };
  },

  methods: {
    //Recive an array
    ...mapActions(["setTasks"]),

    processForm() {
      //Delete data
      this.task = {
        name: "",
        email: "",
        message: "",
      };
    },
    async submitForm() {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/contact`,
          this.task
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<template id="template">
  <div class="object-fit">
    <!--PRINCIPAL-->
    <div class="bg-mst_construction pb-8 lg:h-full xl:h-fit 2xl:pb-48">
      <div class="basis-1/2 visible md:hidden">
        <img class="saturate-50 brightness-50 rounded-bl-[100px]" src="/images/General/kameras.jpg"
          alt="kameras-medien-systemtechnik" />
      </div>
      <div class="
            flex flex-col
            text-center
            drop-shadow-2xl
            text-mst_white
            sm:flex-row
          ">
        <div class="
              basis-1/2
              flex flex-col
              tracking-wider
              md:py-52 md:pl-20
              xl:pt-44
              2xl:my-auto
            ">
          <h1 class="
                text-center
                font-bold
                text-3xl
                py-5
                md:text-5xl
                xl:text-center xl:pb-20
                2xl:text-6xl
              ">
            {{ $t("home.prof1") }} <br />
            {{ $t("home.prof2") }}
          </h1>
          <h2 class="basis-1/2 ml-15 text-xl py-5 px-16 md:text-2xl md:text-left">
            {{ $t("home.prof3") }}
          </h2>
        </div>
        <div class="basis-1/2 hidden md:block">
          <img class="saturate-50 brightness-50 rounded-bl-[1200px]" src="/images/General/kameras.jpg"
            alt="kameras-medien-systemtechnik" />
        </div>
      </div>
    </div>
    <!--SLIDER-->
    <div>
      <Slider />
    </div>
    <!--GRID-->
    <div class="w-full h-full border-y-4 border-mst_orange py-20 sm:p-32">
      <div class="
            grid grid-cols-1
            h-fit
            place-items-center
            gap-10
            sm:grid-cols-2
            xl:grid-cols-5 xl:gap-60 2xl:px-28
            2xl:gap-72
          ">
        <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                  Full service
                </h1>
              </div>
            </div>
            <div class="box">
              <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm
                    2xl:text-base
                    md:block md:visible
                  ">
                <p>
                  {{ $t("home.fullServiceGrid") }}
                </p>
              </div>
            </div>
            <div class="mx-auto mt-5">
              <router-link to="/fullService" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
                FULL SERVICE
              </router-link>
            </div>
          </div>
        </div>
        <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              shadow-mst_black
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
            ">
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                  {{ $t("header.verkaufH") }}
                </h1>
              </div>
            </div>
            <div class="box">
              <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm
                    2xl:text-base
                    md:block md:visible
                  ">
                <p>
                  {{ $t("home.verkaufGrid") }}
                </p>
              </div>
            </div>
            <div class="mx-auto mt-5">
              <router-link to="/sale" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
                {{ $t("buttons.verkauf") }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>

                <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                  {{ $t("header.vermietungH") }}
                </h1>
              </div>
            </div>
            <div class="box">
              <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm md:block md:visible
                    2xl:text-base
                  ">
                <p>
                  {{ $t("home.vermietungGrid") }}
                </p>
              </div>
            </div>
            <div class="mx-auto mt-5">
              <router-link to="/rental" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
                {{ $t("buttons.vermietung") }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>

                <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                  Streaming
                </h1>
              </div>
            </div>
            <div class="box">
              <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm md:block md:visible
                    2xl:text-base
                  ">
                <p>
                  {{ $t("home.streamingGrid") }}
                </p>
              </div>
            </div>
            <div class="mx-auto mt-5">
              <router-link to="/streaming" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
                STREAMING
              </router-link>
            </div>
          </div>
        </div>
        <div class="
              m-0
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              sm sm:col-span-2
              md:h-[400px] md:w-[220px]
              xl:col-span-1
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
          <div class="grid overflow-hidden">
            <div class="box">
              <div class="place-content-center">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                  Smart Home
                </h1>
              </div>
            </div>
            <div class="box">
              <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm md:block md:visible
                    2xl:text-base
                  ">
                <p>
                  {{ $t("home.smartHomeGrid") }}
                </p>
              </div>
            </div>
            <div class="mx-auto mt-5">
              <router-link to="/smartHome" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
                SMART HOME
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--SLIDER FACEBOOK-->
    <div>
      <SliderFacebook />
    </div>
    <!--UBER UNS-->
    <div class="h-full md:h-full 2xl:h-fit">
      <div class="w-full h-full pb-5 relative">
        <img src="/images/General/esc.jpg" class="
              w-full
              h-full
              object-cover
              absolute
              mix-blend-overlay
              object-left-bottom
              brightness-50
              blur-sm
              md:object-center
            " />
        <h1 class="
              text-mst_white
              text-center
              font-extrabold
              text-5xl
              p-10
              md:text-7xl
            ">
          {{ $t("home.überUns1") }}
        </h1>
        <p class="
              text-mst_white
              text-center text-base
              p-4
              tracking-wider
              leading-relaxed
              md:px-40 md:text-2xl
            ">
          {{ $t("home.überUns2") }}
        </p>
      </div>
    </div>
    <!--TEAM-->
    <div class="h-full w-full border-y-4 border-mst_orange">
      <h1 class="
      my-10
      text-center
      font-extrabold
      text-5xl
      md:text-7xl
      text-mst_black
      ">
        {{ $t("home.team") }}
      </h1>
      <div class="
      w-4/6
      flex
      flex-wrap
      justify-center
      items-start
      gap-x-20
      gap-y-16
      mx-auto
      pb-20
    ">
        <Team />
      </div>
    </div>
    <!--PARTNERS-->
    <div class="text-center bg-partners">
      <h1 class="
        text-mst_white
        text-center
        font-extrabold
        text-5xl
        sm:text-7xl
        pt-14
      ">
        {{ $t("home.partners") }}
      </h1>
      <div class="
        grid
        py-10
        overflow-hidden
        gap-y-2
        items-center
        sm:grid-cols-2
        xl:grid-cols-3
      ">
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.bremerbuehnenhaus.de/" target="_blank"><img src="/images/Partners/bbh.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.bose.de" target="_blank"><img src="/images/Partners/bose.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://elko.de/" target="_blank"><img src="/images/Partners/elko.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.gotaque.de/" target="_blank"><img src="/images/Partners/gotaque.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.highlite.com/de/" target="_blank"><img src="/images/Partners/highlite.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.loxone.com/" target="_blank"><img src="/images/Partners/loxone.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.biamp.com/" target="_blank"><img src="/images/Partners/neets.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.optoma.de/" target="_blank"><img src="/images/Partners/optoma.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto">
          <a href="https://www.relens.de/" target="_blank"><img src="/images/Partners/relens.png" /></a>
        </div>
        <div class="w-72 p-8 mx-auto justify-center xl:col-end-4 xl:col-span-3">
          <a href="https://de-de.sennheiser.com/" target="_blank"><img src="/images/Partners/sennheiser.png" /></a>
        </div>
      </div>
    </div>
    <!--CONTACT-->
    <div class="bg-contact bg-cover w-full pt-16 border-t-4 border-mst_orange">
      <div class="
            grid
            w-fit
            grid-row-2
            overflow-hidden
            mx-auto
            pb-14
            xl:grid-cols-2
          ">
        <div class="
              w-full
              h-96
              mx-auto
              md:w-[450px] md:h-[620px]
              2xl:h-[760px]
            ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19202.23207521861!2d8.788377599999995!3d53.01534720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0d68d4200bf6b%3A0x26d0285757006942!2sMST%20Medien-%20Systemtechnik%20GmbH!5e0!3m2!1sde!2sde!4v1678183789083!5m2!1sde!2sde"
            referrerpolicy="no-referrer-when-downgrade" class="w-full h-full
        "></iframe>
        </div>
        <div class="w-fit mx-auto">
          <div class="p-8">
            <h2 class="
                  mb-4
                  mr-4
                  text-xl
                  tracking-tight
                  font-extrabold
                  text-left text-mst_white
                  md:mr-0 md:text-xl
                  2xl:text-2xl
                ">
              MST Medien- Systemtechnik GmbH
            </h2>
            <p class="mb-1 font-light text-base text-mst_white md:text-sm 2xl:text-lg">
              Bremer Straße 63 <br />
              28816 Stuhr <br />
              event@mst-extra.net <br />
              +49 421 20 77 3 0
            </p>
            <form @submit.prevent="processForm" method="POST" class="space-y-4">
              <Input :task="task" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--SPONSORING-->
    <div class="w-full h-full border-y-4 border-mst_orange">
      <div class="w-full h-full relative">
        <img src="/images/General/kirche.jpg" class="
              w-full
              h-full
              object-cover
              absolute
              mix-blend-overlay
              brightness-50
              blur-sm
              md:object-center
            " />
        <h1 class="
              text-mst_white
              text-center
              font-extrabold
              text-5xl
              pt-14
              md:text-7xl
            ">
          Sponsoring
        </h1>
        <div class="flex flex-col py-14 w-full mx-auto xl:flex-row">
          <div class="mx-auto mb-5 md:w-fit 2xl:w-[500px]">
            <img src="/images/General/sponsor1.png" class="h-96 mx-auto md:h-[460px] 2xl:h-[500px]" />
          </div>
          <div class="mx-auto md:w-fit 2xl:w-[500px]">
            <img src="/images/General/sponsor2.png" class="h-96 mx-auto md:h-[460px] 2xl:h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>