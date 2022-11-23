<template>
  <div class="h-[600px] sm:h-[900px]">
    <div class="h-full w-full relative">
      <img
        src="../../assets/images/General/home.jpg"
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
          mb-2
          sm:mb-20
          font-mono
          italic
          sm:text-7xl
        "
      >
        Smart Home
      </h1>

      <div
        class="
          border-4
          border-mst_bg
          sm:mt-32
          w-full
          sm:w-[700px]
          h-[300px]
          drop-shadow-2xl
          m-auto
        "
      >
        <ul class="list-none p-6 sm:p-12 text-lg sm:text-2xl text-mst_white italic text-center">
          <li class="leading-normal tracking-wider mb-6">{{ $t("smartHomeView") }} </li>
          <li class="leading-normal tracking-wider mb-6 ">{{ $t("smartHomeView2") }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

