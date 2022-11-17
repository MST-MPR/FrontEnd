<script setup>
</script>

<template>
  <div>
    <div class="bg-mst_bg h-screen">
      <div class="basis-1/2 visible lg:hidden">
        <img
          class="saturate-50 brightness-50 rounded-bl-[100px]"
          src="@/assets/images/kameras.jpg"
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
              sm:text-6xl
              p-28
              sm:mt-60
            "
          >
            Professionell Event... <br />
            professionell gestreamt...
          </h1>
          <h3 class="basis-1/2 ml-15 italic text-xl sm:text-2xl p-5">
            Wir bieten nicht nur Planung und Betreuung von Veranstaltungen an,
            sondern vermieten und/oder verkaufen auch das notwendige Equipment
            dafür. Auch hierbei stehen wir Ihnen gern beratend zur Seite und
            bieten hochwertige Technik zu fairen Preisen.
          </h3>
        </div>
        <div class="basis-1/2 hidden lg:block">
          <img
            class="saturate-50 brightness-50 rounded-bl-[1200px]"
            src="@/assets/images/kameras.jpg"
            alt="kameras-medien-systemtechnik"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20 p-10">
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
                    class="w-10 h-10 stroke-2 stroke-mst_orange ml-14 mb-2 sm:ml-32 sm:mb-10"
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
                      sm:visible
                      sm:mb-5
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
                    Wir verstehen uns als Full-Service-Dienstleister, d.h. wir
                    stellen nicht nur die notwendigen technischen Geräte zur
                    Verfügung, sondern sorgen auch dafür, dass sie perfekt für
                    den jeweiligen Anlass installiert werden.
                  </p>
                </div>
              </div>
              <div class="ml-2 mt-5 sm:ml-16">
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
        </div>
      </div>
    </div>
  </div>
</template>


