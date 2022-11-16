<script setup>
</script>

<template>
  <div>
    <div class="bg-mst_bg h-[930px]">
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
              text-2xl
              mt-10
              mb-10
              sm:text-6xl sm:mt-10 sm:p-28
            "
          >
            Professionell Event... <br />
            professionell gestreamt...
          </h1>
          <h3 class="basis-1/2 ml-15 italic text-sm sm:text-2xl pb-5 pl-5 pr-5">
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
      <div
        class="
          flex
          justify-center
          space-x-[60px]
          p-10
          shadow-inner
          shadow-mst_black
        "
      >
        <div
          class="
            item
            w-[300px]
            h-[500px]
            shadow-2xl
            shadow-mst_black
            place-items-center
          "
        >
          <div class="p-6">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-10 h-10 stroke-2 stroke-mst_orange ml-[100px] mt-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
            <h1
              class="text-center font-normal tracking-wide italic text-4xl m-5"
            >
              Full service
            </h1>
          </div>
          <div class="p-4 h-52 text-center text-base tracking-wide">
            <p>
              Wir verstehen uns als Full-Service-Dienstleister, d.h. wir stellen
              nicht nur die notwendigen technischen Geräte zur Verfügung,
              sondern sorgen auch dafür, dass sie perfekt für den jeweiligen
              Anlass installiert werden.
            </p>
          </div>
          <div class="p-10 ml-10">
            <router-link
              to="/fullService"
              type="button"
              class="
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
                mr-2
                mb-2
              "
            >
              Full service
            </router-link>
          </div>
        </div>
        <div
          class="
            item
            w-[300px]
            h-[500px]
            shadow-2xl
            shadow-mst_black
            place-items-center
          "
        >
          <div class="p-6">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-10 h-10 stroke-2 stroke-mst_orange ml-[100px] mt-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <h1
              class="text-center font-normal tracking-wide italic text-4xl m-5"
            >
              Verkauf
            </h1>
          </div>
          <div class="p-4 h-52 text-center text-base tracking-wide">
            <p>
              Nutzen Sie unsere kostenlose unverbindliche Bedarfsanalyse vor
              Ort. Wir erstellen Ihnen Ihre individuelle Lösung und machen Ihnen
              einen guten Preis. Bevorzugen Sie ein superaktuelles Neugerät oder
              tut es auch ein gepflegtes Gebrauchtes?
            </p>
          </div>
          <div class="p-10 ml-10">
            <router-link
              to="/sale"
              type="button"
              class="
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
                mr-2
                mb-2
              "
            >
              VERKAUF
            </router-link>
          </div>
        </div>
        <div
          class="
            item
            w-[300px]
            h-[500px]
            shadow-2xl
            shadow-mst_black
            place-items-center
          "
        >
          <div class="p-6">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-10 h-10 stroke-2 stroke-mst_orange ml-[100px] mt-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>

            <h1
              class="text-center font-normal tracking-wide italic text-4xl m-5"
            >
              Vermietung
            </h1>
          </div>
          <div class="p-4 h-52 text-center text-base tracking-wide">
            <p>
              Seien Sie gewiß, dass die zu leihenden Geräte immer in
              einwandfreiem Zustand sind. Alle Mietgegenstände werden regelmäßig
              gewartet. Die Mietpreise verstehen sich zzgl. der gesetzlichen
              MwSt., ab unserem Lager.
            </p>
          </div>
          <div class="p-10 ml-10">
            <router-link
              to="/rental"
              type="button"
              class="
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
                mr-2
                mb-2
              "
            >
              VERMIETUNG
            </router-link>
          </div>
        </div>
        <div
          class="
            item
            w-[300px]
            h-[500px]
            shadow-2xl
            shadow-mst_black
            place-items-center
          "
        >
          <div class="p-6">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-10 h-10 stroke-2 stroke-mst_orange ml-[100px] mt-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <h1
              class="text-center font-normal tracking-wide italic text-4xl m-5"
            >
              Streaming
            </h1>
          </div>
          <div class="p-4 h-52 text-center text-base tracking-wide">
            <p>
              Wir entwickeln und gestalten Ihr individuelles Portal mit Log-In
              Zertifizierung und weiteren technischen Finessen für einen
              problemlosen, attraktiven Stream ihres Events.
            </p>
          </div>
          <div class="p-10 ml-10">
            <router-link
              to="/streaming"
              type="button"
              class="
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
                mr-2
                mb-2
              "
            >
              STREAMING
            </router-link>
          </div>
        </div>
        <div
          class="
            item
            w-[300px]
            h-[500px]
            shadow-2xl
            shadow-mst_black
            place-items-center
          "
        >
          <div class="p-6">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-10 h-10 stroke-2 stroke-mst_orange ml-[100px] mt-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <h1
              class="text-center font-normal tracking-wide italic text-4xl m-5"
            >
              Smart Home
            </h1>
          </div>
          <div class="p-4 h-52 text-center text-base tracking-wide">
            <p>
              Wir automatisieren ihr Privat- oder Bürogebäude von der zentralen
              Lichtsteuerung bis hin zum komplett smart aufgebautem Gebäude.
              Hierbei setzen wir primär auf LOXONE – Home Server und
              entsprechende Peripheriegeräte.
            </p>
          </div>
          <div class="p-10 ml-10">
            <router-link
              to="/smarthome"
              type="button"
              class="
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
                mr-2
                mb-2
              "
            >
              SMART HOME
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


