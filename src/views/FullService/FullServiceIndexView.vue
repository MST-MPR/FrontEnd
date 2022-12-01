<script setup>
import AppFlipCard from "../../components/app/AppFlipCard.vue";
</script>

<template>
  <div class="h-[2450px] sm:h-[1000px]">
    <div class="h-full w-full relative">
      <img
        src="../../assets/images/General/veranstaltung.jpg"
        class="
          w-full
          h-full
          object-cover
          absolute
          mix-blend-overlay
          object-left-bottom
          brightness-50
          blur
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
          sm:text-7xl
        "
      >
        Full Service
      </h1>

      <div class="p-7 mt-0 sm:p-20 sm:-mt-20 m-auto w-full sm:w-[1500px]">
        <div class="grid overflow-hidden grid-row sm:grid-cols-3 gap-24 w-full">
          <div class="box">
            <AppFlipCard
              title="konferenz"
              paragraph="konferenzP"
              img= "../src/assets/images/FullService/conference.jpg"
              class="-ml-20 sm:ml-0"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="beleuchtung"
              paragraph="beleuchtungP"
              img= "../src/assets/images/FullService/lighting.jpg"
              class="-ml-20 sm:ml-0"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="edv"
              paragraph="edvP"
              img= "../src/assets/images/FullService/it.jpg"
              class="-ml-20 sm:ml-0"
            />
          </div>
          <div class="box">
            <AppFlipCard
            title="beschallung"
              paragraph="beschallungP" 
              img= "../src/assets/images/FullService/sound.jpg"
              class="-ml-20 sm:ml-0"
              
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="dokumentation"
              paragraph="dokumentationP"
              img= "../src/assets/images/FullService/documentation.jpg"
              class="-ml-20 sm:ml-0"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="möblierung"
              paragraph="möblierungP"
              img= "../src/assets/images/FullService/furniture.jpg"
              class="-ml-20 sm:ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

