<template>
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
</template>