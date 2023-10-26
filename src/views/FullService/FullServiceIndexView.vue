<script setup>
import AppFlipCard from "../../components/app/AppFlipCard.vue";
</script>

<template>
  <div class="h-full">
    <div class="h-full w-full relative">
      <img
        src="/images/General/veranstaltung.jpg"
        class="
          w-full
          h-full
          object-cover
          absolute
          mix-blend-overlay
          object-left-bottom
          brightness-50
          blur
          md:object-center
        "
      />
      <h1
        class="
          text-center
          font-extrabold
          text-4xl
          py-10
          md:text-5xl
          2xl:text-7xl
          text-mst_white
        "
      >
        FULL SERVICE
      </h1>

      <div class="p-5 mx-auto md:px-10 xl:pb-12 xl:w-fit 2xl:px-24">
        <div
          class="
            grid
            overflow-hidden
            grid-row
            gap-10
            md:grid-cols-2 md:gap-12
            xl:gap-20 xl:grid-cols-3
          "
        >
          <div class="box">
            <AppFlipCard
              title="fullService.konferenz"
              paragraph="fullService.konferenzP"
              img="/images/FullService/conference.jpg"
              class="mx-auto"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="fullService.beleuchtung"
              paragraph="fullService.beleuchtungP"
              img="/images/FullService/lighting.jpg"
              class="mx-auto"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="fullService.edv"
              paragraph="fullService.edvP"
              img="/images/FullService/it.jpg"
              class="mx-auto"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="fullService.beschallung"
              paragraph="fullService.beschallungP"
              img="/images/FullService/sound.jpg"
              class="mx-auto"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="fullService.dokumentation"
              paragraph="fullService.dokumentationP"
              img="/images/FullService/documentation.jpg"
              class="mx-auto"
            />
          </div>
          <div class="box">
            <AppFlipCard
              title="fullService.möblierung"
              paragraph="fullService.möblierungP"
              img="/images/FullService/furniture.jpg"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

