<script setup>
</script>

<template>
  <div class="object-fit">
    <!--PRINCIPAL-->
    <div class="bg-mst_bg h-screen">
      <div class="basis-1/2 visible sm:hidden">
        <img
          class="saturate-50 brightness-50 rounded-bl-[100px]"
          src="../../assets/images/kameras.jpg"
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
        <div class="basis-1/2 flex flex-col font-sans tracking-wider">
          <h1
            class="
              text-center
              italic
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
          <h3 class="basis-1/2 ml-15 italic text-xl sm:text-2xl p-5">
            {{ $t("prof3") }}
          </h3>
        </div>
        <div class="basis-1/2 hidden sm:block">
          <img
            class="saturate-50 brightness-50 rounded-bl-[1200px]"
            src="@/assets/images/kameras.jpg"
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
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <h1
                  class="
                    text-center
                    font-normal
                    tracking-wide
                    italic
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
                    italic
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
                    italic
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
                    italic
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
                    italic
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
          src="../../assets/images/esc.jpg"
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
            font-mono
            italic
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
            font-serif
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
    <div class="p-4">
      <h1
        class="
          mt-10
          text-mst_black
          text-center
          font-extrabold
          text-5xl
          font-mono
          italic
          sm:text-7xl
        "
      >
        {{ $t("team") }}
      </h1>
      <div
        class="
          hidden
          sm:flex
          flex-wrap
          justify-center
          items-end
          space-x-10 space-y-10
          p-40
        "
      >
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/franz.png" class="p-2 h-52 ml-2" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Ralf-Peter Franz
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("franz") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/marco.jpg" class="p-2 h-52 ml-3" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Marco Elsner
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("marco") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/philipp.jpg" class="p-2 h-52 object-cover" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Philipp Voss
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("philipp") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/dagmar.jpg" class="p-2 h-52 object-cover" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Dagmar Stewener
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/sophia.jpg" class="p-2 h-52 object-cover" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Sophia Krutsch
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/jan.png" class="p-2 h-52 ml-3" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Jan Michalowski
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("techniker") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/andreas.jpg" class="p-2 h-52 ml-11" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Andreas Garms
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("techniker") }}</h2>
        </div>
        <div class="item w-56 h-[350px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/logo_black.png" class="p-2 h-44 ml-6" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            {{ $t("hier") }}
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("bewird") }} jobs@mst-extra.net</h2>
        </div>
      </div>

      <div class="flex flex-col items-center space-y-6 mt-16 visible sm:hidden">
        <div class="item w-52 h-[330px] p-2 shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/franz.png" class="h-48" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Ralf-Peter Franz
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("franz") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/marco.jpg" class="p-2 h-48 ml-4" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Marco Elsner
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("marco") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/philipp.jpg" class="p-2 h-48 object-cover" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Philipp Voss
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("philipp") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/dagmar.jpg" class="p-2 h-48 object-cover" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Dagmar Stewener
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/sophia.jpg" class="p-2 h-48 object-cover" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Sophia Krutsch
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("sekretärin") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/jan.png" class="p-2 h-52 ml-2" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Jan Michalowski
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("techniker") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/Team/andreas.jpg" class="p-2 h-52 ml-8" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            Andreas Garms
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("techniker") }}</h2>
        </div>
        <div class="item w-52 h-[330px] shadow-2xl shadow-mst_black">
          <img src="../../assets/images/logo_black.png" class="p-2 h-40 ml-6" />
          <h1 class="text-center font-bold tracking-wide italic text-2xl mt-3">
            {{ $t("hier") }}
          </h1>
          <h2 class="text-center mt-4 text-lg">{{ $t("bewird") }} jobs@mst-extra.net</h2>
        </div>
      </div>
    </div>
    <!--SPONSORS-->
    <div class="h-screen sm:h-[900px] mt-2 mb-2">
      <div class="h-full relative">
        <img
          src="../../assets/images/esc.jpg"
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
            font-mono
            italic
            sm:text-7xl
          "
        >
          Sponsoring
        </h1>
        <div class="flex flex-col ml-[20%] sm:space-x-52 sm:flex sm:flex-row">
          <div class="w-52 mt-6 sm:w-[500px]">
            <img src="../../assets/images/sponsor1.png" alt="" />
          </div>
          <div class="w-52 mt-6 sm:w-[504px]">
            <img src="../../assets/images/sponsor2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>