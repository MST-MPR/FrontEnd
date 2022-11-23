<script setup>
import AppFlipCard from "../../components/app/AppFlipCard.vue";
</script>

<template>
  <div class="h-[1000px]">
    <div class="h-full w-full relative">
      <img
        src="../../assets/images/General/beamer.jpg"
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
          p-12
          font-mono
          italic
          sm:text-7xl
        "
      >
        Full Service
      </h1>

      <div class="p-24 -mt-20 m-auto w-[1300px] h-[800px]">
        <div class="grid overflow-hidden grid-cols-3 gap-10 w-full">
          <div class="box">
            <AppFlipCard
              title="KONFERENZ UND PRÄSENTATIONSTECHNIK"
              paragraph="Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind."
              
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="KONFERENZ UND PRÄSENTATIONSTECHNIK"
              paragraph="Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind."
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="KONFERENZ UND PRÄSENTATIONSTECHNIK"
              paragraph="Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind."
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="KONFERENZ UND PRÄSENTATIONSTECHNIK"
              paragraph="Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind."
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="KONFERENZ UND PRÄSENTATIONSTECHNIK"
              paragraph="Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind."
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="KONFERENZ UND PRÄSENTATIONSTECHNIK"
              paragraph="Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

